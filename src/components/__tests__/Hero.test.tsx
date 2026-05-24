import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from '../Hero';
import { vi } from 'vitest';

// Mock hook to prevent error, but we will mostly use prop injection
vi.mock('../../hooks/useLanguage', () => ({
    useLanguage: () => ({ language: 'en' })
}));

// Mock complex sub-components
vi.mock('../ParticleBackground', () => ({
    ParticleBackground: () => <div data-testid="particle-bg" />
}));

vi.mock('../AboutModal', () => ({
    AboutModal: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
        isOpen ? <div role="dialog" aria-modal="true" onClick={onClose}>Mock Modal</div> : null
    )
}));

// Mock framer-motion to render children directly
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, onClick, role, 'aria-modal': ariaModal }: React.ComponentProps<'div'> & { 'aria-modal'?: string | boolean }) => (
            <div className={className} onClick={onClick} role={role} aria-modal={ariaModal}>{children}</div>
        )
    }
}));

describe('Hero Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders correctly in English (default)', () => {
        // Uses context default (en) or prop
        render(<Hero language="en" />);

        expect(screen.getByRole('heading', { name: /Digital Innovator/i })).toBeInTheDocument();
        expect(screen.getByText('Die Nerd Show')).toBeInTheDocument();
        expect(screen.getByText('BASED IN GERMANY')).toBeInTheDocument();
    });

    it('renders correctly in German (prop override)', () => {
        render(<Hero language="de" />);

        expect(screen.getByRole('heading', { name: /Digitaler Innovator/i })).toBeInTheDocument();
    });

    it('opens AboutModal when clicking the bio card', () => {
        render(<Hero language="en" />);

        // Find the bio card by unique text
        const bioCard = screen.getByText('CEO & Founder').closest('div');
        if (bioCard) fireEvent.click(bioCard);

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});
