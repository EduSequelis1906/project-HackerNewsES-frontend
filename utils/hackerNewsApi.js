import { API_BASE_URL, STORY_LIMIT } from './constants'

async function readJson(response, resource) {
  if (!response.ok) {
    throw new Error(`La API respondió ${response.status} al solicitar ${resource}.`)
  }

  return response.json()
}

export async function getTopStories(signal) {
  const topStoriesResponse = await fetch(
    `${API_BASE_URL}/topstories.json`,
    { signal },
  )
  const storyIds = await readJson(topStoriesResponse, 'las historias principales')

  if (!Array.isArray(storyIds)) {
    throw new Error('La API no devolvió una lista válida de historias.')
  }

  const storyResponses = await Promise.all(
    storyIds.slice(0, STORY_LIMIT).map(async (storyId) => {
      const response = await fetch(
        `${API_BASE_URL}/item/${storyId}.json`,
        { signal },
      )
      return readJson(response, `la historia ${storyId}`)
    }),
  )

  return storyResponses.filter((story) => (
    story && story.type === 'story' && !story.deleted && !story.dead
  ))
}
