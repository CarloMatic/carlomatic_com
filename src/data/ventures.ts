import { Globe, Rocket, Mic, HardHat, Bot, Users } from 'lucide-react';

export const ventures = [
    {
        id: 'interactive-pioneers',
        title: 'Interactive Pioneers',
        role: { en: 'CEO & Founder', de: 'CEO & Gründer' },
        description: { en: 'Digital Brand Studio building premium user experiences and digital value for global brands.', de: 'Digital Brand Studio für erstklassige Nutzererlebnisse und digitale Wertschöpfung für globale Marken.' },
        icon: Globe,
        link: 'https://interactive-pioneers.de',
        size: 'medium',
        color: 'from-blue-500/20 to-purple-500/20',
        image: 'interactive-pioneers-digital-brand-studio-background.webp',
        iconImage: 'interactive-pioneers-logo-white.webp'
    },
    {
        id: 'place-branding-aachen',
        title: 'Place Branding Aachen e.V.',
        role: { en: 'Initiator & Chairman', de: 'Initiator & Vorstandsvorsitzender' },
        description: { en: 'Our entrepreneurial initiative for a powerful city brand. Aachen Without Limits.', de: 'Unsere Unternehmer-Initiative für eine wirksame Standortmarke. Aachen Ohne Limits.' },
        icon: Globe,
        link: 'https://www.aachenohnelimits.de/',
        size: 'medium',
        color: 'from-purple-500/20 to-fuchsia-500/20',
        image: 'pba-infinity-bg.png',
        bgContain: true,
        iconImage: 'place-branding-aachen-logo.webp'
    },
    {
        id: 'drehturm',
        title: 'Drehturm Belvedere',
        role: { en: 'Owner', de: 'Eigentümer' },
        description: { en: 'Revitalizing Aachen’s iconic landmark. Ideally located, historic views, modern vision.', de: 'Revitalisierung von Aachens Wahrzeichen. Ideale Lage, historischer Ausblick, moderne Vision.' },
        icon: Globe, // Keeping generic or finding a better one? Globe fits a landmark place. 
        link: 'https://www.drehturm.de',
        size: 'medium',
        color: 'from-yellow-500/20 to-amber-500/20',
        image: 'drehturm-belvedere-aachen-landmark.webp'
    },
    {
        id: 'construction',
        title: 'Construction 4.0',
        role: { en: 'Thought Leader', de: 'Vordenker' },
        description: { en: 'Bridging the analog gap. "Construction must think IT." Digital Twins & Smart Buildings.', de: 'Brückenschlag zur Digitalisierung. "Bau muss IT mitdenken." Digitale Zwillinge & Smart Buildings.' },
        icon: HardHat,
        link: 'https://www.smartbuilding.one',
        size: 'medium',
        color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
        id: 'ai-ux',
        title: 'AI & UX',
        role: { en: 'Innovator', de: 'Innovator' },
        description: { en: 'The future of UX is Agentic. Artificial Intelligence as the new interface.', de: 'Die Zukunft von UX ist Agentic. Künstliche Intelligenz als das neue Interface.' },
        icon: Bot,
        link: 'https://www.linkedin.com/posts/carlomatic_kiagents-kaesnstlicheintelligenz-digitaletransformation-activity-7275075634781908992-Ws8e',
        size: 'medium',
        color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        id: 'culture',
        title: 'Startup Culture',
        role: { en: 'Mentor', de: 'Mentor' },
        description: { en: 'Empathy, Resilience, and High-Performance Teams. It’s all about the people.', de: 'Empathie, Resilienz und High-Performance Teams. Es geht immer um die Menschen.' },
        icon: Users,
        link: 'https://www.linkedin.com/posts/carlomatic_innovation-startupjourney-graesnderszene-activity-7263087100097441792-OBE3',
        size: 'medium',
        color: 'from-pink-500/20 to-rose-500/20'
    },
    {
        id: 'speaking',
        title: 'Public Speaking',
        role: { en: 'Keynote Speaker', de: 'Keynote Speaker' },
        description: { en: 'Talks on User Experience, Innovation, and the Future of AI.', de: 'Vorträge über User Experience, Innovation und die Zukunft der KI.' },
        icon: Mic,
        link: 'https://www.linkedin.com/posts/carlomatic_meet-the-founder-br%C3%BCcken-bauen-zwischen-activity-7380903031275413504-DdNh',
        size: 'large',
        color: 'from-indigo-500/20 to-violet-500/20'
    },
    {
        id: 'angel',
        title: 'Angel Investor',
        role: { en: 'Business Angel', de: 'Business Angel' },
        description: { en: 'Supporting early-stage startups with capital and strategic UX expertise.', de: 'Unterstützung von Startups in der Frühphase mit Kapital und strategischer UX-Expertise.' },
        icon: Rocket,
        link: 'https://www.linkedin.com/posts/carlomatic_startupweekac-powerflasher-supr-activity-7368913266825170945-RN5f',
        size: 'medium',
        color: 'from-orange-500/20 to-red-500/20'
    }
];
