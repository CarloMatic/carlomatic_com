import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import { useLanguage } from '../hooks/useLanguage';

import { SEO } from '../components/SEO';

export function Imprint() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Imprint',
            seoTitle: 'Imprint | Carlo Matic',
            tmgTitle: 'Information according to § 5 TMG',
            contactTitle: 'Contact',
            responsibleTitle: 'Responsible for content according to § 55 Abs. 2 RStV',
            disclaimerTitle: 'Disclaimer',
            disclaimerText: 'Despite careful control of the contents, we do not assume any liability for the contents of external links. The operators of the linked pages are solely responsible for their content.',
            germany: 'Germany',
            phone: 'Phone'
        },
        de: {
            title: 'Impressum',
            seoTitle: 'Impressum | Carlo Matic',
            tmgTitle: 'Angaben gemäß § 5 TMG',
            contactTitle: 'Kontakt',
            responsibleTitle: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
            disclaimerTitle: 'Haftungsausschluss',
            disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
            germany: 'Deutschland',
            phone: 'Telefon'
        }
    };

    return (
        <main className="w-full min-h-screen bg-brand-acc text-gray-900 relative">
            <SEO title={content[language].seoTitle} description={content[language].disclaimerText} />
            <ParticleBackground />

            <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-500 hover:text-brand-neon transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft size={16} /> Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="forma-panel p-8 md:p-16 rounded-3xl border border-gray-200"
                >
                    <h1 className="text-4xl font-bold mb-8 uppercase">{content[language].title}</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].tmgTitle}</h2>
                            <p>
                                Carlo Matic<br />
                                c/o Interactive Pioneers GmbH<br />
                                Belvedereallee 5<br />
                                52070 Aachen<br />
                                {content[language].germany}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].contactTitle}</h2>
                            <p>
                                {content[language].phone}: +49 241 918801
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].responsibleTitle}</h2>
                            <p>
                                Carlo Matic<br />
                                Belvedereallee 5<br />
                                52070 Aachen
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].disclaimerTitle}</h2>
                            <p className="text-sm text-gray-500">
                                {content[language].disclaimerText}
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
