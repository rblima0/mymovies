import React, { ReactElement, useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Preview } from 'components/preview'
import { Pagination } from 'components/shared/pagination'
import { Loader } from 'components/shared/loader'
import { Card } from 'components/shared/card'
import { Error } from 'components/shared/error'

import { SearchProps } from './types'
import { Section } from './styles'

export function Search({
  genreMovie,
  genreTVShow,
  search,
  history,
  loadSearchRequest,
  match: {
    params: { query, page },
  },
}: SearchProps): ReactElement {
  const array1 = genreMovie.data.genres
  const array2 = genreTVShow.data.genres
  
  const genres = array1.concat(array2.filter((item) =>
    !array1.some((el: { id: number }) => el.id === item.id)
  ))

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
              genres={genres}
              history={history}
              preview={preview}
            />
          </Card>
        ))}
      </Section>

      <Pagination
        handlePaginate={handlePaginate}
        page={search.data.page}
        totalPages={search.data.total_pages}
      />
    </>
  )
}
