import { render, screen } from '@testing-library/react';
import { Service } from '../types/process';
import ServiceListItem from './ServiceListItem';

const mockService: Service = {
  name: 'Test Service',
  description: 'Test Service Description',
};

describe('ServiceListItem', () => {
  it('renders the service name and description', () => {
    render(<ServiceListItem service={mockService} />);

    const name = screen.getByText(mockService.name);
    const description = screen.getByText(mockService.description);

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});