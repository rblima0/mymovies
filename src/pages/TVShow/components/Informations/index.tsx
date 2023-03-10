import React, { ReactElement } from 'react'
import * as R from 'ramda'

import { formatDate } from 'utils/helpers/date'
import { Genre } from 'entities/Genre/types'
import { Rating } from 'components/Rating'

import { InformationsProps } from './types'
import { Genre as GenreComponent, Container, More, Overview, Resume, Tagline } from './styles'

export function Informations({ tvShow }: InformationsProps): ReactElement {
  return (
    <Container>
      <Resume>
        <h1>{tvShow.name}</h1>
        <h5>{tvShow.original_name}</h5>

        {tvShow.genres.map((item: Genre) => (
          <GenreComponent key={item.id}>{item.name}</GenreComponent>
        ))}

        <Rating voteAverage={tvShow.vote_average} voteCount={tvShow.vote_count} />

        <Overview>
          {tvShow.overview ? tvShow.overview : 'Sinopse indisponível'}
        </Overview>

        {tvShow.tagline && <Tagline>{tvShow.tagline}</Tagline>}
      </Resume>

      <More>
        <span>{formatDate(tvShow.first_air_date)}</span>
        <span>{tvShow.number_of_episodes + ' episodios'}</span>
        <span>{tvShow.number_of_seasons + ' temporada'}</span>
        {!R.isEmpty(tvShow.spoken_languages) && (
          <span>{tvShow.spoken_languages[0].name}</span>
        )}
        <span>{tvShow.popularity}</span>
      </More>
    </Container>
  )
}
