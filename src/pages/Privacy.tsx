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
                    <h1 className="text-4xl font-bold mb-8 uppercase">Privacy Policy</h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Privacy at a glance</h2>
                            <p>
                                <strong>General Notes</strong><br />
                                The following notes provide a simple overview of what happens to your personal data when you visit this website.
                            </p>
                            <p className="mt-2">
                                <strong>Data collection on this website</strong><br />
                                This website is hosted on GitHub Pages. GitHub may collect traffic data (log files) over which we have no influence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Hosting</h2>
                            <p>
                                We host the content of our website with the following provider:<br />
                                <strong>GitHub Inc.</strong><br />
                                88 Colin P Kelly Jr St<br />
                                San Francisco, CA 94107<br />
                                USA<br />
                                <br />
                                For more details, please refer to GitHub's Privacy Statement: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" className="text-brand-neon underline">GitHub Privacy Statement</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Cookies & Tracking</h2>
                            <p>
                                This website uses <strong>no tracking cookies</strong> and no analysis tools (such as Google Analytics). Only technically necessary connection data is processed by the host.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
