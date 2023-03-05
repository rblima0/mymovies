import React, { ReactElement } from 'react'
import * as R from 'ramda'

import notFound from 'assets/images/not-found.jpg'
import { Rating } from 'components/Rating'
import { formatDate } from 'utils/helpers/date'
import { Genre } from 'entities/Genre/types'

import { PreviewProps } from './types'
import { ContentImage, ContentInfo } from './styles'

export function Preview({
  preview,
  genres,
  history,
}: PreviewProps): ReactElement {
  const limitOverview = (overview: string): string => {
    const maxLength = 280
    const endText = '...'

    if (overview.length > maxLength) {
      return overview.substring(0, maxLength - endText.length) + endText
    }

    return overview
  }

  const showTitle = (): string => {
    if (preview.title) {
      return preview.title
    }

    if (preview.name) {
      return preview.name
    }

    return '-'
  }

  const showReleaseDate = (): string => {
    if (preview.release_date) {
      return formatDate(preview.release_date)
    }

    if (preview.first_air_date) {
      return formatDate(preview.first_air_date)
    }

    return 'Data indefinida'
  }

  const handleOpenMovie = (): void => {
    history.push({
      pathname: `/movies/movie/${preview.id}`,
      state: showTitle(),
    })
  }

  const renderGenres = (): ReactElement | null => {
    if (R.isEmpty(genres)) {
      return null
    }

    return (
      <>
        {preview.genre_ids.map((item: number) => (
          <span key={item}>
            {genres.find(({ id }: Genre) => id === item).name}
          </span>
        ))}
      </>
    )
  }

  return (
    <>
      <ContentImage>
        <button type="button" onClick={handleOpenMovie}>
          <img
            alt={showTitle()}
            src={
              preview.poster_path
                ? `https://image.tmdb.org/t/p/w185${preview.poster_path}`
                : notFound
            }
            onError={(e: any): void => {
              e.target.onerror = null
              e.target.src = notFound
            }}
          />
        </button>
      </ContentImage>

      <ContentInfo>
        <h5>{showReleaseDate()}</h5>

        <button type="button" onClick={handleOpenMovie}>
          <h3>{showTitle()}</h3>
        </button>

        <Rating
          voteAverage={preview.vote_average}
          voteCount={preview.vote_count}
        />

        {renderGenres()}

        <p>{limitOverview(preview.overview)}</p>
      </ContentInfo>
    </>
  )
}
