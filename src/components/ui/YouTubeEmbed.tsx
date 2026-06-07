import { Play } from 'lucide-react';
import { useCookieContext } from '../../context/CookieContext';
import { useLanguage } from '../../hooks/useLanguage';

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
    className?: string;
    thumbnailSrc?: string;
}

export function YouTubeEmbed({ videoId, title, className = '', thumbnailSrc }: YouTubeEmbedProps) {
    const { cookieConsent, setCookieConsent } = useCookieContext();
    const { language } = useLanguage();

    const allowed = cookieConsent === 'accepted';

    const content = {
        en: {
            blocked: "Please accept cookies to watch this video.",
            enable: "Enable Content"
        },
        de: {
            blocked: "Bitte Cookies akzeptieren, um das Video zu sehen.",
            enable: "Inhalt aktivieren"
        }
    };

    if (allowed) {
        return (
            <div className={`aspect-video w-full rounded-3xl overflow-hidden border border-gray-200 bg-black ${className}`}>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
        );
    }

    // Blocked State (Same design as PrivacyEmbed but triggers Consent)
    return (
        <div
            className={`cursor-pointer group relative aspect-video w-full rounded-3xl overflow-hidden border border-gray-200 bg-black ${className}`}
            onClick={() => {
                if (cookieConsent === 'declined') {
                    setCookieConsent(null); // Re-open banner
                } else {
                    setCookieConsent('accepted'); // Direct accept
                }
            }}
        >
            {/* Thumbnail */}
            <img
                src={thumbnailSrc || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`Play ${title}`}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-4 group-hover:scale-110 group-hover:bg-brand-neon group-hover:border-brand-neon transition-all duration-300">
                    <Play className="w-6 h-6 text-white group-hover:text-black fill-current ml-1" />
                </div>
                <p className="text-white font-medium text-sm md:text-base max-w-xs leading-relaxed">
                    {content[language].blocked}
                </p>
                <span className="mt-3 text-brand-neon text-xs font-bold uppercase tracking-widest border-b border-brand-neon pb-0.5">
                    {content[language].enable}
                </span>
            </div>
        </div>
    );
}
