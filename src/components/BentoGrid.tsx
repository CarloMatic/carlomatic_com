import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ventures } from '../data/ventures';
import { useLanguage } from '../context/LanguageContext';

export function BentoGrid() {
    const { language } = useLanguage();
    return (
        <section id="ventures" className="py-24 px-4 w-full max-w-7xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">
                    {language === 'en' ? 'Ventures &' : 'Projekte &'} <span className="text-brand-neon">Insights</span>
                </h2>
                <p className="text-gray-500 font-sans text-sm tracking-wide">
                    {language === 'en' ? 'Curated Projects & Thought Leadership' : 'Kuratierte Projekte & Thought Leadership'}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ventures.map((venture, index) => (
                    <motion.a
                        key={venture.id}
                        href={venture.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              group relative overflow-hidden forma-panel rounded-3xl p-8 md:p-10
              flex flex-col justify-between transition-all duration-300
              ${venture.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
            `}
                    >
                        {/* Conditional Background Image & Overlay */}
                        {'image' in venture && (
                            <>
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}${venture.image}')` }}
                                />
                                <div className="absolute inset-0 z-10 bg-white/80 group-hover:bg-white/70 transition-colors duration-300" />
                            </>
                        )}

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-gray-400 group-hover:text-brand-neon transition-colors">
                                    <venture.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="p-2 rounded-full border border-transparent text-gray-500 bg-transparent group-hover:border-brand-neon group-hover:text-brand-neon transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-900">{venture.title}</h3>
                            <p className="text-xs font-bold text-brand-neon mb-4 uppercase tracking-wider">{venture.role[language]}</p>
                            <p className={`${'image' in venture ? 'text-gray-800' : 'text-gray-500'} leading-relaxed`}>
                                {venture.description[language]}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
