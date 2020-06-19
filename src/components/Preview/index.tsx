import React from 'react'

import { PreviewProps } from './types'
import { ContentImage, ContentInfo } from './styles'

export function Preview(props: PreviewProps) {
  const { preview } = props

  const limitOverview = (overview: string) => {
    const maxLength = 280
    const endText = '...'

    if (overview.length > maxLength) {
      return overview.substring(0, maxLength - endText.length) + endText
    }

    return overview
  }

  return (
    <>
      <ContentImage>
        <a href="/#">
          <img
            src={`https://image.tmdb.org/t/p/w185/${preview.poster_path}`}
            alt={preview.title}
          />
        </a>
      </ContentImage>
      <ContentInfo>
        <a href="/#">
          <h3>{preview.title}</h3>
        </a>
        {preview.genre_ids.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <p>{limitOverview(preview.overview)}</p>
      </ContentInfo>
    </>
  )
}
