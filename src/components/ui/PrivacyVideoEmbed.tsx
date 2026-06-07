import { useState } from 'react';
import { Play } from 'lucide-react';

interface PrivacyVideoEmbedProps {
    videoId: string;
    title: string;
    className?: string;
}

export function PrivacyVideoEmbed({ videoId, title, className = '' }: PrivacyVideoEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <div className={`aspect-video w-full rounded-3xl overflow-hidden border border-gray-800 bg-black ${className}`}>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
        );
    }

    return (
        <div
            className={`cursor-pointer group relative aspect-video w-full rounded-3xl overflow-hidden border border-gray-800 bg-black ${className}`}
            onClick={() => setIsLoaded(true)}
        >
            {/* Thumbnail */}
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`Play ${title}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-brand-neon group-hover:border-brand-neon transition-all duration-300">
                    <Play className="w-6 h-6 text-white group-hover:text-black fill-current ml-1" />
                </div>
            </div>

            {/* Privacy Badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                    Click to Load
                </span>
            </div>
        </div>
    );
}
