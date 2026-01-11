import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import { useLanguage } from '../hooks/useLanguage';

export function Privacy() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Privacy Policy',
            one: {
                title: '1. Privacy at a glance',
                general: '<strong>General Notes</strong><br />The following notes provide a simple overview of what happens to your personal data when you visit this website.',
                collection: '<strong>Data collection on this website</strong><br />This website is hosted on GitHub Pages. GitHub may collect traffic data (log files) over which we have no influence.'
            },
            two: {
                title: '2. Hosting',
                text: 'We host the content of our website with the following provider:<br /><strong>GitHub Inc.</strong><br />88 Colin P Kelly Jr St<br />San Francisco, CA 94107<br />USA<br /><br />For more details, please refer to GitHub\'s Privacy Statement: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" class="text-brand-neon underline">GitHub Privacy Statement</a>.'
            },
            three: {
                title: '3. Cookies & Tracking',
                text: 'This website uses <strong>no tracking cookies</strong> and no analysis tools (such as Google Analytics). Only technically necessary connection data is processed by the host.'
            }
        },
        de: {
            title: 'Datenschutzerklärung',
            one: {
                title: '1. Datenschutz auf einen Blick',
                general: '<strong>Allgemeine Hinweise</strong><br />Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.',
                collection: '<strong>Datenerfassung auf dieser Website</strong><br />Diese Website wird bei GitHub Pages gehostet. GitHub erfasst möglicherweise Verkehrsdaten (Logfiles), auf die wir keinen Einfluss haben.'
            },
            two: {
                title: '2. Hosting',
                text: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br /><strong>GitHub Inc.</strong><br />88 Colin P Kelly Jr St<br />San Francisco, CA 94107<br />USA<br /><br />Weitere Details entnehmen Sie der Datenschutzerklärung von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" class="text-brand-neon underline">GitHub Privacy Statement</a>.'
            },
            three: {
                title: '3. Cookies & Tracking',
                text: 'Diese Website verwendet <strong>keine Tracking-Cookies</strong> und keine Analysetools (wie Google Analytics). Es werden lediglich technisch notwendige Verbindungsdaten durch den Hoster verarbeitet.'
            }
        }
    };

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
                    <h1 className="text-4xl font-bold mb-8 uppercase">{content[language].title}</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].one.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: content[language].one.general }} />
                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: content[language].one.collection }} />
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].two.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: content[language].two.text }} />
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].three.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: content[language].three.text }} />
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
