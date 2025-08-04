import { render, screen } from '@testing-library/react';
import AboutMeContent from './AboutMeContent';
import { aboutMeData } from '../data/about';

describe('AboutMeContent', () => {
  it('renders the biography and design philosophy', () => {
    render(<AboutMeContent data={aboutMeData} />);

    expect(screen.getByText(aboutMeData.biography)).toBeInTheDocument();
    expect(screen.getByText(/Over the years, I’ve worked on everything/)).toBeInTheDocument();
  });

  it("renders the architect's images with correct alt text", () => {
    render(<AboutMeContent data={aboutMeData} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(aboutMeData.images.length);
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('alt', aboutMeData.images[index].altText);
    });
  });
});