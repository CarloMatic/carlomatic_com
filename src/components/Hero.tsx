import { useState } from 'react';
import { motion } from 'framer-motion';
import { Podcast, ArrowUpRight } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { useLanguage } from '../hooks/useLanguage';
import { AboutModal } from './AboutModal';

import type { Language } from '../context/LanguageContextDefinition';

interface HeroProps {
    language?: Language;
    onOpenSnake?: () => void;
}

export function Hero({ language: propLanguage, onOpenSnake }: HeroProps = {}) {
    const { language: contextLanguage } = useLanguage();
    const language = propLanguage || contextLanguage;

    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const content = {
        en: {
            digitalInnovator: 'Digital Innovator',
            designingFuture: "Who said it can't be done?",
            nerdShow: 'On Air / Podcast',
            nerdDesc: 'Deep Dives in AI, Crypto, Chips & Global Markets',
            ceoFounder: 'CEO & Founder',
            coFounder: 'Co-Founder',
            angelInvestor: 'Angel Investor',
            experience: '+30 years experience',
            geek: 'Geek',
            efoil: 'e-foiler, LEICAner, Thailand-Fan',
            basedIn: 'BASED IN GERMANY',
            ready: 'Ready to collaborate?',
            letsBuild: "Let's build something extraordinary together",
            viewWork: 'View Work',
            more: 'More',
            ipSuffix: ' - The award-winning digital brand studio',
            prSuffix: ' Advertising Agency',
            initiator: 'Initiator'
        },
        de: {
            digitalInnovator: 'Digitaler Innovator',
            designingFuture: 'Wer hat gesagt das geht nicht?',
            nerdShow: 'On Air / Podcast',
            nerdDesc: 'Deep Dives in KI, Krypto, Chips & Globale Märkte',
            ceoFounder: 'CEO & Gründer',
            coFounder: 'Co-Founder',
            angelInvestor: 'Angel Investor',
            experience: '+30 Jahre Erfahrung',
            geek: 'Geek',
            efoil: 'e-foiler, LEICAner, Thailand-Fan',
            basedIn: 'HOMEBASE: DEUTSCHLAND',
            ready: 'Lust auf Neues?',
            letsBuild: 'Lass uns gemeinsam Großes erschaffen',
            viewWork: 'Projekte',
            more: 'Mehr',
            ipSuffix: ' - Das preisgekrönte digitale Brandstudio',
            prSuffix: ' Werbeagentur',
            initiator: 'Initiator'
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-brand-acc">
            <ParticleBackground />
            <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

            {/* Main Grid Container - Bento Style */}
            {/* Tablet: 2 cols | Desktop: 2 cols */}
            {/* Row 1: Identity (Full Width) */}
            {/* Row 2: Bio (1/2), Nerd (1/2) */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 h-auto z-10">

                {/* 1. Identity Card (Full Width Header) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => window.open('https://linkedin.com/in/carlomatic', '_blank', 'noopener,noreferrer')}
                    className="md:col-span-2 forma-panel rounded-3xl relative border border-gray-200 overflow-hidden min-h-[400px] cursor-pointer active:scale-[0.99] transition-transform"
                >
                    {/* Background Image - Optimized for LCP */}
                    <img
                        src={`${import.meta.env.BASE_URL}carlo-matic-ceo-interactive-pioneers-profile.webp`}
                        alt="Carlo Matic - Digital Innovator, CEO Interactive Pioneers & Angel Investor"
                        className="absolute inset-0 z-0 w-full h-full object-cover object-[center_30%]"
                        fetchPriority="high" // Critical for LCP
                        loading="eager"
                        width="1200"
                        height="630"
                    />

                    {/* Content Container (Text) - Localized Overlay */}
                    <div className="relative z-20 p-4 md:p-8 flex flex-col justify-end h-full items-start w-full">
                        <div
                            className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-sm w-fit md:max-w-lg cursor-help hover:bg-white/20 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                onOpenSnake?.();
                            }}
                        >
                            <h2 className="text-lg md:text-xl font-light text-white/90 tracking-wide mb-0 leading-none uppercase">
                                {content[language].digitalInnovator.split(' ')[0]} <span className="text-white font-medium">{content[language].digitalInnovator.split(' ')[1]}</span>
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase whitespace-nowrap leading-none">
                                Carlo <span className="text-brand-neon">Matic</span>
                            </h1>
                            <div className="mt-3">
                                <p className="text-white/90 font-mono text-xs uppercase tracking-widest">{content[language].designingFuture}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Bio Card (1/2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onClick={() => setIsAboutOpen(true)}
                    className="md:col-span-1 forma-panel rounded-3xl p-8 flex flex-col justify-between items-start group border border-gray-200 bg-white min-h-[300px] cursor-pointer relative"
                >
                    <ArrowUpRight size={20} className="absolute top-6 right-6 text-gray-400 group-hover:text-brand-neon transition-colors" />

                    <img
                        src={`${import.meta.env.BASE_URL}interactive-pioneers-logo-black.webp`}
                        alt="Interactive Pioneers - Digital Brand Studio Logo"
                        className="h-8 w-auto opacity-70 invert group-hover:invert-0 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-300"
                        width="200"
                        height="50"
                        decoding="async"
                    />

                    <div className="mt-4">
                        <p className="text-gray-500 leading-relaxed text-sm group-hover:text-black transition-colors duration-300">
                            <span className="block mb-1"><span className="text-gray-900 font-bold">{content[language].ceoFounder}</span> Interactive Pioneers{content[language].ipSuffix}</span>
                            <span className="block mb-1"><span className="text-gray-900 font-bold">{content[language].coFounder}</span> POWER+RADACH{content[language].prSuffix}</span>
                            <span className="block mb-1"><span className="text-gray-900 font-bold">{content[language].initiator}</span> Place Branding Aachen e.V.</span>
                            <span className="block mb-1"><span className="text-gray-900 font-bold">{content[language].angelInvestor}</span> {content[language].experience}</span>
                            <span className="block"><span className="text-gray-900 font-bold">{content[language].geek}</span> & {content[language].efoil}</span>
                        </p>
                    </div>

                    <div className="mt-auto pt-4 w-full flex justify-between items-center border-t border-gray-100 group-hover:border-gray-300 transition-colors duration-300">
                        <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-black transition-colors duration-300">{content[language].basedIn}</span>
                    </div>
                </motion.div>

                {/* 3. Nerd Show (1/2) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-1 forma-panel rounded-3xl relative border border-gray-200 cursor-pointer group/nerd overflow-hidden min-h-[300px]"
                    onClick={() => window.open('https://www.dienerdshow.de', '_blank', 'noopener,noreferrer')}
                >
                    {/* Background Image - Semantic & Lazy Loaded */}
                    <img
                        src={`${import.meta.env.BASE_URL}die-nerd-show-podcast-cover-carlo-matic.webp`}
                        alt="Die Nerd Show - Podcast Cover with Carlo Matic"
                        className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-700 group-hover/nerd:scale-105"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="600"
                    />
                    <div className="absolute inset-0 z-10 bg-white/80 group-hover/nerd:bg-white/70 transition-colors duration-300" />

                    {/* Content */}
                    <div className="relative z-20 p-8 flex flex-col justify-between h-full bg-transparent">
                        <div className="flex justify-between items-start">
                            <div className="w-3 h-3 bg-red-500 animate-pulse rounded-full" />
                            <Podcast className="w-6 h-6 text-gray-400 group-hover/nerd:text-brand-neon transition-colors" />
                        </div>
                        <div>
                            <span className="font-mono text-xs text-red-500 uppercase font-bold block mb-1">{content[language].nerdShow}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover/nerd:text-brand-neon transition-colors leading-none">Die Nerd Show</h3>
                            <p className="text-gray-500 text-sm leading-tight group-hover/nerd:text-gray-900 transition-colors mt-2">{content[language].nerdDesc}</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
