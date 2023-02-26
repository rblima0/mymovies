import React, { ReactElement } from 'react'

import { Genres } from 'entities/Genre/types'

import { GenreProps, Category } from './types'
import { Wrapper, Button } from './styles'

export function Genre({
  genres,
  history,
  handleCloseSidebar,
}: GenreProps): ReactElement {
  const categories: Category[] = [
    {
      title: 'Popular',
      name: 'popular',
    },
    {
      title: 'No cinema',
      name: 'now-playing',
    },
    {
      title: 'Em breve',
      name: 'upcoming',
    },
    {
      title: 'Melhor avaliados',
      name: 'best-rating',
    },
    {
      title: 'Mais votados',
      name: 'top-rated',
    },
  ]

  const handleSelectGenre = (id: number, name?: string): void => {
    handleCloseSidebar()

    history.push({
      pathname: `/movies/genre/${id}`,
      state: name,
    })
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
      <h4>Gêneros</h4>
      <ul>
        {genres.map((genre: Genres) => (
          <li key={genre.id}>
            <Button
              selected={genre.name === history.location.state}
              onClick={(): void => handleSelectGenre(genre.id, genre.name)}
              type="button"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>

      <h4>Categorias</h4>
      <ul>
        {categories.map((category: Category) => (
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
    </Wrapper>
  )
}
