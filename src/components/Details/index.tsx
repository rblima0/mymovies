import React, { useEffect } from 'react'

import notFound from '../../assets/not-found.jpg'

import { MdArrowBack } from 'react-icons/md'
import { Iframe } from '../Iframe'
import { formatDate } from '../../helpers/date'

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
} from './styles'
import { Rating } from '../Rating'

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
          </Resume>

          <More>
            <span>{formatDate(movie.release_date)}</span>
            <span>{movie.runtime + ' min'}</span>
            <span>{movie.spoken_languages[0].name}</span>
            <span>{movie.popularity}</span>
          </More>
        </Information>
      </Section>
    </Wrapper>
  )
}
