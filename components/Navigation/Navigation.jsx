import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegación principal">
      <NavLink
        className={({ isActive }) =>
          `navigation__link${isActive ? ' navigation__link--active' : ''}`
        }
        end
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `navigation__link${isActive ? ' navigation__link--active' : ''}`
        }
        to="/stories"
      >
        Noticias
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `navigation__link${isActive ? ' navigation__link--active' : ''}`
        }
        to="/saved"
      >
        Guardadas
      </NavLink>
    </nav>
  )
}

export default Navigation
