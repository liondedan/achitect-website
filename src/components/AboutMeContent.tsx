import Image from 'next/image';
import { AboutMe } from '../types/about';
import styles from './AboutMeContent.module.css';

interface AboutMeContentProps {
  data: AboutMe;
}

const AboutMeContent: React.FC<AboutMeContentProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={data.imageUrl}
          alt={data.imageAltText}
          width={300}
          height={300}
          className={styles.image}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//VrPQAJDgNaKV144gAAAABJRU5ErkJggg=="
        />
      </div>
      <div className={styles.textContainer}>
        <section>
          <h2>A Life in Architecture — Rooted in Wales</h2>
          <p>{data.biography}</p>
          <p>{data.designPhilosophy}</p>
        </section>
      </div>
    </div>
  );
};

export default AboutMeContent;