import NewsCardList from '../NewsCardList/NewsCardList'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import './SavedNews.css'

function SavedNews({ savedStories, onRemoveStory }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedStories={savedStories} />
      <NewsCardList
        emptyMessage="Todavía no has guardado historias. Explora las noticias para crear tu lista."
        onRemoveStory={onRemoveStory}
        savedStoryIds={savedStories.map((story) => story.id)}
        stories={savedStories}
      />
    </main>
  )
}

export default SavedNews
