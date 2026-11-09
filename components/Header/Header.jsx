import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__brand" to="/" aria-label="Hacker News ES, inicio">
          <span className="header__mark" aria-hidden="true">Y</span>
          <span className="header__name">Hacker News <span>ES</span></span>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
