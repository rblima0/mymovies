import React, { ReactElement } from 'react'

import notFound from 'assets/images/not-found.jpg'

import { DetailsProps } from './types'
import { Container } from './styles'

export function Details({ tvShow }: DetailsProps): ReactElement {
  return (
    <Container>
      <img
        alt={tvShow.name}
        src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`}
        onError={(e: any): void => {
          e.target.onerror = null
          e.target.src = notFound
        }}
      />

      {tvShow.homepage && (
        <a href={tvShow.homepage} target="__blank">
          Página Oficial
        </a>
      )}
    </Container>
  )
}
