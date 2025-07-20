import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('should display the title and subtitle', () => {
    render(<HeroImage backgroundImage="bg.jpg" title="Hello" subtitle="Sub" />);
    expect(screen.getByText('Hello')).toBeVisible();
    expect(screen.getByText('Sub')).toBeVisible();
  });

  it('should apply disabled styles when disabled is true', () => {
    render(<HeroImage backgroundImage="bg.jpg" title="Hello" disabled />);
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveStyle('filter: grayscale(100%)');
    expect(container).toHaveStyle('pointer-events: none');
  });
});
