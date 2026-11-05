import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a className="header__brand" href="/" aria-label="Hacker News ES, inicio">
          <span className="header__mark" aria-hidden="true">Y</span>
          <span className="header__name">Hacker News <span>ES</span></span>
        </a>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
