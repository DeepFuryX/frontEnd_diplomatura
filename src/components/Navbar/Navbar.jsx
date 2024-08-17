import MenuUser from '../MenuUser/MenuUser'
import logo from '../../assets/disney.png'

import './NavBar.css'
import NavBarBotton from './NavBarBotton'

let menuOptions = [
  {
    title: 'Inicio',
    direction: '/',
    icon: '🏠'
  },
  {
    title: 'Busqueda',
    direction: '/search',
    icon: '🔍'
  },
  {
    title: 'Mi Lista',
    direction: '/list',
    icon: '📃'
  },
  { title: 'ESPN', direction: '/espn', icon: '➡' },
  { title: 'Peliculas', direction: '/movie', icon: '🎬' },
  {
    title: 'Series',
    direction: '/series',
    icon: '📺'
  }
  /*  { title: 'Originales', direction: '/origin', icon: '⭐' } */
]

const Navbar = () => {
  return (
    <div className='container'>
      <div className='container-menu'>
        <img src={logo} alt='DisneyLogo' />

        <div className='menu'>
          {menuOptions.map((option) => (
            <NavBarBotton key={option.title} title={option.title} direction={option.direction} icon={option.icon} />
          ))}
        </div>
      </div>
      <MenuUser />
    </div>
  )
}

export default Navbar
