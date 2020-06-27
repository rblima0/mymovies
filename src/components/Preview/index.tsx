import React from 'react'

import imageNotFound from '../../assets/notfound.jpg'

import { Genres } from '../../store/modules/genre/types'
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
    })
  }

  return (
    <>
      <ContentImage>
        <button type="button" onClick={handleOpenMovie}>
          <img
            src={
              preview.poster_path
                ? `https://image.tmdb.org/t/p/w185${preview.poster_path}`
                : imageNotFound
            }
            alt={preview.title}
          />
        </button>
      </ContentImage>
      <ContentInfo>
        <button type="button" onClick={handleOpenMovie}>
          <h3>{preview.title}</h3>
        </button>
        {preview.genre_ids.map((item) => (
          <span key={item}>
            {genres.find(({ id }: Genres) => id === item).name}
          </span>
        ))}
        <p>{limitOverview(preview.overview)}</p>
      </ContentInfo>
    </>
  )
}
