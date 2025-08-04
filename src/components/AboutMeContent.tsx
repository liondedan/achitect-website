import Image from 'next/image';
import { AboutMe, ContentBlock } from '../types/about';
import styles from './AboutMeContent.module.css';

interface AboutMeContentProps {
  data: AboutMe;
}

const AboutMeContent: React.FC<AboutMeContentProps> = ({ data }) => {
  // Create pairs of [text, image] or [image, text]
  const pairedSections = [];
  let i = 0;
  while (i < data.contentBlocks.length) {
    const block1 = data.contentBlocks[i];
    const block2 = data.contentBlocks[i + 1];

    if (block1 && block2) {
      pairedSections.push([block1, block2]);
      i += 2;
    } else if (block1) {
      pairedSections.push([block1]);
      i += 1;
    }
  }

  return (
    <div className={styles.container}>
      {pairedSections.map((pair, index) => (
        <div
          key={index}
          className={`${styles.section} ${index % 2 === 1 ? styles.reversed : ''}`}
        >
          {pair.map((block, blockIndex) => {
            if (block.type === 'text') {
              return (
                <div key={blockIndex} className={styles.textWrapper}>
                  <p>{block.content}</p>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={blockIndex} className={styles.imageWrapper}>
                  <Image
                    src={block.url}
                    alt={block.altText}
                    width={400}
                    height={400}
                    className={styles.image}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default AboutMeContent;