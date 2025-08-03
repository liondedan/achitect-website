import Image from 'next/image';
import styles from './PortfolioSection.module.css';

interface PortfolioSectionProps {
  title: string;
  text: string[];
  imageUrl: string;
  imageAlt: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={imageAlt} width={500} height={500} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;