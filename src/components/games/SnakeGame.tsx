import { useState, useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Game Constants
const COLS = 20; // Width
const ROWS = 12; // Height (Approx 1.66 ratio matching screen)
const BASE_SPEED = 180; // Slower start
const NOKIA_COLORS = {
    bg: '#c7f0d8', // Nokia Green Light
    pixel: '#43523d', // Nokia Dark (Pixels)
};

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface SnakeGameProps {
    onClose: () => void;
}

export function SnakeGame({ onClose }: SnakeGameProps) {
    const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 6 }]);
    const [food, setFood] = useState<Point>({ x: 15, y: 5 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    // Refs for input handling
    const directionRef = useRef<Direction>('RIGHT');
    const gameLoopRef = useRef<number | null>(null);

    // Initialize/Reset Game
    const startGame = () => {
        setSnake([{ x: 5, y: 6 }, { x: 4, y: 6 }, { x: 3, y: 6 }]); // Start with small tail
        setFood(generateFood());
        directionRef.current = 'RIGHT';
        setGameOver(false);
        setScore(0);
        setGameStarted(true);
    };

    const generateFood = (): Point => {
        return {
            x: Math.floor(Math.random() * COLS),
            y: Math.floor(Math.random() * ROWS)
        };
    };

    // Input Handling with Scroll Prevention
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        // Prevent default scrolling for game keys and navigation keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
            e.preventDefault();
        }

        if (!gameStarted || gameOver) return;

        const keyMap: { [key: string]: Direction } = {
            'ArrowUp': 'UP', 'w': 'UP', '2': 'UP',
            'ArrowDown': 'DOWN', 's': 'DOWN', '8': 'DOWN',
            'ArrowLeft': 'LEFT', 'a': 'LEFT', '4': 'LEFT',
            'ArrowRight': 'RIGHT', 'd': 'RIGHT', '6': 'RIGHT'
        };

        const newDir = keyMap[e.key];
        if (!newDir) return;

        // Prevent 180 degree turns
        const currentData = directionRef.current;
        if (newDir === 'UP' && currentData === 'DOWN') return;
        if (newDir === 'DOWN' && currentData === 'UP') return;
        if (newDir === 'LEFT' && currentData === 'RIGHT') return;
        if (newDir === 'RIGHT' && currentData === 'LEFT') return;

        directionRef.current = newDir;
    }, [gameStarted, gameOver]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        // Body scroll lock
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [handleKeyDown]);

    // Game Loop
    useEffect(() => {
        if (gameOver || !gameStarted) return;

        // Progressive Speed: +10% fast every 10 points
        const level = Math.floor(score / 10);
        const currentSpeed = Math.max(50, Math.floor(BASE_SPEED * Math.pow(0.9, level)));

        const moveSnake = () => {
            setSnake(prevSnake => {
                const head = { ...prevSnake[0] };
                const dir = directionRef.current;

                if (dir === 'UP') head.y -= 1;
                if (dir === 'DOWN') head.y += 1;
                if (dir === 'LEFT') head.x -= 1;
                if (dir === 'RIGHT') head.x += 1;

                // Check Collisions (Walls)
                if (
                    head.x < 0 || head.x >= COLS ||
                    head.y < 0 || head.y >= ROWS ||
                    prevSnake.some(segment => segment.x === head.x && segment.y === head.y)
                ) {
                    setGameOver(true);
                    return prevSnake;
                }

                const newSnake = [head, ...prevSnake];

                // Check Food
                if (head.x === food.x && head.y === food.y) {
                    setScore(s => s + 1);
                    setFood(generateFood());
                } else {
                    newSnake.pop(); // Remove tail
                }

                return newSnake;
            });
        };

        gameLoopRef.current = window.setInterval(moveSnake, currentSpeed);
        return () => {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [gameOver, gameStarted, food, score]);

    // Simple Control Helper
    const handleControl = (dir: Direction) => {
        const currentData = directionRef.current;
        if (dir === 'UP' && currentData === 'DOWN') return;
        if (dir === 'DOWN' && currentData === 'UP') return;
        if (dir === 'LEFT' && currentData === 'RIGHT') return;
        if (dir === 'RIGHT' && currentData === 'LEFT') return;
        directionRef.current = dir;
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-hidden"
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                {/* Close Button Top Right */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-[60]"
                >
                    <X size={40} />
                </button>

                <motion.div
                    initial={{ scale: 0.8, y: 100 }}
                    animate={{ scale: 1, y: 0 }}
                    // Adjusted sizing: Height constrained to viewport, Width auto based on aspect ratio
                    className="relative max-w-full h-auto max-h-[85vh] aspect-[960/1765] select-none"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Background Phone Image */}
                    <img
                        src={`${import.meta.env.BASE_URL}images/nokia-3310-snake-game-retro.webp`}
                        alt="Nokia 3310 Retro Phone Frame for Snake Game"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />

                    {/* LCD Screen Container - Refined Positioning for 84x48 ratio feel */}
                    {/* Width: 52% | New Height: 17% (was 19%) for better aspect ratio */}
                    <div
                        className="absolute bg-[#c7f0d8] overflow-hidden"
                        style={{
                            top: 'calc(24% + 25px)', // +27px - 2px = +25px
                            left: 'calc(24% - 9px)', // -10px + 1px = -9px
                            width: 'calc(52% + 2px)', // +2px width
                            height: 'calc(17% + 18px)', // +17px + 1px = +18px
                            borderRadius: '5% / 10%', // Reduced from 10% / 20%
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                        }}
                    >
                        {/* LCD Pixel Texture */}
                        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')] opacity-[0.08]" />

                        {!gameStarted ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#43523d] space-y-1">
                                <p className="text-[10px] font-mono animate-pulse">EasterEgg unlocked</p>
                                <h2 className="text-xl font-bold font-mono tracking-tighter">SNAKE II</h2>
                                <p className="text-[10px] font-mono">HIGH: {localStorage.getItem('snake_highscore') || 0}</p>
                                <button
                                    onClick={startGame}
                                    className="animate-pulse bg-[#43523d] text-[#c7f0d8] px-3 py-0.5 font-bold font-mono text-xs rounded-sm mt-1"
                                >
                                    PRESS START
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Score */}
                                <div className="absolute top-[2px] right-[9px] text-[#43523d] font-mono text-[10px] font-bold z-10 leading-none">
                                    {score.toString().padStart(3, '0')}
                                </div>

                                {/* Game Grid */}
                                <div
                                    className="w-full h-full grid p-[2%] border-2 border-[#43523d]/40 rounded-sm" // Reduced padding & added wall border
                                    style={{
                                        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                                        gridTemplateRows: `repeat(${ROWS}, 1fr)`
                                    }}
                                >
                                    {Array.from({ length: COLS * ROWS }).map((_, i) => {
                                        const x = i % COLS;
                                        const y = Math.floor(i / COLS);
                                        let isSnake = false;
                                        const isFood = (food.x === x && food.y === y);

                                        snake.forEach((s) => {
                                            if (s.x === x && s.y === y) isSnake = true;
                                        });

                                        return (
                                            <div
                                                key={i}
                                                style={{
                                                    backgroundColor: (isSnake || isFood) ? NOKIA_COLORS.pixel : 'transparent',
                                                }}
                                                className={`w-full h-full ${isFood ? 'transform rotate-45 scale-75' : ''} ${isSnake ? 'border-[0.5px] border-[#c7f0d8]' : ''}`} // Added slight border to snake segments for pixel look
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        {/* Game Over Screen */}
                        {gameOver && (
                            <div className="absolute inset-0 bg-[#c7f0d8]/95 flex flex-col items-center justify-center text-[#43523d] z-20">
                                <h2 className="text-lg font-bold font-mono mb-1">GAME OVER</h2>
                                <p className="font-mono text-xs mb-2">SCORE: {score}</p>
                                <button
                                    onClick={startGame}
                                    className="border-2 border-[#43523d] px-2 py-0.5 font-bold font-mono text-[10px] hover:bg-[#43523d] hover:text-[#c7f0d8]"
                                >
                                    AGAIN
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Invalid Click Zones (just examples, keeping simple for now) */}

                    {/* Navi Key */}
                    <button
                        className="absolute bg-white/0 hover:bg-white/10 rounded-[30%]"
                        style={{ top: '48%', left: '42%', width: '16%', height: '5%' }}
                        onClick={startGame}
                    />

                    {/* Nokia Keypad Controls (Mobile Support) */}

                    {/* 2 - UP */}
                    <button
                        className="absolute bg-white/0 hover:bg-white/10 active:bg-white/20 rounded-full z-50 tap-highlight-transparent"
                        style={{ top: '64%', left: '42%', width: '16%', height: '5%' }}
                        onClick={(e) => { e.stopPropagation(); handleControl('UP'); }}
                        aria-label="Up"
                    />

                    {/* 8 - DOWN */}
                    <button
                        className="absolute bg-white/0 hover:bg-white/10 active:bg-white/20 rounded-full z-50 tap-highlight-transparent"
                        style={{ top: '75%', left: '42%', width: '16%', height: '5%' }}
                        onClick={(e) => { e.stopPropagation(); handleControl('DOWN'); }}
                        aria-label="Down"
                    />

                    {/* 4 - LEFT */}
                    <button
                        className="absolute bg-white/0 hover:bg-white/10 active:bg-white/20 rounded-full z-50 tap-highlight-transparent"
                        style={{ top: '70%', left: '26%', width: '16%', height: '5%' }}
                        onClick={(e) => { e.stopPropagation(); handleControl('LEFT'); }}
                        aria-label="Left"
                    />

                    {/* 6 - RIGHT */}
                    <button
                        className="absolute bg-white/0 hover:bg-white/10 active:bg-white/20 rounded-full z-50 tap-highlight-transparent"
                        style={{ top: '70%', left: '58%', width: '16%', height: '5%' }}
                        onClick={(e) => { e.stopPropagation(); handleControl('RIGHT'); }}
                        aria-label="Right"
                    />

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
