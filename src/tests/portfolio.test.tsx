import { render, screen } from '@testing-library/react';
import PortfolioPage from './portfolio';

describe('PortfolioPage', () => {
  it('renders a heading', () => {
    render(<PortfolioPage />);

    const heading = screen.getByRole('heading', {
      name: /Portfolio/i,
    });

    expect(heading).toBeInTheDocument();
  });
});