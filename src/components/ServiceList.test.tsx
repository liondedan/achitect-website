import { render, screen } from '@testing-library/react';
import { services } from '../data/process';
import ServiceList from './ServiceList';

describe('ServiceList', () => {
  it('renders a list of services', () => {
    render(<ServiceList services={services} />);

    services.forEach(service => {
      const serviceName = screen.getByText(service.name);
      expect(serviceName).toBeInTheDocument();
    });
  });
});