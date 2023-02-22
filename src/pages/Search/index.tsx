import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from 'components/Preview'
import { Pagination } from 'components/shared/Pagination'
import { Loader } from 'components/shared/Loader'
import { Card } from 'components/shared/Card'
import { Error } from 'components/shared/Error'

import { SearchProps } from './types'
import { Section } from './styles'

export function Search({
  genre,
  search,
  history,
  loadSearchRequest,
  match: {
    params: { query, page },
  },
}: SearchProps): ReactElement {
  const handlePaginate = (pageNumber: number): void => {
    const title = history.location.state

    history.push({
      pathname: `/dashboard/search/${query}/page/${pageNumber}`,
      state: title,
    })
  }

  const isLoading = useMemo(() => {
    return search.loading || R.isEmpty(search.data)
  }, [search])

  useEffect(() => {
    loadSearchRequest(page, query)
    window.scrollTo(0, 0)
  }, [loadSearchRequest, query, page])

  if (search.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  if (R.isEmpty(search.data.results)) {
    return <Error title="Não encontramos resultados para a busca" />
  }

  return (
    <>
      <Section>
        {search.data.results.map((preview) => (
          <Card key={preview.id} backdrop={preview.backdrop_path}>
            <Preview
              preview={preview}
              history={history}
              genres={genre.data.genres}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        handlePaginate={handlePaginate}
        totalPages={search.data.total_pages}
        page={search.data.page}
      />
    </>
  )
}
