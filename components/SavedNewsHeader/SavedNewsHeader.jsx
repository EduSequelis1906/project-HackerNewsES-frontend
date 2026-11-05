import './SavedNewsHeader.css'

function SavedNewsHeader({ savedStories }) {
  const storyCount = savedStories.length
  const authorCount = new Set(savedStories.map((story) => story.by)).size

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__eyebrow">Tu biblioteca</p>
      <h1 className="saved-news-header__title">Historias guardadas</h1>
      <p className="saved-news-header__summary">
        {storyCount} {storyCount === 1 ? 'historia guardada' : 'historias guardadas'}
        {authorCount > 0 && ` de ${authorCount} ${authorCount === 1 ? 'autor' : 'autores'}`}
      </p>
    </section>
  )
}

export default SavedNewsHeader
