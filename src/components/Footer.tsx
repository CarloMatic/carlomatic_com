import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const XLogo = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { language, setLanguage } = useLanguage();

    const labels = {
        en: { imprint: 'Imprint', privacy: 'Privacy' },
        de: { imprint: 'Impressum', privacy: 'Datenschutz' }
    };

    return (
        <footer id="contact" className="w-full border-t border-gray-200 relative overflow-hidden bg-brand-acc">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            CARLO <span className="text-brand-neon">MATIC</span>
                        </h3>

                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <SocialLink href="https://linkedin.com/in/carlomatic" icon={Linkedin} label="LinkedIn" />
                        <SocialLink href="https://www.instagram.com/carlomatic/" icon={Instagram} label="Instagram" />
                        <SocialLink href="https://www.facebook.com/carlo.matic78" icon={Facebook} label="Facebook" />
                        <SocialLink href="https://x.com/carlomatic" icon={XLogo} label="X (Twitter)" />
                        <SocialLink
                            onClick={() => {
                                const user = 'cm';
                                const domain = 'interactive-pioneers';
                                const tld = 'de';
                                window.location.href = `mailto:${user}@${domain}.${tld}`;
                            }}
                            icon={Mail}
                            label="Email"
                        />
                    </div>
                </div>


                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
                    <p>
                        &copy; {currentYear} Carlo Matic. All rights reserved. <span className="mx-2"> | </span>
                        <a href="#/imprint" className="hover:text-brand-neon transition-colors">{labels[language].imprint}</a>
                        <span className="mx-2"> | </span>
                        <a href="#/privacy" className="hover:text-brand-neon transition-colors">{labels[language].privacy}</a>
                    </p>

                    {/* Language Switch */}
                    <div className="flex gap-2 font-bold text-gray-400">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`transition-colors hover:text-brand-neon ${language === 'en' ? 'text-gray-900' : ''}`}
                        >EN</button>
                        <span>|</span>
                        <button
                            onClick={() => setLanguage('de')}
                            className={`transition-colors hover:text-brand-neon ${language === 'de' ? 'text-gray-900' : ''}`}
                        >DE</button>
                    </div>

                    <p>
                        made with love and <a href="https://github.com/manusco/resonance" target="_blank" rel="noopener noreferrer" className="hover:text-brand-neon transition-colors font-medium">resonance</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, onClick, icon: Icon, label }: { href?: string; onClick?: () => void; icon: React.ElementType; label: string }) {
    return (
        <motion.button
            onClick={onClick ? onClick : () => href && window.open(href, '_blank', 'noopener,noreferrer')}
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 255, 255)" }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
            aria-label={label}
        >
            <Icon size={20} />
        </motion.button>
    );
}
