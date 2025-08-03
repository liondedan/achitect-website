import { render, screen } from '@testing-library/react';
import { ProjectGallery } from './ProjectGallery';
import { mockProjects } from '../data/projects';

describe('ProjectGallery', () => {
  it('renders a list of project thumbnails', () => {
    render(<ProjectGallery projects={mockProjects} />);

    const projectTitles = screen.getAllByRole('heading');
    expect(projectTitles).toHaveLength(mockProjects.length);
  });

  it('renders a message when there are no projects', () => {
    render(<ProjectGallery projects={[]} />);

    const message = screen.getByText(/Projects will be added soon/i);
    expect(message).toBeInTheDocument();
  });
});