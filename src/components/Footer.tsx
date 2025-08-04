import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <p>
        Thoughtful design for everyday life. © {new Date().getFullYear()} WD, Wales Design. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;