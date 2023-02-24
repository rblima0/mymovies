import React, { ReactElement } from 'react'

import { Genres } from 'entities/Genre/types'

import { GenreProps } from './types'
import { Wrapper, Button } from './styles'

export function Genre({
  genres,
  history,
  handleCloseSidebar,
}: GenreProps): ReactElement {
  const handleSelectGenre = (id: number, name?: string): void => {
    handleCloseSidebar()

    history.push({
      pathname: `/dashboard/genre/${id}`,
      state: name,
    })
  }

  const handleSelectCategory = (): void => {
    handleCloseSidebar()

    history.push({
      pathname: `/dashboard/upcoming/page/1`,
      state: 'Upcoming',
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
        <li key="breve">
          <Button
            selected={history.location.state === 'Upcoming'}
            onClick={(): void => handleSelectCategory()}
            type="button"
          >
            Em Breve
          </Button>
        </li>
      </ul>
    </Wrapper>
  )
}
