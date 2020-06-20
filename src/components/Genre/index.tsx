import React from 'react'

import { Genres } from '../../store/modules/genre/types'
import { GenreProps } from './types'
import { Wrapper } from './styles'

export function Genre(props: GenreProps) {
  const { genres } = props

  return (
    <Wrapper>
      <h4>Gêneros</h4>
      <ul>
        {genres.map((genre: Genres) => (
          <li key={genre.id}>
            <a href={`/genre/${genre.id}`}>{genre.name}</a>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
