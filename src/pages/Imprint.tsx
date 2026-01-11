import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export function Imprint() {
    const navigate = useNavigate();

    return (
        <main className="w-full min-h-screen bg-brand-acc text-gray-900 relative">
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
                    <h1 className="text-4xl font-bold mb-8 uppercase">Impressum</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Angaben gemäß § 5 TMG</h2>
                            <p>
                                Carlo Matic<br />
                                c/o Interactive Pioneers GmbH<br />
                                Belvedereallee 5<br />
                                52070 Aachen<br />
                                Germany
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Kontakt</h2>
                            <p>
                                Telefon: +49 (0) 241 510000 0<br />
                                E-Mail: cm@interactive-pioneers.de
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p>
                                Carlo Matic<br />
                                Belvedereallee 5<br />
                                52070 Aachen
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Haftungsausschluss</h2>
                            <p className="text-sm text-gray-500">
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
