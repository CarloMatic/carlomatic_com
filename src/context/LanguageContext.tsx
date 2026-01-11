import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

type Language = 'en' | 'de';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        // 1. Check Query Param
        const langParam = searchParams.get('lang');
        if (langParam === 'de' || langParam === 'en') {
            setLanguageState(langParam);
            return;
        }

        // 2. Check Domain TLD
        const hostname = window.location.hostname;
        if (hostname.endsWith('.de')) {
            setLanguageState('de');
            return;
        }

        // 3. Default to EN
        setLanguageState('en');
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        setSearchParams({ lang });
    };

    const t = (key: string) => {
        // Simple translation placeholder if needed, mostly used for simple strings
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
