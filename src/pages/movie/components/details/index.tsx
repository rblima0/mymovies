import React, { ReactElement } from 'react'

import notFound from 'assets/images/not-found.jpg'

import { Trailer } from '../trailer'

import { DetailsProps } from './types'
import { Container } from './styles'

export function Details({ movie, trailer }: DetailsProps): ReactElement {
  return (
    <Container>
      <img
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        onError={(e: any): void => {
          e.target.onerror = null
          e.target.src = notFound
        }}
      />

      {movie.homepage && (
        <a href={movie.homepage} target="__blank">
          Página Oficial
        </a>
      )}

      <Trailer trailer={trailer} />
    </Container>
  )
}
