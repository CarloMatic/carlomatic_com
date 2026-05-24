import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useCookieContext } from '../context/CookieContext';

let gaInitialized = false;

export function useAnalytics() {
    const location = useLocation();
    const { cookieConsent } = useCookieContext();

    useEffect(() => {
        if (cookieConsent === 'accepted') {
            if (!gaInitialized) {
                const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

                if (GA_MEASUREMENT_ID) {
                    ReactGA.initialize(GA_MEASUREMENT_ID);
                    gaInitialized = true;
                } else {
                    console.warn('GA4 Measurement ID not found in environment variables (VITE_GA_MEASUREMENT_ID)');
                }
            }

            if (gaInitialized) {
                ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
            }
        }
    }, [cookieConsent, location]);
}
