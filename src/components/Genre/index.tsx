import React from 'react'

import { Genres } from '../../entities/Genre/types'
import { GenreProps } from './types'

import { Wrapper } from './styles'

export function Genre(props: GenreProps) {
  const { genres, history } = props

  const handleSelectGenre = (id: number) => {
    history.replace({
      pathname: `/dashboard/genre/${id}`,
    })
  }

  return (
    <Wrapper>
      <h4>Gêneros</h4>
      <ul>
        {genres.map((genre: Genres) => (
          <li key={genre.id}>
            <button type="button" onClick={() => handleSelectGenre(genre.id)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
