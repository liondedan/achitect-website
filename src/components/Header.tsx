import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">STUDIO</Link>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="menu">
        Menu
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/process-and-services">Process</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header