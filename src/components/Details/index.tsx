import React, { useEffect } from 'react'

import { Iframe } from '../Iframe'

import { Genres } from '../../entities/Genre/types'
import { DetailsProps } from './types'

import { Wrapper, Section, Image, Resume } from './styles'

export function Details(props: DetailsProps) {
  const { movie, trailer } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <Section>
        <Image>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          {movie.homepage && (
            <a href={movie.homepage} target="__blank">
              Página Oficial
            </a>
          )}
          <Iframe trailer={trailer} />
        </Image>

        <Resume>
          <h1>{movie.title}</h1>
          <h5>{movie.original_title}</h5>

          {movie.genres.map((item: Genres) => (
            <span key={item.id}>{item.name}</span>
          ))}

          <p>{movie.overview}</p>
        </Resume>
      </Section>
    </Wrapper>
  )
}
