import { render, screen } from '@testing-library/react';
import ContactPage from './contact';

describe('ContactPage', () => {
  it('renders a heading and the contact form', () => {
    render(<ContactPage />);

    const heading = screen.getByRole('heading', {
      name: /Contact Us/i,
    });

    expect(heading).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  });
});