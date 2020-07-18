import React from 'react'

import notFound from '../../assets/not-found.jpg'
import { Rating } from '../Rating'
import { formatDate } from '../../helpers/date'

import { Genres } from '../../entities/Genre/types'
import { PreviewProps } from './types'

import { ContentImage, ContentInfo } from './styles'

export function Preview(props: PreviewProps) {
  const { preview, genres, history } = props

  const limitOverview = (overview: string) => {
    const maxLength = 280
    const endText = '...'

    if (overview.length > maxLength) {
      return overview.substring(0, maxLength - endText.length) + endText
    }

    return overview
  }

  const handleOpenMovie = () => {
    history.replace({
      pathname: `/dashboard/movie/${preview.id}`,
      state: preview.title,
    })
  }

  return (
    <>
      <ContentImage>
        <button type="button" onClick={handleOpenMovie}>
          <img
            alt={preview.title}
            src={
              preview.poster_path
                ? `https://image.tmdb.org/t/p/w185${preview.poster_path}`
                : notFound
            }
            onError={(e: any) => {
              e.target.onerror = null
              e.target.src = notFound
            }}
          />
        </button>
      </ContentImage>
      <ContentInfo>
        <h5>{formatDate(preview.release_date)}</h5>

        <button type="button" onClick={handleOpenMovie}>
          <h3>{preview.title}</h3>
        </button>

        <Rating
          voteAverage={preview.vote_average}
          voteCount={preview.vote_count}
        />

        {preview.genre_ids.map((item: number) => (
          <span key={item}>
            {genres.find(({ id }: Genres) => id === item).name}
          </span>
        ))}

        <p>{limitOverview(preview.overview)}</p>
      </ContentInfo>
    </>
  )
}
