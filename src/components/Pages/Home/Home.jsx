import ImageGallery from 'react-image-gallery'
import { useNavigate } from 'react-router-dom'

import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './Home.module.css'

import moviesJson from '../../../assets/movies/movies.json'

/* const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    id: 'prueba'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    id: 'prueba2'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    id: 'prueba3'
  }
] */

const Home = () => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/movie/${id}`)
  }

  const renderItemCustomHandler = (data) => {
    const Imagen = window.innerWidth < 768 ? data.mobile : data.slice
    return (
      <div onClick={() => handleClick(data.id)}>
        <p>{data.name}</p>
        <img key={data.id} src={Imagen} className={styles['image-gallery-custom-action']} alt={data.id}></img>
      </div>
    )
  }

  return (
    <>
      <div className={styles['app']}>
        <div className={styles['container']}>
          <ImageGallery
            showFullscreenButton={false}
            showBullets={true}
            items={moviesJson}
            autoPlay={false}
            showPlayButton={false}
            showThumbnails={false}
            lazyLoad={true}
            renderItem={(data) => renderItemCustomHandler(data)}
          />
        </div>
      </div>
    </>
  )
}

export default Home
