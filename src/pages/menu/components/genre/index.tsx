import React, { ReactElement } from 'react'

import { Genre as GenreType } from 'entities/genre/types'
import { Category } from 'pages/menu/types'

import { GenreProps } from './types'
import { Wrapper, Button } from './styles'

export function Genre({
  genreMovie,
  genreTVShow,
  handleCloseSidebar,
  history,
  movieCategories,
  tvShowCategories,
}: GenreProps): ReactElement {
  const handleSelectGenre = (path: string, name?: string) => {
    handleCloseSidebar()

    history.push({
      pathname: path,
      state: name,
    })
  }

  const handleSelectGenreMovie = (id: number, name?: string): void => {
    handleSelectGenre(`/movies/genre/${id}`, `${name}_movie`)
  }

  const handleSelectGenreTVShow = (id: number, name?: string): void => {
    handleSelectGenre(`/tv-shows/genre/${id}`, `${name}_tv-show`)
  }

  const handleSelectCategory = (name: string, mediaType: string): void => {
    handleCloseSidebar()
  
    const path = name === "popular-movies" || name === "popular-tv-shows" ? `/${mediaType}` : `/${mediaType}/${name}/true`
  
    history.push({
      pathname: path,
      state: name,
    })
  }

  const handleSelectCategoryMovie = (name: string): void => {
    handleSelectCategory(name, "movies")
  }
  
  const handleSelectCategoryTVShow = (name: string): void => {
    handleSelectCategory(name, "tv-shows")
  }

  return (
    <Wrapper>
      <h4>Gêneros de Filmes</h4>
      <ul>
        {genreMovie.map((genre: GenreType) => (
          <li key={genre.id}>
            <Button
              selected={`${genre.name}_movie` === history.location.state}
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
                  onClick={(): void => handleSelectCategoryMovie(category.name)}
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
        {genreTVShow.map((genre: GenreType) => (
          <li key={genre.id}>
            <Button
              selected={`${genre.name}_tv-show` === history.location.state}
              onClick={(): void => handleSelectGenreTVShow(genre.id, genre.name)}
              type="button"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>

      {tvShowCategories && (
        <>
          <h4>Categorias de Séries</h4>
          <ul>
            {tvShowCategories.map((category: Category) => (
              <li key={category.name}>
                <Button
                  selected={history.location.state === category.name}
                  onClick={(): void => handleSelectCategoryTVShow(category.name)}
                  type="button"
                >
                  {category.title}
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Wrapper>
  )
}
