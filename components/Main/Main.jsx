import { Link } from 'react-router-dom'
import About from '../About/About'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <p className="main__eyebrow">Ideas que mueven la tecnología</p>
        <h1 className="main__title">
          Las historias de tecnología,
          <br />
          <span>en un solo lugar.</span>
        </h1>
        <p className="main__description">
          Explora las conversaciones y enlaces que la comunidad de Hacker News
          está leyendo ahora mismo.
        </p>
        <Link className="main__action" to="/stories">
          Explorar noticias <span aria-hidden="true">→</span>
        </Link>
        <p className="main__source">
          Datos en vivo de la comunidad global de Hacker News
        </p>
      </section>
      <About />
    </main>
  )
}

export default Main
