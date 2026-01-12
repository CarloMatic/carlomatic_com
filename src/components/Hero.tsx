import { useState } from 'react';
import { motion } from 'framer-motion';
import { Podcast, ArrowUpRight } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { useLanguage } from '../hooks/useLanguage';
import { AboutModal } from './AboutModal';

export function Hero() {
    const { language } = useLanguage();
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const content = {
        en: {
            digitalInnovator: 'Digital Innovator',
            designingFuture: 'Designing the Future of Interaction',
            nerdShow: 'On Air / Podcast',
            nerdDesc: 'Deep Dives in AI, Crypto, Chips & Global Markets',
            ceoFounder: 'CEO & Founder',
            coFounder: 'Co-Founder',
            angelInvestor: 'Angel Investor',
            experience: '+15 years experience',
            geek: 'Geek',
            efoil: 'e-foiler, LEICAner, Thailand-Fan',
            basedIn: 'BASED IN GERMANY',
            ready: 'Ready to collaborate?',
            letsBuild: "Let's build something extraordinary together",
            viewWork: 'View Work',
            more: 'More'
        },
        de: {
            digitalInnovator: 'Digitaler Innovator',
            designingFuture: 'Gestaltung der Zukunft der Interaktion',
            nerdShow: 'On Air / Podcast',
            nerdDesc: 'Deep Dives in KI, Krypto, Chips & Globale Märkte',
            ceoFounder: 'CEO & Gründer',
            coFounder: 'Co-Founder',
            angelInvestor: 'Angel Investor',
            experience: '+15 Jahre Erfahrung',
            geek: 'Geek',
            efoil: 'e-foiler, LEICAner, Thailand-Fan',
            basedIn: 'HOMEBASE: DEUTSCHLAND',
            ready: 'Lust auf Neues?',
            letsBuild: 'Lass uns gemeinsam Großes erschaffen',
            viewWork: 'Projekte',
            more: 'Mehr'
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-brand-acc">
            <ParticleBackground />
            <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

            {/* Main Grid Container - Bento Style with Gaps */}
            {/* Tablet: 2 cols | Desktop: 3 cols */}
            {/* Height: Auto on tablet/mobile, Fixed 600px on Desktop to maintain bento rigidity */}
            {/* Main Grid Container - Bento Style with Gaps */}
            {/* Tablet & Desktop: 12 col grid for maximum flexibility */}
            {/* Row 1 Tablet: 8/4 | Row 1 Desktop: 8/4 */}
            {/* Row 2 Tablet: 6/6 | Row 2 Desktop: 5/7 (Expanded from 4/8 to fit longer bio text) */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 xl:grid-rows-2 h-auto xl:h-[600px] z-10 gap-6">

                {/* 1. Identity Card (Large, Top Left) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:col-span-8 xl:col-span-8 xl:row-span-1 forma-panel rounded-3xl relative border border-gray-200 overflow-hidden min-h-[350px] md:min-h-[400px] xl:min-h-0"
                >
                    {/* Background Image - Optimized for LCP */}
                    <img
                        src={`${import.meta.env.BASE_URL}Profilbild.webp`}
                        alt=""
                        className="absolute inset-0 z-0 w-full h-full object-cover"
                        fetchPriority="high" // Critical for LCP
                        loading="eager"
                    />

                    {/* White Overlay (80%) */}
                    <div className="absolute inset-0 z-10 bg-white/80" />

                    {/* Profile Picture (Top Right) - Explicit z-30 to ensure visibility */}
                    <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30">
                        <img
                            src={`${import.meta.env.BASE_URL}carlo-linkedin.webp`}
                            alt="Carlo Matic - Digital Innovator & CEO"
                            className="w-24 h-24 md:w-44 md:h-44 rounded-full border border-gray-100 shadow-sm object-cover"
                        />
                    </div>

                    {/* Content Container (Text) - z-20 */}
                    <div className="relative z-20 p-8 md:p-12 flex flex-col justify-between h-full bg-transparent">
                        <div>
                            <h2 className="text-xl md:text-2xl font-light text-gray-800 tracking-wide mb-2 uppercase">Digital <span className="text-gray-900 font-medium">Innovator</span></h2>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 uppercase">
                                Carlo <br className="xl:hidden" /> <span className="text-brand-neon">Matic</span>
                            </h1>
                        </div>
                        <div className="mt-8">
                            <p className="text-gray-800 font-mono text-sm uppercase tracking-widest">{content[language].designingFuture}</p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Status/Social Card (Small, Top Right) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-4 xl:col-span-4 xl:row-span-1 forma-panel rounded-3xl relative border border-gray-200 cursor-pointer group/nerd overflow-hidden min-h-[200px] xl:min-h-0"
                    onClick={() => window.open('https://www.dienerdshow.de', '_blank', 'noopener,noreferrer')}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover/nerd:scale-105"
                        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}dienerdshow.webp')` }}
                    />

                    {/* White Overlay (80%) */}
                    <div className="absolute inset-0 z-10 bg-white/80 group-hover/nerd:bg-white/70 transition-colors duration-300" />

                    {/* Background Visual (Podcast Icon - kept for subtle flair on top of overlay) */}
                    <div className="absolute -right-6 -bottom-6 z-10 opacity-10 text-gray-400 group-hover/nerd:opacity-20 group-hover/nerd:text-brand-neon transition-all duration-300 transform rotate-12">
                        <Podcast className="w-40 h-40" />
                    </div>

                    {/* Content Container - z-20 */}
                    <div className="relative z-20 p-8 flex flex-col justify-between h-full bg-transparent">
                        <div className="flex justify-between items-start">
                            <div className="w-3 h-3 bg-red-500 animate-pulse rounded-full" /> {/* Recording/Live dot */}
                            <span className="font-mono text-xs text-red-500 uppercase font-bold">{content[language].nerdShow}</span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1 group-hover/nerd:text-brand-neon transition-colors">Die Nerd Show</h3>
                            <p className="text-sm text-gray-800 text-balance uppercase tracking-tight leading-relaxed">{content[language].nerdDesc}</p>
                        </div>
                    </div>
                </motion.div>

                {/* ROW 2 Container - Custom Grid for Precise Bio/Action Split */}
                <div className="md:col-span-12 xl:col-span-12 xl:row-span-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[36%_1fr] gap-6">

                    {/* 3. Bio Card (Medium, Bottom Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onClick={() => setIsAboutOpen(true)}
                        className="forma-panel rounded-3xl p-8 flex flex-col justify-center items-start group border border-gray-200 bg-white min-h-[300px] xl:min-h-0 cursor-pointer relative"
                    >
                        {/* Interactive Hint */}
                        <div className="absolute top-6 right-6 transition-all duration-300 p-2 rounded-full border border-transparent group-hover:border-brand-neon text-gray-400 group-hover:text-brand-neon">
                            <ArrowUpRight size={20} />
                        </div>

                        <img
                            src={`${import.meta.env.BASE_URL}logo-ip.png`}
                            alt="Interactive Pioneers Logo"
                            className="h-10 w-auto mb-8 opacity-70 invert group-hover:invert-0 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-300"
                        />
                        <p className="text-gray-500 leading-relaxed text-base group-hover:text-black transition-colors duration-300">
                            <span className="text-gray-900 font-bold">{content[language].ceoFounder}</span> Interactive Pioneers <br />
                            <span className="text-gray-900 font-bold">{content[language].coFounder}</span> POWER+RADACH <br />
                            <span className="text-gray-900 font-bold">{content[language].angelInvestor}</span> {content[language].experience} <br />
                            <span className="text-gray-900 font-bold">{content[language].geek}</span> & {content[language].efoil}
                        </p>
                        <div className="mt-auto pt-6 w-full flex justify-between items-center border-t border-gray-100 group-hover:border-gray-300 transition-colors duration-300">
                            <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-black transition-colors duration-300">{content[language].basedIn}</span>
                            <span className="text-xs text-brand-neon font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">{content[language].more}</span>
                        </div>
                    </motion.div>

                    {/* 4. Action Card (Medium/Large, Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="forma-panel rounded-3xl p-8 md:p-12 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 border border-gray-200 bg-white min-h-[300px] xl:min-h-0"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 uppercase">{content[language].ready}</h3>
                            <p className="text-gray-500 mt-2 uppercase tracking-wide text-sm">{content[language].letsBuild}</p>
                        </div>
                        {/* Buttons stacked on tablet (flex-col), inline on desktop (xl:flex-row) */}
                        <div className="flex flex-col xl:flex-row gap-4 w-full xl:w-auto">
                            <button
                                onClick={() => window.open('https://interactive-pioneers.de', '_blank', 'noopener,noreferrer')}
                                className="px-8 py-4 bg-brand-neon text-white font-bold hover:bg-gray-900 transition-colors uppercase tracking-widest text-xs rounded-full shadow-lg shadow-brand-neon/30 hover:shadow-none w-full xl:w-auto text-center"
                            >
                                {content[language].viewWork}
                            </button>
                            <button
                                onClick={() => window.open('https://linkedin.com/in/carlomatic', '_blank', 'noopener,noreferrer')}
                                className="px-8 py-4 border border-gray-300 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-widest text-xs rounded-full w-full xl:w-auto text-center"
                            >
                                LinkedIn
                            </button>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
