import { render, screen } from '@testing-library/react';
import { processSteps } from '../data/process';
import ProcessTimeline from './ProcessTimeline';

describe('ProcessTimeline', () => {
  it('renders a list of process steps', () => {
    render(<ProcessTimeline steps={processSteps} />);

    processSteps.forEach(step => {
      const stepTitle = screen.getByText(step.title);
      expect(stepTitle).toBeInTheDocument();
    });
  });
});