import { Terminal, Globe, Rocket, Mic, Podcast, HardHat, Bot, Users } from 'lucide-react';

export const ventures = [
    {
        id: 'interactive-pioneers',
        title: 'Interactive Pioneers',
        role: 'CEO & Founder',
        description: 'Digital Brand Studio building premium user experiences and digital value for global brands.',
        icon: Globe,
        link: 'https://interactive-pioneers.de',
        size: 'large', // Spans 2 cols
        color: 'from-blue-500/20 to-purple-500/20'
    },
    {
        id: 'drehturm',
        title: 'Drehturm Belvedere',
        role: 'Owner',
        description: 'Revitalizing Aachen’s iconic landmark. Ideally located, historic views, modern vision.',
        icon: Globe, // Keeping generic or finding a better one? Globe fits a landmark place. 
        link: 'https://www.drehturm.de',
        size: 'medium',
        color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
        id: 'construction',
        title: 'Construction 4.0',
        role: 'Thought Leader',
        description: 'Bridging the analog gap. "Construction must think IT." Digital Twins & Smart Buildings.',
        icon: HardHat,
        link: 'https://www.smartbuilding.one',
        size: 'medium',
        color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
        id: 'ai-ux',
        title: 'AI & UX',
        role: 'Innovator',
        description: 'The future of UX is Agentic. Artificial Intelligence as the new interface.',
        icon: Bot,
        link: 'https://www.linkedin.com/posts/carlomatic_kiagents-kaesnstlicheintelligenz-digitaletransformation-activity-7275075634781908992-Ws8e',
        size: 'medium',
        color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        id: 'culture',
        title: 'Startup Culture',
        role: 'Mentor',
        description: 'Empathy, Resilience, and High-Performance Teams. It’s all about the people.',
        icon: Users,
        link: 'https://www.linkedin.com/posts/carlomatic_innovation-startupjourney-graesnderszene-activity-7263087100097441792-OBE3',
        size: 'medium',
        color: 'from-pink-500/20 to-rose-500/20'
    },
    {
        id: 'speaking',
        title: 'Public Speaking',
        role: 'Keynote Speaker',
        description: 'Talks on User Experience, Innovation, and the Future of AI.',
        icon: Mic,
        link: 'https://www.linkedin.com/posts/carlomatic_meet-the-founder-br%C3%BCcken-bauen-zwischen-activity-7380903031275413504-DdNh',
        size: 'large',
        color: 'from-indigo-500/20 to-violet-500/20'
    },
    {
        id: 'angel',
        title: 'Angel Investor',
        role: 'Business Angel',
        description: 'Supporting early-stage startups with capital and strategic UX expertise.',
        icon: Rocket,
        link: 'https://www.linkedin.com/posts/carlomatic_startupweekac-powerflasher-supr-activity-7368913266825170945-RN5f',
        size: 'medium',
        color: 'from-orange-500/20 to-red-500/20'
    }
];
