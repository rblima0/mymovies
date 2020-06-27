import React, { useEffect } from 'react'

import { Pagination } from '../../components/Pagination'
import { Loader } from '../../components/shared/Loader'
import { Card } from '../../components/shared/Card'
import { Preview } from '../../components/Preview'

import { DiscoverProps } from './types'
import { Section } from './styles'

export function Discover(props: DiscoverProps) {
  const {
    loadDiscoverRequest,
    discover,
    genre,
    history,
    match: {
      params: { genreId },
    },
  } = props

  const resetPage = 1

  useEffect(() => {
    loadDiscoverRequest(resetPage, genreId)
  }, [loadDiscoverRequest, genreId])

  if (discover.loading || Object.entries(discover.data).length === 0) {
    return <Loader />
  }

  return (
    <>
      <Section>
        {discover.data.results.map((preview) => (
          <Card key={preview.id}>
            <Preview
              preview={preview}
              genres={genre.data.genres}
              history={history}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        loadDiscoverRequest={loadDiscoverRequest}
        totalPages={discover.data.total_pages}
        page={discover.data.page}
        genre={genreId}
      />
    </>
  )
}
