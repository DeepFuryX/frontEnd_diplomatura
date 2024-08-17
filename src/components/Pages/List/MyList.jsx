import { useEffect, useState } from 'react'
import moviesJson from '../../../assets/movies/movies.json'
import styles from './MyList.module.css'
import { useNavigate } from 'react-router-dom'

const MyList = () => {
  const navigate = useNavigate()
  const [storedState, setStoredState] = useState(false)
  const [valueStorage, setValueStorage] = useState([])

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('movie'))
    setValueStorage(JSON.parse(localStorage.getItem('movie')))

    if (storedList && storedList.length !== 0) {
      setStoredState(true)
      setValueStorage(storedList)
    } else {
      setValueStorage([])
      setStoredState(false)
    }
  }, [])

  const handleClick = ({ id }) => {
    navigate(`/movie/${id}`)
  }

  return (
    <div className={styles['container']}>
      <div className={styles['list']}>
        <h1 className={styles['title']}>Mi Lista</h1>
        <div className={styles['container-movies']}>
          {/* <p>Mis peliculas y listas</p> */}
          {storedState ? (
            moviesJson.map((movie) => {
              for (let index = 0; index < valueStorage.length; index++) {
                if (movie.id === valueStorage[index]) {
                  return (
                    <section key={movie.id} className={styles['movies']} onClick={() => handleClick(movie)}>
                      <div className={styles['slice']}>
                        <img className={styles['image']} src={movie.wallpaper} alt={movie.name} />
                      </div>
                      <span>{movie.name}</span>
                      <span>
                        {movie.year} - {movie.type}
                      </span>
                    </section>
                  )
                }
              }
            })
          ) : (
            <section className={styles['mylist']}>
              <p>Mi Lista</p>
              <span>Mi lista esta vacia. El contenido que agregues aparecera aqui</span>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyList
