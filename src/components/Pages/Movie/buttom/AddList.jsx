import { useEffect, useState } from 'react'
import styles from './AddList.module.css'

const AddList = ({ id }) => {
  const [ListaA, setListaA] = useState([])

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('movie'))

    if (storedList && storedList.length !== 0) {
      setListaA(storedList)
    }
  }, [])

  const AddListHandler = () => {
    if (!ListaA.includes(id)) {
      const newList = [...ListaA, id]
      setListaA(newList)
      localStorage.setItem('movie', JSON.stringify(newList))
    } else {
      const ListaB = ListaA.filter((movie) => movie !== id)
      if (ListaB.length !== 0) {
        setListaA(ListaB)
        localStorage.setItem('movie', JSON.stringify(ListaB))
      } else {
        setListaA([])
        localStorage.removeItem('movie')
      }
    }
  }

  return (
    <button className={styles['botom2']} onClick={AddListHandler}>
      {ListaA.includes(id) ? (
        <svg
          fill='currentColor'
          aria-hidden='true'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          data-testid='icon-check'
          className={styles['svg-addlist']}
          width='20'
          height='16'
          viewBox='0 0 31 27'>
          <path d='M4.27179 14.7323C3.29548 13.7559 1.71257 13.7559 0.736261 14.7323C-0.240049 15.7086 -0.240049 17.2915 0.736261 18.2678L8.23625 25.7678C9.25884 26.7904 10.9332 26.7346 11.8855 25.6463L29.3854 5.64629C30.2946 4.6072 30.1894 3.0278 29.1503 2.11859C28.1112 1.20939 26.5318 1.31468 25.6226 2.35377L9.88224 20.3427L4.27179 14.7323Z'></path>
        </svg>
      ) : (
        <svg
          fill='currentColor'
          aria-hidden='true'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          data-testid='icon-plus'
          className={styles['svg-addlist']}
          width='14'
          height='14'
          viewBox='0 0 26 26'>
          <path d='M22.8494 10.0994H15.9006V3.15057C15.9006 1.54844 14.6016 0.25 13 0.25C11.3984 0.25 10.0994 1.54901 10.0994 3.15057V10.0994H3.15057C1.54844 10.0994 0.25 11.3984 0.25 13C0.25 14.6016 1.54901 15.9006 3.15057 15.9006H10.0994V22.8494C10.0994 24.4516 11.3984 25.75 13 25.75C14.6016 25.75 15.9006 24.451 15.9006 22.8494V15.9006H22.8494C24.4521 15.9006 25.75 14.6016 25.75 13C25.75 11.3984 24.4521 10.0994 22.8494 10.0994Z'></path>
        </svg>
      )}
    </button>
  )
}

export default AddList
