import { render, screen, fireEvent } from '@testing-library/react';
import { AboutModal } from '../AboutModal';
import { vi } from 'vitest';
import { LanguageProvider } from '../../context/LanguageContext';
import { MemoryRouter } from 'react-router-dom';

// Helper to render with real Provider
const renderWithProvider = (ui: React.ReactNode, initialEntry = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialEntry]}>
            <LanguageProvider>
                {ui}
            </LanguageProvider>
        </MemoryRouter>
    );
};

describe('AboutModal', () => {
    it('does not render when closed', () => {
        renderWithProvider(<AboutModal isOpen={false} onClose={vi.fn()} />);
        expect(screen.queryByText(/About/i)).not.toBeInTheDocument();
    });

    it('renders when open', () => {
        renderWithProvider(<AboutModal isOpen={true} onClose={vi.fn()} />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onClose = vi.fn();
        renderWithProvider(<AboutModal isOpen={true} onClose={onClose} />);

        const closeButton = screen.getByRole('button', { name: /Close/i });
        fireEvent.click(closeButton);
        expect(onClose).toHaveBeenCalled();
    });
});
