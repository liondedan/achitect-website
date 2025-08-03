import { render, screen } from '@testing-library/react';
import { ProjectThumbnail } from './ProjectThumbnail';
import { mockProjects } from '../data/projects';

describe('ProjectThumbnail', () => {
  it('renders the project details correctly', () => {
    const project = mockProjects[0];
    render(<ProjectThumbnail project={project} />);

    const title = screen.getByRole('heading', { name: project.title });
    const description = screen.getByText(project.description);
    const image = screen.getByRole('img');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});