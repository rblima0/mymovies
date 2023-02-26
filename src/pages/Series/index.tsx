import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { SeriesResult } from 'entities/Series/types'
import { Preview } from 'components/Preview'
import { Pagination } from 'components/shared/Pagination'
import { Loader } from 'components/shared/Loader'
import { Card } from 'components/shared/Card'
import { Error } from 'components/shared/Error'

import { SeriesProps } from './types'
import { Section } from './styles'

export function Series({
  loadSeriesRequest,
  series,
  genre,
  history,
  match: {
    params: { genreId, castId, nowPlaying, upcoming, bestRating, topRated, page },
  },
}: SeriesProps): ReactElement {
  const pathConfig = {
    default: '/series/page',
    genre: `/series/genre/${genreId}/page`,
    cast: `/series/cast/${castId}/page`,
    nowPlaying: '/series/now-playing/true/page',
    upcoming: '/series/upcoming/true/page',
    bestRating: '/series/best-rating/true/page',
    topRated: '/series/top-rated/true/page',
  }

  const paginatePathname = (pageNumber: number): string => {
    const path = genreId ? pathConfig.genre : 
                 castId ? pathConfig.cast : 
                 nowPlaying ? pathConfig.nowPlaying :
                 upcoming ? pathConfig.upcoming :
                 bestRating ? pathConfig.bestRating :
                 topRated ? pathConfig.topRated :
                 pathConfig.default

    return `${path}/${pageNumber}`
  }

  const handlePaginate = (pageNumber: number): void => {
    const title = history.location.state

    history.push({
      pathname: paginatePathname(pageNumber),
      state: title,
    })
  }

  const isLoading = useMemo(() => {
    return series.loading || R.isEmpty(series.data)
  }, [series])

  useEffect(() => {
    loadSeriesRequest(genreId, castId, nowPlaying, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadSeriesRequest,
    genreId,
    castId,
    nowPlaying,
    upcoming,
    bestRating,
    topRated,
    page,
  ])

  if (series.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Section>
        {series.data.results.map((preview: SeriesResult) => (
          <Card key={preview.id} backdrop={preview.backdrop_path}>
            <Preview
              preview={preview}
              genres={genre.data.genres}
              history={history}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        handlePaginate={handlePaginate}
        totalPages={series.data.total_pages}
        page={series.data.page}
      />
    </>
  )
}
