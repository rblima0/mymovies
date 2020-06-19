import React from 'react'

import { CardProps } from './types'
import { Wrapper, ContentImage, ContentInfo } from './styles'

export function Card(props: CardProps) {
  const { movie } = props

  const limitOverview = (overview: string) => {
    const maxLength = 280
    const endText = '...'

    if (overview.length > maxLength) {
      return overview.substring(0, maxLength - endText.length) + endText
    }

    return overview
  }

  return (
    <Wrapper>
      <ContentImage>
        <a href="/#">
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
          />
        </a>
      </ContentImage>
      <ContentInfo>
        <a href="/#">
          <h3>{movie.title}</h3>
        </a>
        {movie.genre_ids.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <p>{limitOverview(movie.overview)}</p>
      </ContentInfo>
    </Wrapper>
  )
}
