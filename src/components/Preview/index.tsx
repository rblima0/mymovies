import React from 'react'
import { format } from 'date-fns'

import { GiRoundStar } from 'react-icons/gi'
import imageNotFound from '../../assets/notfound.jpg'

import { Genres } from '../../store/modules/genre/types'
import { PreviewProps } from './types'
import { ContentImage, ContentInfo, Rating } from './styles'
import { colors } from '../../styles/theme'

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
        <h5>{format(new Date(preview.release_date), 'dd/MM/yyyy')}</h5>

        <button type="button" onClick={handleOpenMovie}>
          <h3>{preview.title}</h3>
        </button>

        <Rating>
          <GiRoundStar size={10} color={colors.primary} />
          <GiRoundStar size={10} color={colors.primary} />
          <GiRoundStar size={10} color={colors.primary} />
          <GiRoundStar size={10} color={colors.primary300} />
          <GiRoundStar size={10} color={colors.primary300} />
          <h6>{preview.vote_average}</h6>
          <p>({preview.vote_count} votos)</p>
        </Rating>

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
