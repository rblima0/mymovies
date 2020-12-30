import React, { useEffect } from 'react'
import * as R from 'ramda'

import notFound from '../../assets/images/not-found.jpg'

import { MdArrowBack } from 'react-icons/md'
import { Iframe } from '../Iframe'
import { formatDate } from '../../helpers/date'
import { Rating } from '../Rating'

import { Genres } from '../../entities/Genre/types'
import { DetailsProps } from './types'

import { colors } from '../../styles/theme'
import {
  Wrapper,
  Section,
  Image,
  Information,
  Resume,
  More,
  Genre,
  Overview,
  ButtonBack,
  Credits,
  CreditsContainer,
  CreditsWrapper,
} from './styles'

export function Details(props: DetailsProps) {
  const { movie, trailer } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <ButtonBack type="button" onClick={() => {}}>
        <MdArrowBack size={24} color={colors.gray200} />
      </ButtonBack>

      <Section>
        <Image>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            onError={(e: any) => {
              e.target.onerror = null
              e.target.src = notFound
            }}
          />

          {movie.homepage && (
            <a href={movie.homepage} target="__blank">
              Página Oficial
            </a>
          )}

          <Iframe trailer={trailer} />
        </Image>

        <Information>
          <Resume>
            <h1>{movie.title}</h1>
            <h5>{movie.original_title}</h5>

            {movie.genres.map((item: Genres) => (
              <Genre key={item.id}>{item.name}</Genre>
            ))}

            <Rating
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            />

            <Overview>{movie.overview}</Overview>

            <h4>{movie.tagline}</h4>
          </Resume>

          <More>
            <span>{formatDate(movie.release_date)}</span>
            <span>{movie.runtime + ' min'}</span>
            <span>{movie.spoken_languages[0].name}</span>
            <span>{movie.popularity}</span>
          </More>
        </Information>
      </Section>

      <Credits>
        {R.slice(0, 6, movie.credits.cast).map((item) => (
          <CreditsContainer key={item.cast_id}>
            <img
              alt={item.character}
              src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
              onError={(e: any) => {
                e.target.onerror = null
                e.target.src = notFound
              }}
            />
            <CreditsWrapper>
              <p>{item.character}</p>
              <p>{item.name}</p>
            </CreditsWrapper>
          </CreditsContainer>
        ))}
      </Credits>
    </Wrapper>
  )
}
