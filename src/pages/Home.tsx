import { Hero } from '../components/Hero';
import { BentoGrid } from '../components/BentoGrid';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <main className="w-full min-h-screen bg-brand-dark text-white selection:bg-brand-neon selection:text-black">
            <Hero />
            <BentoGrid />
            <Footer />
            {/* Future sections: About, etc. */}
        </main>
    );
}
