import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from 'components/preview'
import { Pagination } from 'components/shared/pagination'
import { Loader } from 'components/shared/loader'
import { Card } from 'components/shared/card'
import { Error } from 'components/shared/error'

import { DiscoverProps } from './types'
import { Section } from './styles'
import { DiscoverMovieResult } from 'entities/discover-movie/types'

export function DiscoverMovie({
  loadDiscoverMovieRequest,
  discoverMovie,
  genreMovie,
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
    return discoverMovie.loading || R.isEmpty(discoverMovie.data)
  }, [discoverMovie])

  useEffect(() => {
    loadDiscoverMovieRequest(genreId, castId, nowPlaying, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadDiscoverMovieRequest,
    genreId,
    castId,
    nowPlaying,
    upcoming,
    bestRating,
    topRated,
    page,
  ])

  if (discoverMovie.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Section>
        {discoverMovie.data.results.map((preview: DiscoverMovieResult) => (
          <Card key={preview.id} backdrop={preview.backdrop_path}>
            <Preview
              genres={genreMovie.data.genres}
              history={history}
              preview={preview}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        handlePaginate={handlePaginate}
        page={discoverMovie.data.page}
        totalPages={discoverMovie.data.total_pages}
      />
    </>
  )
}
