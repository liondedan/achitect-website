import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import heroImage from '../assets/images/wales-architect.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Architectural Designer in Pembrokeshire & West Wales</h1>
        <p className={styles.heroSubtitle}>
          I’m a Welsh-speaking architectural designer with over 30 years of experience — the last three decades running my own practice in West Wales.
        </p>
        <p className={styles.heroBody}>
          I’ve worked across the UK, but what I love most is creating homes that feel right for the people who live in them. Now working independently, I focus on extensions, renovations, and one-off homes that are designed to be lived in.
        </p>
        <p className={styles.heroBody}>
          With deep local knowledge and long-standing relationships across the region, I offer a hands-on, practical approach — from first ideas to final details.
        </p>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src={heroImage}
          alt="Modern home extension by a Pembrokeshire architectural designer"
          className={styles.heroImage}
          priority
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Hero;