import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { DiscoverTVShowResult } from 'entities/discover-tv-show/types'
import { Preview } from 'components/preview'
import { Pagination } from 'components/shared/pagination'
import { Loader } from 'components/shared/loader'
import { Card } from 'components/shared/card'
import { Error } from 'components/shared/error'

import { SeriesProps } from './types'
import { Section } from './styles'

export function DiscoverTVShow({
  loadDiscoverTVShowRequest,
  discoverTVShow,
  genreTVShow,
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
    return discoverTVShow.loading || R.isEmpty(discoverTVShow.data)
  }, [discoverTVShow])

  useEffect(() => {
    loadDiscoverTVShowRequest(genreId, nowPlaying, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadDiscoverTVShowRequest,
    genreId,
    nowPlaying,
    upcoming,
    bestRating,
    topRated,
    page,
  ])

  if (discoverTVShow.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Section>
        {discoverTVShow.data.results.map((preview: DiscoverTVShowResult) => (
          <Card key={preview.id} backdrop={preview.backdrop_path}>
            <Preview
              genres={genreTVShow.data.genres}
              history={history}
              preview={preview}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        handlePaginate={handlePaginate}
        page={discoverTVShow.data.page}
        totalPages={discoverTVShow.data.total_pages}
      />
    </>
  )
}
