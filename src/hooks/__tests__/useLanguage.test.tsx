import { renderHook, act } from '@testing-library/react';
import { useLanguage } from '../useLanguage';
import { LanguageProvider } from '../../context/LanguageContext';
import { MemoryRouter } from 'react-router-dom';

describe('useLanguage', () => {
    it('should default to "en" or browser preference', () => {
        // We wrap with Provider AND Router because LanguageContext uses useSearchParams
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MemoryRouter>
                <LanguageProvider>{children}</LanguageProvider>
            </MemoryRouter>
        );

        const { result } = renderHook(() => useLanguage(), { wrapper });

        expect(result.current.language).toBeDefined();
        expect(['en', 'de']).toContain(result.current.language);
    });

    it('should switch language', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <MemoryRouter>
                <LanguageProvider>{children}</LanguageProvider>
            </MemoryRouter>
        );

        const { result } = renderHook(() => useLanguage(), { wrapper });

        act(() => {
            result.current.setLanguage('de');
        });

        expect(result.current.language).toBe('de');

        act(() => {
            result.current.setLanguage('en');
        });

        expect(result.current.language).toBe('en');
    });
});
