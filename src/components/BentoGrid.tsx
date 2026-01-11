import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ventures } from '../data/ventures';

export function BentoGrid() {
    return (
        <section id="ventures" className="py-24 px-4 w-full max-w-7xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold tracking-tight mb-2 text-gray-900">Ventures & <span className="text-brand-neon">Insights</span></h2>
                <p className="text-gray-500 font-sans text-sm tracking-wide">Curated Projects & Thought Leadership</p>
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
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-gray-400 group-hover:text-brand-neon transition-colors">
                                    <venture.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="p-2 bg-gray-50 rounded-full group-hover:bg-brand-neon group-hover:text-white transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-900">{venture.title}</h3>
                            <p className="text-xs font-bold text-brand-neon mb-4 uppercase tracking-wider">{venture.role}</p>
                            <p className="text-gray-500 leading-relaxed">
                                {venture.description}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
