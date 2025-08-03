import { render, screen } from '@testing-library/react';
import { ProcessStep } from '../types/process';
import ProcessStepCard from './ProcessStepCard';

const mockStep: ProcessStep = {
  title: 'Test Title',
  description: 'Test Description',
};

describe('ProcessStepCard', () => {
  it('renders the step title and description', () => {
    render(<ProcessStepCard step={mockStep} />);

    const title = screen.getByText(mockStep.title);
    const description = screen.getByText(mockStep.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});