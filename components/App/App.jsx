import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  SAVED_STORIES_KEY,
  STORIES_LOAD_ERROR_MESSAGE,
} from '../../utils/constants'
import { getTopStories } from '../../utils/hackerNewsApi'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import SavedNews from '../SavedNews/SavedNews'
import Stories from '../Stories/Stories'
import './App.css'

function readSavedStories() {
  try {
    const storedStories = window.localStorage.getItem(SAVED_STORIES_KEY)
    if (!storedStories) {
      return []
    }

    const parsedStories = JSON.parse(storedStories)
    if (!Array.isArray(parsedStories)) {
      throw new Error('El formato de las historias guardadas no es válido.')
    }

    return parsedStories.filter((story) => (
      story
      && Number.isInteger(story.id)
      && typeof story.title === 'string'
      && typeof story.by === 'string'
      && Number.isFinite(story.time)
      && Number.isFinite(story.score)
    ))
  } catch (error) {
    console.error('No se pudieron leer las historias guardadas.', error)
    return []
  }
}

function App() {
  const [savedStories, setSavedStories] = useState(readSavedStories)
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    getTopStories(controller.signal)
      .then(setStories)
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setErrorMessage(STORIES_LOAD_ERROR_MESSAGE)
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

  useEffect(() => {
    try {
      window.localStorage.setItem(
        SAVED_STORIES_KEY,
        JSON.stringify(savedStories),
      )
    } catch (error) {
      console.error('No se pudieron guardar las historias en este navegador.', error)
    }
  }, [savedStories])

  function handleSaveStory(story) {
    setSavedStories((currentStories) => {
      if (currentStories.some((savedStory) => savedStory.id === story.id)) {
        return currentStories
      }

      return [...currentStories, story]
    })
  }

  function handleRemoveStory(storyId) {
    setSavedStories((currentStories) =>
      currentStories.filter((story) => story.id !== storyId),
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/stories"
            element={
              <Stories
                errorMessage={errorMessage}
                isLoading={isLoading}
                savedStories={savedStories}
                stories={stories}
                onSaveStory={handleSaveStory}
                onRemoveStory={handleRemoveStory}
              />
            }
          />
          <Route
            path="/saved"
            element={
              <SavedNews
                savedStories={savedStories}
                onRemoveStory={handleRemoveStory}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
