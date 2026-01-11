import { useState, useEffect, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LanguageContext, type Language } from './LanguageContextDefinition';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Initialize state lazily to avoid effect update
    const [language, setLanguageState] = useState<Language>(() => {
        const langParam = new URLSearchParams(window.location.search).get('lang');
        if (langParam === 'de' || langParam === 'en') return langParam;

        const hostname = window.location.hostname;
        if (hostname.endsWith('.de')) return 'de';

        return 'en';
    });

    // Sync state with URL params if they change externally (back/forward)
    useEffect(() => {
        const langParam = searchParams.get('lang');
        if ((langParam === 'de' || langParam === 'en') && langParam !== language) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguageState(langParam);
        }
    }, [searchParams, language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setSearchParams({ lang });
    };

    const t = (key: string) => {
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Context only. Hook is in src/hooks/useLanguage.ts
