import './NewsCard.css'

function NewsCard({ story, rank, isSaved, onSaveStory, onRemoveStory }) {
  const discussionUrl = `https://news.ycombinator.com/item?id=${story.id}`
  const storyUrl = story.url || discussionUrl
  const storyDate = new Intl.DateTimeFormat('es', {
    dateStyle: 'medium',
  }).format(new Date(story.time * 1000))

  function handleSaveClick() {
    if (isSaved) {
      onRemoveStory(story.id)
      return
    }
    onSaveStory(story)
  }

  return (
    <article className="news-card">
      <span className="news-card__rank" aria-label={`Puesto ${rank}`}>
        {String(rank).padStart(2, '0')}
      </span>
      <div className="news-card__content">
        <h2 className="news-card__title">
          <a href={storyUrl} rel="noreferrer" target="_blank">
            {story.title}
          </a>
        </h2>
        <p className="news-card__meta">
          <span>{story.score} puntos</span>
          <span aria-hidden="true">·</span>
          <span>por {story.by}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={new Date(story.time * 1000).toISOString()}>
            {storyDate}
          </time>
        </p>
        <a
          className="news-card__discussion"
          href={discussionUrl}
          rel="noreferrer"
          target="_blank"
        >
          {story.descendants ?? 0} comentarios en Hacker News
        </a>
      </div>
      <button
        aria-label={isSaved ? `Quitar ${story.title} de guardadas` : `Guardar ${story.title}`}
        aria-pressed={isSaved}
        className={`news-card__save${isSaved ? ' news-card__save--active' : ''}`}
        onClick={handleSaveClick}
        type="button"
      >
        {isSaved ? 'Guardada' : 'Guardar'}
      </button>
    </article>
  )
}

export default NewsCard
