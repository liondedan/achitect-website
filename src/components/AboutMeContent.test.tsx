import { render, screen } from '@testing-library/react';
import AboutMeContent from './AboutMeContent';
import { aboutMeData } from '../data/about';

describe('AboutMeContent', () => {
  it('renders the biography and design philosophy', () => {
    render(<AboutMeContent data={aboutMeData} />);

    const bioHeading = screen.getByRole('heading', { name: /biography/i });
    expect(bioHeading).toBeInTheDocument();
    expect(screen.getByText(aboutMeData.biography)).toBeInTheDocument();

    const philosophyHeading = screen.getByRole('heading', { name: /design philosophy/i });
    expect(philosophyHeading).toBeInTheDocument();
    expect(screen.getByText(aboutMeData.designPhilosophy)).toBeInTheDocument();
  });

  it('renders the architect\'s image with correct alt text', () => {
    render(<AboutMeContent data={aboutMeData} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', aboutMeData.imageAltText);
  });
});