import { motion } from 'framer-motion';
import { Terminal, Podcast } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-brand-acc">
            <ParticleBackground />

            {/* Main Grid Container - Bento Style with Gaps */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px] z-10 gap-6">

                {/* 1. Identity Card (Large, Top Left) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:col-span-2 md:row-span-1 forma-panel rounded-3xl p-8 md:p-12 flex flex-col justify-between group relative border border-gray-200 bg-white"
                >
                    <div className="absolute top-8 right-8">
                        <img
                            src="/carlo-linkedin.jpeg"
                            alt="Carlo Matic"
                            className="w-20 h-20 rounded-full border border-gray-100 shadow-sm object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-light text-gray-500 tracking-wide mb-2 uppercase">Digital <span className="text-gray-900 font-medium">Innovator</span></h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 uppercase">
                            Carlo <span className="text-brand-neon">Matic</span>
                        </h1>
                    </div>
                    <div className="mt-8">
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Designing the Future of Interaction</p>
                    </div>
                </motion.div>

                {/* 2. Status/Social Card (Small, Top Right) */}
                {/* 2. Status/Social Card (Small, Top Right) -> Die Nerd Show */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-1 md:row-span-1 forma-panel rounded-3xl p-8 flex flex-col justify-between h-full bg-gray-50 hover:bg-white transition-colors border border-gray-200 cursor-pointer group/nerd overflow-hidden relative"
                    onClick={() => window.open('https://www.dienerdshow.de', '_blank')}
                >
                    {/* Background Visual */}
                    {/* Background Visual */}
                    <div className="absolute -right-6 -bottom-6 opacity-10 text-gray-400 group-hover/nerd:opacity-20 group-hover/nerd:text-brand-neon transition-all duration-300 transform rotate-12">
                        <Podcast className="w-40 h-40" />
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                        <div className="w-3 h-3 bg-red-500 animate-pulse rounded-full" /> {/* Recording/Live dot */}
                        <span className="font-mono text-xs text-red-500 uppercase font-bold">On Air / Podcast</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-1 group-hover/nerd:text-brand-neon transition-colors">Die Nerd Show</h3>
                        <p className="text-sm text-gray-500 text-balance uppercase tracking-tight leading-relaxed">Deep Dives in KI, Krypto, Chips & Global Markets.</p>
                    </div>
                </motion.div>

                {/* 3. Bio Card (Medium, Bottom Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-1 md:row-span-1 forma-panel rounded-3xl p-8 flex flex-col justify-center items-start group border border-gray-200 bg-white"
                >
                    <img
                        src="/logo-ip.png"
                        alt="Interactive Pioneers Logo"
                        className="h-10 w-auto mb-8 opacity-70 invert group-hover:invert-0 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-300"
                    />
                    <p className="text-gray-500 leading-relaxed text-base group-hover:text-black transition-colors duration-300">
                        <span className="text-gray-900 font-bold">CEO & Founder</span> Interactive Pioneers <br />
                        <span className="text-gray-900 font-bold">Co-Founder</span> POWER+RADACH. <br />
                        <span className="text-gray-900 font-bold">Angel Investor</span> 15 years experience. <br />
                        <span className="text-gray-900 font-bold">Geek</span> & passionate e-foil rider.
                    </p>
                    <div className="mt-auto pt-6 w-full flex justify-between items-center border-t border-gray-100 group-hover:border-gray-300 transition-colors duration-300">
                        <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-black transition-colors duration-300">BASED IN GERMANY</span>
                    </div>
                </motion.div>

                {/* 4. Action Card (Medium/Large, Bottom Right) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-2 md:row-span-1 forma-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200 bg-white"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 uppercase">Ready to collaborate?</h3>
                        <p className="text-gray-500 mt-2 uppercase tracking-wide text-sm">Let's build something extraordinary together.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.open('https://interactive-pioneers.de', '_blank')}
                            className="px-8 py-4 bg-brand-neon text-white font-bold hover:bg-gray-900 transition-colors uppercase tracking-widest text-xs rounded-full shadow-lg shadow-brand-neon/30 hover:shadow-none"
                        >
                            View Work
                        </button>
                        <button
                            onClick={() => window.open('https://linkedin.com/in/carlomatic', '_blank')}
                            className="px-8 py-4 border border-gray-300 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-widest text-xs rounded-full"
                        >
                            LinkedIn
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
