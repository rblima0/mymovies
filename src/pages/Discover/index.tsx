import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from 'components/Preview'
import { Pagination } from 'components/shared/Pagination'
import { Loader } from 'components/shared/Loader'
import { Card } from 'components/shared/Card'
import { Error } from 'components/shared/Error'

import { DiscoverProps } from './types'
import { Section } from './styles'
import { DiscoverResult } from 'entities/Discover/types'

export function Discover({
  loadDiscoverRequest,
  discover,
  genre,
  history,
  match: {
    params: { genreId, castId, nowPlaying, upcoming, bestRating, topRated, page },
  },
}: DiscoverProps): ReactElement {
  const pathConfig = {
    default: '/movies/page',
    genre: `/movies/genre/${genreId}/page`,
    cast: `/movies/cast/${castId}/page`,
    nowPlaying: '/movies/now-playing-movies/true/page',
    upcoming: '/movies/upcoming-movies/true/page',
    bestRating: '/movies/best-rating-movies/true/page',
    topRated: '/movies/top-rated-movies/true/page',
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
    return discover.loading || R.isEmpty(discover.data)
  }, [discover])

  useEffect(() => {
    loadDiscoverRequest(genreId, castId, nowPlaying, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadDiscoverRequest,
    genreId,
    castId,
    nowPlaying,
    upcoming,
    bestRating,
    topRated,
    page,
  ])

  if (discover.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Section>
        {discover.data.results.map((preview: DiscoverResult) => (
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
        totalPages={discover.data.total_pages}
        page={discover.data.page}
      />
    </>
  )
}
