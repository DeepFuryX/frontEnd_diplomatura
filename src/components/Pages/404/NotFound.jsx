import { Link } from 'react-router-dom'

import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles['body']}>
      <h1>404 - NOT FOUND</h1>
      <p>La pagina que buscas no se encuentra disponible</p>
      <Link to='/'>Inicio</Link>
    </div>
  )
}

export default NotFound
