import { Service } from '../types/process';
import styles from './ServiceListItem.module.css';

interface ServiceListItemProps {
  service: Service;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({ service }) => {
  return (
    <li className={styles.item}>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
    </li>
  );
};

export default ServiceListItem;