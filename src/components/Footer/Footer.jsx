import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['container-footer']}>
      <h2>Imagen</h2>
      <div className={styles['text-footer']}>
        <p>Disney todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
