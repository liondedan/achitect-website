import { Service } from '../types/process';
import ServiceListItem from './ServiceListItem';
import styles from './ServiceList.module.css';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <ul className={styles.list}>
      {services.map((service, index) => (
        <ServiceListItem key={index} service={service} />
      ))}
    </ul>
  );
};

export default ServiceList;