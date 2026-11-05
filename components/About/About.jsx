import './About.css'

function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__intro">
        <p className="about__eyebrow">Sobre el proyecto</p>
        <h2 className="about__title" id="about-title">
          Curiosidad, comunidad y tecnología.
        </h2>
      </div>
      <p className="about__description">
        Hacker News ES es una interfaz en español para descubrir las historias
        más votadas de Hacker News. Consulta la fuente original, revisa la
        conversación y guarda lecturas para más tarde.
      </p>
    </section>
  )
}

export default About
