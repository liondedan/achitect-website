import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/process-and-services">Process & Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header