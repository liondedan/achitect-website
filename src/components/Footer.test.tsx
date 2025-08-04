import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with the correct content', () => {
    render(<Footer />);

    // Ensure the "Get in touch" link is not present
    const contactLink = screen.queryByRole('link', { name: /get in touch/i });
    expect(contactLink).not.toBeInTheDocument();

    // Check for the combined inspirational and copyright text
    const footerText = screen.getByText(/Thoughtful design for everyday life. © \d{4} WD, Wales Design. All Rights Reserved./i);
    expect(footerText).toBeInTheDocument();
  });
});