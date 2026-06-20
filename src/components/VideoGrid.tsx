import { YouTubeEmbed } from './ui/YouTubeEmbed';
import { SpotifyEmbed } from './ui/SpotifyEmbed';
import { motion } from 'framer-motion';

export function VideoGrid() {
    const videos = [
        { id: 'JuOFBOZCe_0', title: 'Video 1' },
        { id: 'DFxE53MLk8c', title: 'Video 2' },
        { id: '9mKtXGiV92I', title: 'Aachen ohne Limits' },
        { id: 'uqrM-serb54', title: 'Vortrag Erstvorstellung Standortmarke "Aachen ohne Limits" im Digital Hub Aachen' },
        { id: 'qpEKbOyfhC4', title: 'Video 3' },
        { id: 'IeJMcCOKCKY', title: 'Carlo Matic - Ist er der vierte Samwer-Bruder?' }
    ];

    const podcasts = [
        { id: '5G2rZ3rzG4fk4QkGL8c4NV', title: 'Designerklärer: Wieviel Mut brauchst Du?' },
        { id: '6gd4t0aB1IUd8OLNVK9Ab7', title: 'Chancendenken: Wie arbeiten wir in Zukunft?' },
        { id: '6ZesONG5jE2vM1oBuAiIql', title: 'Unternehmertum & Innovation im Sport' }
    ];

    return (
        <section className="pt-8 pb-24 px-4 w-full max-w-7xl mx-auto relative z-10 space-y-8">
            {/* Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                    <motion.div
                        key={`vid-${video.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <YouTubeEmbed
                            videoId={video.id}
                            title={video.title}
                            thumbnailSrc={`${import.meta.env.BASE_URL}images/yt/${video.id}.jpg`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Podcasts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {podcasts.map((pod, index) => (
                    <motion.div
                        key={`pod-${pod.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    >
                        <SpotifyEmbed
                            episodeId={pod.id}
                            title={pod.title}
                            thumbnailSrc={`${import.meta.env.BASE_URL}images/spotify/${pod.id}.jpg`}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
