import React from 'react';
import { ServicesPageData } from '../types/services';
import styles from './ServicesContent.module.css';

interface ServicesContentProps {
  data: ServicesPageData;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{data.intro.title}</h1>
        <p className={styles.paragraph}>{data.intro.content}</p>
      </div>
      <hr className={styles.hr} />
      {data.serviceSections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.subtitle}>{section.title}</h2>
          <p className={styles.paragraph}>{section.description}</p>
          <ul className={styles.serviceList}>
            {section.services.map((service, i) => (
              <li key={i} className={styles.serviceListItem}>
                {service}
              </li>
            ))}
          </ul>
          {index < data.serviceSections.length - 1 && (
            <hr className={styles.hr} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesContent;