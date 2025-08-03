import { ProcessStep } from '../types/process';
import styles from './ProcessStepCard.module.css';

interface ProcessStepCardProps {
  step: ProcessStep;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step }) => {
  return (
    <div className={styles.card}>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  );
};

export default ProcessStepCard;