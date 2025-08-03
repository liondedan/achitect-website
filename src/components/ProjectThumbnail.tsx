import Image from 'next/image';
import { Project } from '../types/project';
import styles from './ProjectThumbnail.module.css';

interface ProjectThumbnailProps {
  project: Project;
}

export const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
  return (
    <div className={styles.thumbnail}>
      <Image src={project.imageUrl} alt={project.title} width={400} height={300} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};