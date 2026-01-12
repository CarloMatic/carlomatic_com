import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "About Carlo Matic",
            text: [
                "Geek at heart, networker by passion.",
                "For three decades, I have been turning 'crazy ideas' into Red Dot award-winning realities. I live at the intersection of bits, branding, and business strategy. As CEO of Interactive Pioneers, I help ambitious brands stand out through innovation.",
                "When I'm not deep-diving into AI or crypto on the Nerd Show, you'll find me e-foiling or traveling the world with my Leica.",
                "Let's make waves together."
            ]
        },
        de: {
            title: "Über Carlo Matic",
            text: [
                "Geek im Herzen, Networker aus Leidenschaft.",
                "Seit drei Jahrzehnten verwandle ich 'verrückte Ideen' in Red Dot-prämierte Realitäten. Ich lebe an der Schnittstelle von Bits, Branding und Business-Strategie. Als CEO von Interactive Pioneers helfe ich ambitionierten Marken, mit Innovationen herauszustechen.",
                "Wenn ich nicht gerade in der Nerd Show in KI oder Krypto eintauche, findest du mich beim E-Foilen oder in der Welt unterwegs mit meiner Leica.",
                "Lass uns gemeinsam Wellen schlagen."
            ]
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
                    >
                        <div className="bg-white rounded-[32px] max-w-2xl w-full p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/20">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900"
                            >
                                <X size={24} />
                            </button>

                            {/* Content */}
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                    {content[language].title}
                                </h2>

                                <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
                                    {content[language].text.map((paragraph, index) => (
                                        <p key={index} className={index === 0 ? "font-medium text-gray-900 text-xl" : ""}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Signature removed */}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
