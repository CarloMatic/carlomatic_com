import { Suspense, lazy, useState } from 'react';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { useLanguage } from '../hooks/useLanguage';

// Lazy load heavy components
const BentoGrid = lazy(() => import('../components/BentoGrid').then(module => ({ default: module.BentoGrid })));
const VideoGrid = lazy(() => import('../components/VideoGrid').then(module => ({ default: module.VideoGrid })));
const SnakeGame = lazy(() => import('../components/games/SnakeGame').then(module => ({ default: module.SnakeGame })));

export function Home() {
    const { language } = useLanguage();
    const [isSnakeOpen, setIsSnakeOpen] = useState(false);

    const titles = {
        en: "Carlo Matic | Digital Innovator & Future Tech Strategist",
        de: "Carlo Matic | Digitaler Innovator & Future Tech Strategist"
    };

    const descriptions = {
        en: "Digital Innovator, CEO of Interactive Pioneers & Angel Investor. Shaping the future of Interaction, AI & Brands. Host of Die Nerd Show.",
        de: "Digitaler Innovator, CEO von Interactive Pioneers & Angel Investor. Die Zukunft von Interaktion, KI & Marken gestalten. Host von Die Nerd Show."
    };

    return (
        <>
            <SEO title={titles[language]} description={descriptions[language]} />

            {isSnakeOpen && (
                <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm text-white">Loading...</div>}>
                    <SnakeGame onClose={() => setIsSnakeOpen(false)} />
                </Suspense>
            )}

            <main className="w-full min-h-screen bg-brand-dark text-white selection:bg-brand-neon selection:text-black">
                <Hero onOpenSnake={() => setIsSnakeOpen(true)} />
                <Suspense fallback={<div className="min-h-screen bg-brand-dark" />}>
                    <BentoGrid />
                    <VideoGrid />
                </Suspense>
            </main>
            <Footer onOpenSnake={() => setIsSnakeOpen(true)} />
        </>
    );
}
