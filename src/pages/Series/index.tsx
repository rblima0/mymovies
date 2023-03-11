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
  genreSeries,
  history,
  match: {
    params: { genreId, nowPlaying, upcoming, bestRating, topRated, page },
  },
}: SeriesProps): ReactElement {
  const pathConfig = {
    default: '/tv-shows/page',
    genre: `/tv-shows/genre/${genreId}/page`,
    nowPlaying: '/tv-shows/now-playing-series/true/page',
    upcoming: '/tv-shows/upcoming-series/true/page',
    bestRating: '/tv-shows/best-rating-series/true/page',
    topRated: '/tv-shows/top-rated-series/true/page',
  }

  const paginatePathname = (pageNumber: number): string => {
    const path = genreId ? pathConfig.genre :
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
    loadSeriesRequest(genreId, nowPlaying, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadSeriesRequest,
    genreId,
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
              genres={genreSeries.data.genres}
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
