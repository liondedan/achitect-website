import { render, screen } from '@testing-library/react';
import AboutMeContent from './AboutMeContent';
import { AboutMe } from '../types/about';

const mockAboutMeData: AboutMe = {
  contentBlocks: [
    {
      type: 'text',
      content: 'This is the first paragraph of the biography.',
    },
    {
      type: 'image',
      url: '/test-image-1.jpg',
      altText: 'A descriptive alt text for the first image.',
    },
    {
      type: 'text',
      content: 'This is the design philosophy section.',
    },
    {
      type: 'image',
      url: '/test-image-2.jpg',
      altText: 'A descriptive alt text for the second image.',
    },
  ],
};

describe('AboutMeContent', () => {
  it('renders a mix of text and image content blocks', () => {
    render(<AboutMeContent data={mockAboutMeData} />);

    // Check for text content
    expect(screen.getByText('This is the first paragraph of the biography.')).toBeInTheDocument();
    expect(screen.getByText('This is the design philosophy section.')).toBeInTheDocument();

    // Check for images
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('alt', 'A descriptive alt text for the first image.');
    expect(images[1]).toHaveAttribute('alt', 'A descriptive alt text for the second image.');
  });

});