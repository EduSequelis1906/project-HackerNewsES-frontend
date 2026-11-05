import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">No encontramos esta página</h1>
      <p className="not-found__description">
        Es posible que el enlace haya cambiado o que la dirección no exista.
      </p>
      <Link className="not-found__link" to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound
