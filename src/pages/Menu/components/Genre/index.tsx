import React, { ReactElement } from 'react'

import { Genres } from 'entities/Genre/types'
import { Category } from 'pages/Menu/types'

import { GenreProps } from './types'
import { Wrapper, Button } from './styles'

export function Genre({
  genres,
  genresSeries,
  movieCategories,
  history,
  handleCloseSidebar,
}: GenreProps): ReactElement {
  const handleSelectGenre = (path: string, name?: string) => {
    handleCloseSidebar()

    history.push({
      pathname: path,
      state: name,
    })
  }

  const handleSelectGenreMovie = (id: number, name?: string): void => {
    handleSelectGenre(`/movies/genre/${id}`, name)
  }

  const handleSelectGenreSeries = (id: number, name?: string): void => {
    handleSelectGenre(`/series/genre/${id}`, name)
  }

  const handleSelectCategory = (name: string): void => {
    handleCloseSidebar()

    if (name === 'popular') {
      return history.push({
        pathname: `/movies`,
        state: name,
      })
    }

    history.push({
      pathname: `/movies/${name}/true`,
      state: name,
    })
  }

  return (
    <Wrapper>
      <h4>Gêneros de Filmes</h4>
      <ul>
        {genres.map((genre: Genres) => (
          <li key={genre.id}>
            <Button
              selected={genre.name === history.location.state}
              onClick={(): void => handleSelectGenreMovie(genre.id, genre.name)}
              type="button"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>
      
      {movieCategories && (
        <>
          <h4>Categorias de Filmes</h4>
          <ul>
            {movieCategories.map((category: Category) => (
              <li key={category.name}>
                <Button
                  selected={history.location.state === category.name}
                  onClick={(): void => handleSelectCategory(category.name)}
                  type="button"
                >
                  {category.title}
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}

      <h4>Gêneros de Series</h4>
      <ul>
        {genresSeries.map((genre: Genres) => (
          <li key={genre.id}>
            <Button
              selected={genre.name === history.location.state}
              onClick={(): void => handleSelectGenreSeries(genre.id, genre.name)}
              type="button"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
