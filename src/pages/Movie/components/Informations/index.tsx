import React, { ReactElement } from 'react'
import * as R from 'ramda'

import { formatDate } from 'utils/helpers/date'
import { Genres } from 'entities/Genre/types'
import { Rating } from 'components/Rating'

import { InformationsProps } from './types'
import { Genre, Container, More, Overview, Resume, Tagline } from './styles'

export function Informations({ movie }: InformationsProps): ReactElement {
  return (
    <Container>
      <Resume>
        <h1>{movie.title}</h1>
        <h5>{movie.original_title}</h5>

        {movie.genres.map((item: Genres) => (
          <Genre key={item.id}>{item.name}</Genre>
        ))}

        <Rating voteAverage={movie.vote_average} voteCount={movie.vote_count} />

        <Overview>
          {movie.overview ? movie.overview : 'Sinopse indisponível'}
        </Overview>

        {movie.tagline && <Tagline>{movie.tagline}</Tagline>}
      </Resume>

      <More>
        <span>{formatDate(movie.release_date)}</span>
        <span>{movie.runtime + ' min'}</span>
        {!R.isEmpty(movie.spoken_languages) && (
          <span>{movie.spoken_languages[0].name}</span>
        )}
        <span>{movie.popularity}</span>
      </More>
    </Container>
  )
}
