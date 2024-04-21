import { sleep } from "../../../renderer/utils"

function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie
    return { title, release_date, id }
  })
}

export const data = async () => {
  await sleep(700)

  const response = await fetch('https://brillout.github.io/star-wars/api/films.json')
  const moviesData = await response.json()

  const movies = minimize(moviesData)

  return {
    movies,
    title: `${movies.length} Star Wars Movies`
  }
}
