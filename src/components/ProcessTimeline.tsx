import { ProcessStep } from '../types/process';
import ProcessStepCard from './ProcessStepCard';
import styles from './ProcessTimeline.module.css';

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <ProcessStepCard key={index} step={step} />
      ))}
    </div>
  );
};

export default ProcessTimeline;