import React, { createContext, useContext, useState } from 'react';

type ConsentStatus = 'accepted' | 'declined' | null;

interface CookieContextType {
    cookieConsent: ConsentStatus;
    setCookieConsent: (status: ConsentStatus) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
    const [cookieConsent, setCookieConsentState] = useState<ConsentStatus>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('cookie_consent') as ConsentStatus || null;
        }
        return null;
    });

    const setCookieConsent = (status: ConsentStatus) => {
        setCookieConsentState(status);
        if (status) {
            localStorage.setItem('cookie_consent', status);
        } else {
            localStorage.removeItem('cookie_consent');
        }
    };

    return (
        <CookieContext.Provider value={{ cookieConsent, setCookieConsent }}>
            {children}
        </CookieContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCookieContext() {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error('useCookieContext must be used within a CookieProvider');
    }
    return context;
}
