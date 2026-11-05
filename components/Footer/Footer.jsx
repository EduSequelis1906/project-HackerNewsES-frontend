import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Hacker News ES · Datos de Hacker News</p>
      <a
        className="footer__link"
        href="https://github.com/HackerNews/API"
        rel="noreferrer"
        target="_blank"
      >
        Documentación de la API
      </a>
    </footer>
  )
}

export default Footer
