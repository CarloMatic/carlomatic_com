import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface SEOProps {
    title: string;
    description?: string;
}

export function SEO({ title, description }: SEOProps) {
    const { language } = useLanguage();

    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Description
        if (description) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', description);

            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.setAttribute('content', description);

            const twitterDesc = document.querySelector('meta[property="twitter:description"]');
            if (twitterDesc) twitterDesc.setAttribute('content', description);
        }

        // Update Lang Attribute
        document.documentElement.lang = language;

        // Update OG Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);

    }, [title, description, language]);

    return null;
}
