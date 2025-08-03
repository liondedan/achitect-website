import { Project } from '../types/project';
import { ProjectThumbnail } from './ProjectThumbnail';
import styles from './ProjectGallery.module.css';

interface ProjectGalleryProps {
  projects: Project[];
}

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  if (projects.length === 0) {
    return <p>Projects will be added soon</p>;
  }

  return (
    <div className={styles.gallery}>
      {projects.map((project) => (
        <ProjectThumbnail key={project.id} project={project} />
      ))}
    </div>
  );
};