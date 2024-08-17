import { useParams } from 'react-router-dom'
import moviesJson from '../../../assets/movies/movies.json'
import styles from './Movie.module.css'
import AddList from './buttom/AddList'

const Movie = () => {
  const { id } = useParams()

  const movie = moviesJson.filter((mov) => {
    if (mov.id === id) {
      return mov
    }
  })

  return (
    <>
      <div className={styles['app']}>
        <div className={styles['app-background']}>
          <img className={styles['imagen']} src={movie[0].wallpaper} alt={movie[0].name} />

          <section className={styles['container']}>
            <h1>{movie[0].name}</h1>
            <p>{movie[0].gener}</p>
            <p>
              {movie[0].duration} - {movie[0].year}
            </p>

            <div className={styles['botonera']}>
              <button className={styles['botom']}>
                <svg
                  fill='currentColor'
                  aria-hidden='true'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  data-testid='icon-play'
                  className={styles['svg']}
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'>
                  <path d='M17.7642 7.86385C18.7453 8.36366 18.7453 9.63634 17.7642 10.1361L2.66343 17.8289C1.69706 18.3212 0.5 17.6925 0.5 16.6927V1.30727C0.5 0.307478 1.69706 -0.321171 2.66343 0.171123L17.7642 7.86385Z'></path>
                </svg>
                VER AHORA
              </button>

              <AddList id={movie[0].id} />
            </div>

            <h2>Detalles</h2>
            <hr />
            <h3>{movie[0].name}</h3>
            <p className={styles['details']}>{movie[0].details}</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Movie
