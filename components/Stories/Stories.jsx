import { useMemo, useState } from 'react'
import {
  NO_STORIES_MESSAGE,
  SEARCH_NO_RESULTS_MESSAGE,
  STORIES_PER_PAGE,
} from '../../utils/constants'
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './Stories.css'

function Stories({
  errorMessage,
  isLoading,
  savedStories,
  stories,
  onSaveStory,
  onRemoveStory,
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(STORIES_PER_PAGE)

  function handleSearch(term) {
    setSearchTerm(term)
    setVisibleCount(STORIES_PER_PAGE)
  }

  const filteredStories = useMemo(() => {
    const normalizedSearch = searchTerm.toLocaleLowerCase('es')
    if (!normalizedSearch) {
      return stories
    }

    return stories.filter((story) =>
      `${story.title} ${story.by}`.toLocaleLowerCase('es').includes(normalizedSearch),
    )
  }, [searchTerm, stories])

  return (
    <main className="stories">
      <section className="stories__intro">
        <p className="stories__eyebrow">Lo más leído</p>
        <h1 className="stories__title">Historias de Hacker News</h1>
        <p className="stories__description">
          Las noticias más votadas, actualizadas desde la API oficial.
        </p>
      </section>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : errorMessage ? (
        <p className="stories__error" role="alert">{errorMessage}</p>
      ) : (
        <>
          <NewsCardList
            emptyMessage={searchTerm
              ? SEARCH_NO_RESULTS_MESSAGE
              : NO_STORIES_MESSAGE}
            onRemoveStory={onRemoveStory}
            onSaveStory={onSaveStory}
            savedStoryIds={savedStories.map((story) => story.id)}
            stories={filteredStories.slice(0, visibleCount)}
          />
          {visibleCount < filteredStories.length && (
            <button
              className="stories__more"
              onClick={() => setVisibleCount((count) => count + STORIES_PER_PAGE)}
              type="button"
            >
              Mostrar más
            </button>
          )}
        </>
      )}
    </main>
  )
}

export default Stories
