import React, { useEffect } from 'react'
import * as R from 'ramda'

import { Loader } from '../../components/shared/Loader'
import { Card } from '../../components/shared/Card'
import { Preview } from '../../components/Preview'
import { Error } from '../../components/shared/Error'

import { SearchProps } from './types'
import { Section } from './styles'

export function Search(props: SearchProps) {
  const {
    genre,
    search,
    history,
    loadSearchRequest,
    match: {
      params: { query },
    },
  } = props

  const resetPage = 1

  useEffect(() => {
    loadSearchRequest(resetPage, query)
  }, [loadSearchRequest, query])

  if (search.error) {
    return <Error title="Tivemos um problema" />
  }

  if (search.loading || R.isEmpty(search.data)) {
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
    </>
  )
}
