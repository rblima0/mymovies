import React, { useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/shared/Sidebar'
import { Loader } from '../../components/shared/Loader'
import { Header } from '../../components/Header'
import { Genre } from '../../components/Genre'

import { MenuProps } from './types'
import { Container, Content } from './styles'

export function Menu(props: MenuProps) {
  const { loadGenreRequest, genre, history } = props

  const isLoading = useMemo(() => {
    return genre.loading || R.isEmpty(genre.data)
  }, [genre])

  useEffect(() => {
    loadGenreRequest()
  }, [loadGenreRequest])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <Sidebar>
        <Genre genres={genre.data.genres} history={history} />
      </Sidebar>
      <Content>
        <Header history={history} />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
