import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from '../../components/Preview'
import { Pagination } from '../../components/shared/Pagination'
import { Loader } from '../../components/shared/Loader'
import { Card } from '../../components/shared/Card'
import { Error } from '../../components/shared/Error'

import { DiscoverProps } from './types'
import { Section } from './styles'

export function Discover({
  loadDiscoverRequest,
  discover,
  genre,
  history,
  match: {
    params: { genreId, castId, page },
  },
}: DiscoverProps): ReactElement {
  const paginatePathname = (pageNumber: number): string => {
    if (genreId) {
      return `/dashboard/genre/${genreId}/page/${pageNumber}`
    }

    if (castId) {
      return `/dashboard/cast/${castId}/page/${pageNumber}`
    }

    return `/dashboard/page/${pageNumber}`
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
    loadDiscoverRequest(page, genreId, castId)
    window.scrollTo(0, 0)
  }, [loadDiscoverRequest, genreId, castId, page])

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
