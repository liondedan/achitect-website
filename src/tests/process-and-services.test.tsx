import { render, screen } from '@testing-library/react';
import ProcessPage from './process-and-services';
import { processSteps, services } from '../data/process';

describe('ProcessPage', () => {
  it('renders a heading', () => {
    render(<ProcessPage />);

    const heading = screen.getByRole('heading', {
      name: /My Process & Services/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the process steps and services', () => {
    render(<ProcessPage />);

    processSteps.forEach(step => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });

    services.forEach(service => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });
  });
});