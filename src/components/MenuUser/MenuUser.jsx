import { useState } from 'react'
import styles from './MenuUser.module.css'

const MenuUser = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenuOpen = () => {
    setIsOpen(true)
  }
  const toggleMenuClose = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar} onMouseEnter={toggleMenuOpen} onMouseLeave={toggleMenuClose}>
      <div className={styles.menuIcon}>&#9776; {/* Ícono del menú hamburguesa */}</div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Servicios</a>
        </li>
        <li>
          <a href='#'>Acerca de</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuUser
