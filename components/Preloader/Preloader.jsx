import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Cargando noticias">
      <span className="preloader__circle" aria-hidden="true" />
      <span className="preloader__text">Cargando noticias…</span>
    </div>
  )
}

export default Preloader
