import { Play } from 'lucide-react';
import { useCookieContext } from '../../context/CookieContext';
import { useLanguage } from '../../hooks/useLanguage';

interface SpotifyEmbedProps {
    episodeId: string;
    title: string;
    className?: string;
    thumbnailSrc?: string;
}

export function SpotifyEmbed({ episodeId, title, className = '', thumbnailSrc }: SpotifyEmbedProps) {
    const { cookieConsent, setCookieConsent } = useCookieContext();
    const { language } = useLanguage();

    const allowed = cookieConsent === 'accepted';

    const content = {
        en: {
            blocked: "Please accept cookies to listen to this podcast.",
            enable: "Enable Content"
        },
        de: {
            blocked: "Bitte Cookies akzeptieren, um den Podcast zu hören.",
            enable: "Inhalt aktivieren"
        }
    };

    if (allowed) {
        return (
            <div className={`h-[154px] w-full rounded-3xl overflow-hidden border border-gray-200 bg-black ${className}`}>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full h-full"
                />
            </div>
        );
    }

    // Blocked State
    return (
        <div
            className={`cursor-pointer group relative h-[154px] w-full rounded-3xl overflow-hidden border border-gray-200 bg-black ${className}`}
            onClick={() => {
                if (cookieConsent === 'declined') {
                    setCookieConsent(null);
                } else {
                    setCookieConsent('accepted');
                }
            }}
        >
            {/* Background Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl"
                style={{ backgroundImage: `url(${thumbnailSrc})` }}
            />

            <div className="absolute inset-0 flex items-center p-4">
                {/* Square Thumbnail Left */}
                <img
                    src={thumbnailSrc}
                    alt={`Play ${title}`}
                    className="h-full w-auto rounded-xl shadow-lg group-hover:scale-105 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10 mr-6"
                />

                {/* Text Content */}
                <div className="flex-1 z-20 flex flex-col justify-center items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-brand-neon group-hover:border-brand-neon transition-all duration-300">
                            <Play className="w-4 h-4 text-white group-hover:text-black fill-current ml-0.5" />
                        </div>
                        <span className="text-white font-bold text-sm line-clamp-1">{title}</span>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg">
                        <span className="text-brand-neon text-[10px] font-bold uppercase tracking-widest">
                            {content[language].enable}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
