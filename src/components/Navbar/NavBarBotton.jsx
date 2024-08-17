import { NavLink } from 'react-router-dom'
import './NavBarBotton.css'

const NavBarBotton = ({ title, direction, icon }) => {
  return (
    <>
      <NavLink to={direction}>
        <div className='container-navbotton'>
          <p className='navbar-icon'>{icon}</p>
          <p className='navbar-text'>{title}</p>
        </div>
      </NavLink>
    </>
  )
}

export default NavBarBotton
