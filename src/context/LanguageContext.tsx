import { useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LanguageContext, type Language } from './LanguageContextDefinition';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [searchParams, setSearchParams] = useSearchParams();

    // Internal state for when no URL param is present
    const [internalLanguage, setInternalLanguage] = useState<Language>(() => {
        const hostname = window.location.hostname;
        if (hostname.endsWith('.de')) return 'de';

        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('de')) return 'de';

        return 'en';
    });

    // Derived state: URL param takes precedence
    const langParam = searchParams.get('lang');
    const language = (langParam === 'de' || langParam === 'en') ? langParam : internalLanguage;

    const setLanguage = (lang: Language) => {
        setInternalLanguage(lang);
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
