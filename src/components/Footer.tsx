import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

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
                        <SocialLink href="http://github.com/carlomatic" icon={Github} label="GitHub" />
                        <SocialLink href="https://twitter.com/carlomatic" icon={Twitter} label="Twitter" />
                        <SocialLink
                            href="mailto:cm@interactive-pioneers.de"
                            icon={Mail}
                            label="Email"
                        />
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
                    <p>made with love and <a href="https://github.com/manusco/resonance" target="_blank" rel="noopener noreferrer" className="hover:text-brand-neon transition-colors font-medium">resonance</a> &copy; {currentYear} Carlo Matic. All rights reserved.</p>
                    <p>
                        System Status: <span className="text-brand-neon font-bold">OPERATIONAL</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#00f0ff' }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
            aria-label={label}
        >
            <Icon size={20} />
        </motion.a>
    );
}
