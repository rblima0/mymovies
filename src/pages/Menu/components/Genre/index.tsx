import React, { ReactElement } from 'react'

import { Genres } from '../../../../entities/Genre/types'

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
    </Wrapper>
  )
}
