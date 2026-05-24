import { motion, AnimatePresence } from 'framer-motion';
import { useCookieContext } from '../context/CookieContext';
import { useLanguage } from '../hooks/useLanguage';

export function CookieBanner() {
    const { cookieConsent, setCookieConsent } = useCookieContext();
    const { language } = useLanguage();

    // Do not show if already decided
    if (cookieConsent !== null) return null;

    const content = {
        en: {
            text: "We use cookies to enable third-party content like YouTube videos. This helps us improve your experience.",
            accept: "Accept All",
            decline: "Necessary Only"
        },
        de: {
            text: "Wir verwenden Cookies, um Drittanbieter-Inhalte wie YouTube-Videos zu laden. Das hilft uns, dein Erlebnis zu verbessern.",
            accept: "Alle Akzeptieren",
            decline: "Nur Notwendige"
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            >
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-6 md:flex items-center justify-between gap-6">
                    <p className="text-gray-800 text-sm md:text-base font-medium mb-4 md:mb-0 leading-relaxed">
                        {content[language].text}
                    </p>
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={() => setCookieConsent('declined')}
                            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
                        >
                            {content[language].decline}
                        </button>
                        <button
                            onClick={() => setCookieConsent('accepted')}
                            className="px-6 py-3 rounded-full bg-brand-neon text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg shadow-brand-neon/20"
                        >
                            {content[language].accept}
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
