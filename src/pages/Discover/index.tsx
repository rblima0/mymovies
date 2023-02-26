import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from 'components/Preview'
import { Pagination } from 'components/shared/Pagination'
import { Loader } from 'components/shared/Loader'
import { Card } from 'components/shared/Card'
import { Error } from 'components/shared/Error'

import { DiscoverProps } from './types'
import { Section } from './styles'

export function Discover({
  loadDiscoverRequest,
  discover,
  genre,
  history,
  match: {
    params: { genreId, castId, upcoming, bestRating, topRated, page },
  },
}: DiscoverProps): ReactElement {
  const pathConfig = {
    default: '/dashboard/page',
    genre: `/dashboard/genre/${genreId}/page`,
    cast: `/dashboard/cast/${castId}/page`,
    upcoming: '/dashboard/upcoming/true/page',
    bestRating: '/dashboard/best-rating/true/page',
    topRated: '/dashboard/top-rated/true/page',
  }

  const paginatePathname = (pageNumber: number): string => {
    const path = genreId ? pathConfig.genre : 
                 castId ? pathConfig.cast : 
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
    loadDiscoverRequest(genreId, castId, upcoming, bestRating, topRated, page)
    window.scrollTo(0, 0)
  }, [
    loadDiscoverRequest,
    genreId,
    castId,
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
        {discover.data.results.map((preview) => (
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
