import { useState } from 'react'
import './SearchForm.css'

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query.trim())
  }

  function handleClear() {
    setQuery('')
    onSearch('')
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <label className="search-form__label" htmlFor="story-search">
        Buscar en las historias cargadas
      </label>
      <div className="search-form__controls">
        <input
          className="search-form__input"
          id="story-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Título o autor"
          type="search"
          value={query}
        />
        {query && (
          <button
            className="search-form__clear"
            onClick={handleClear}
            type="button"
          >
            Limpiar
          </button>
        )}
        <button className="search-form__submit" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}

export default SearchForm
