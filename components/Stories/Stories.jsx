import { useEffect, useMemo, useState } from 'react'
import { getTopStories } from '../../utils/hackerNewsApi'
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './Stories.css'

function Stories({ savedStories, onSaveStory, onRemoveStory }) {
  const [stories, setStories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getTopStories(controller.signal)
      .then(setStories)
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorMessage(
            'No fue posible cargar las noticias. Comprueba tu conexión e inténtalo de nuevo.',
          )
          console.error('Error al cargar las historias de Hacker News.', error)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

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
      <SearchForm onSearch={setSearchTerm} />
      {errorMessage && (
        <p className="stories__error" role="alert">{errorMessage}</p>
      )}
      {isLoading ? (
        <Preloader />
      ) : (
        <NewsCardList
          emptyMessage={searchTerm
            ? 'No encontramos historias que coincidan con tu búsqueda.'
            : 'No hay historias disponibles por el momento.'}
          onRemoveStory={onRemoveStory}
          onSaveStory={onSaveStory}
          savedStoryIds={savedStories.map((story) => story.id)}
          stories={filteredStories}
        />
      )}
    </main>
  )
}

export default Stories
