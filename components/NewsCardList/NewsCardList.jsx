import NewsCard from '../NewsCard/NewsCard'
import './NewsCardList.css'

function NewsCardList({
  stories,
  savedStoryIds = [],
  onSaveStory,
  onRemoveStory,
  emptyMessage = 'No hay historias para mostrar.',
}) {
  if (stories.length === 0) {
    return <p className="news-card-list__empty">{emptyMessage}</p>
  }

  return (
    <ol className="news-card-list">
      {stories.map((story, index) => (
        <li className="news-card-list__item" key={story.id}>
          <NewsCard
            isSaved={savedStoryIds.includes(story.id)}
            onRemoveStory={onRemoveStory}
            onSaveStory={onSaveStory}
            rank={index + 1}
            story={story}
          />
        </li>
      ))}
    </ol>
  )
}

export default NewsCardList
