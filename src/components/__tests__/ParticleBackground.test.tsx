import { render } from '@testing-library/react';
import { ParticleBackground } from '../ParticleBackground';
import { vi } from 'vitest';

describe('ParticleBackground', () => {
    it('renders canvas without crashing', () => {
        // Mock getContext to avoid errors if jsdom environment is strict
        HTMLCanvasElement.prototype.getContext = vi.fn();

        render(<ParticleBackground />);
        // Since it returns a canvas, we just check if it renders
        const canvas = document.querySelector('canvas');
        expect(canvas).toBeInTheDocument();
    });
});
