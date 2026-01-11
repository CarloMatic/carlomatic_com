import { useRef, useEffect } from 'react';

/**
 * ParticleBackground Component
 * Renders a subtle, slow-moving particle network using HTML5 Canvas.
 * Adapted for Light Mode: Light grey particles (`rgba(0,0,0,0.1)`).
 */
export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];

        // Configuration
        const particleCount = 120; // Number of dots (Doubled)
        const connectionDistance = 150; // Max distance to draw line
        const moveSpeed = 0.2; // Very slow drift
        const particleColor = 'rgba(0, 0, 0, 0.2)'; // Darker grey (was 0.08)
        const lineColor = 'rgba(0, 0, 0, 0.08)'; // Darker lines (was 0.03)

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle class moved outside


        // Initialize
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas.width, canvas.height, moveSpeed));
        }

        // Animation Loop
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and Update Particles
            particles.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx, particleColor);

                // Draw Connections
                for (let j = 0; j < particles.length; j++) {
                    if (particle === particles[j]) continue;

                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;

    constructor(width: number, height: number, speed: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Random slow velocity
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.size = Math.random() * 2 + 1; // Size 1-3px
    }

    update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
