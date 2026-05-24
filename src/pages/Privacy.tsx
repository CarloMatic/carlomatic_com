import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import { useLanguage } from '../hooks/useLanguage';

import { SEO } from '../components/SEO';

export function Privacy() {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const content = {
        en: {
            title: 'Privacy Policy',
            seoTitle: 'Privacy Policy | Carlo Matic',
            seoDesc: 'Privacy Policy for carlomatic.com',
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
                title: '3. Analytics & Tracking',
                text: '<strong>Google Analytics (GA4)</strong><br />This website uses functions of the web analytics service Google Analytics. The provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.<br /><br />Google Analytics enables the website operator to analyze the behavior of website visitors. The data collected allows us to optimize the website and its performance.<br /><br /><strong>Consent:</strong><br />The processing of your data is based on your consent (Art. 6 (1) (a) GDPR). You can revoke your consent at any time by changing the cookie settings. <br /><br /><strong>IP Anonymization:</strong><br />The IP anonymization feature is active on this website. Your IP address will be shortened by Google within the European Union before processing.'
            },
            four: {
                title: '4. Plugins & Tools',
                text: '<strong>YouTube</strong><br />This website embeds videos from YouTube. The operator of the pages is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.<br /><br />We use YouTube in <strong>extended data protection mode</strong>. According to YouTube, this mode means that YouTube does not store any information about visitors to this website before they watch the video. However, the transfer of data to YouTube partners is not necessarily excluded by the extended data protection mode.'
            }
        },
        de: {
            title: 'Datenschutzerklärung',
            seoTitle: 'Datenschutzerklärung | Carlo Matic',
            seoDesc: 'Datenschutzerklärung für carlomatic.com',
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
                title: '3. Analyse & Tracking',
                text: '<strong>Google Analytics (GA4)</strong><br />Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.<br /><br />Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Die gesammelten Daten helfen uns, die Website und deren Performance zu optimieren.<br /><br /><strong>Einwilligung:</strong><br />Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen ändern.<br /><br /><strong>IP-Anonymisierung:</strong><br />Die Funktion IP-Anonymisierung ist auf dieser Website aktiv. Ihre IP-Adresse wird von Google innerhalb der Europäischen Union vor der Verarbeitung gekürzt.'
            },
            four: {
                title: '4. Plugins & Tools',
                text: '<strong>YouTube</strong><br />Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.<br /><br />Wir nutzen YouTube im <strong>erweiterten Datenschutzmodus</strong>. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus jedoch nicht zwingend ausgeschlossen.'
            }
        }
    };

    return (
        <main className="w-full min-h-screen bg-brand-acc text-gray-900 relative">
            <SEO title={content[language].seoTitle} description={content[language].seoDesc} />
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

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{content[language].four.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: content[language].four.text }} />
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
