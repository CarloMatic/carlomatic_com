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
                    console.log("[Analytics] Initializing GA4 with ID:", GA_MEASUREMENT_ID);
                    try {
                        ReactGA.initialize(GA_MEASUREMENT_ID);
                        gaInitialized = true;
                        console.log("[Analytics] GA4 Initialized successfully");
                    } catch (error) {
                        console.error("[Analytics] Error during GA4 initialization:", error);
                    }
                } else {
                    console.warn('[Analytics] GA4 Measurement ID not found in environment variables (VITE_GA_MEASUREMENT_ID)');
                }
            }

            if (gaInitialized) {
                const pagePath = location.pathname + location.search;
                console.log("[Analytics] Sending pageview for path:", pagePath);
                try {
                    ReactGA.send({ hitType: "pageview", page: pagePath });
                    console.log("[Analytics] Pageview sent successfully");
                } catch (error) {
                    console.error("[Analytics] Error sending pageview:", error);
                }
            }
        } else {
            console.log("[Analytics] Cookie consent state is:", cookieConsent, "- GA4 tracking inactive");
        }
    }, [cookieConsent, location]);
}
