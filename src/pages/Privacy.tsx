import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export function Privacy() {
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
                    <h1 className="text-4xl font-bold mb-8 uppercase">Datenschutzerklärung</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Datenschutz auf einen Blick</h2>
                            <p>
                                <strong>Allgemeine Hinweise</strong><br />
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                            </p>
                            <p className="mt-2">
                                <strong>Datenerfassung auf dieser Website</strong><br />
                                Diese Website wird bei GitHub Pages gehostet. GitHub erfasst möglicherweise Verkehrsdaten (Logfiles), auf die wir keinen Einfluss haben.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Hosting</h2>
                            <p>
                                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                                <strong>GitHub Inc.</strong><br />
                                88 Colin P Kelly Jr St<br />
                                San Francisco, CA 94107<br />
                                USA<br />
                                <br />
                                Weitere Details entnehmen Sie der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="text-brand-neon underline">GitHub Privacy Statement</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Cookies & Tracking</h2>
                            <p>
                                Diese Website verwendet <strong>keine Tracking-Cookies</strong> und keine Analysetools (wie Google Analytics). Es werden lediglich technisch notwendige Verbindungsdaten durch den Hoster verarbeitet.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
