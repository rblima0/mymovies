import React, { useEffect } from 'react'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/shared/Sidebar'
import { Loader } from '../../components/shared/Loader'
import { Header } from '../../components/Header'
import { Genre } from '../../components/Genre'

import { MenuProps } from './types'
import { Container, Content } from './styles'

export function Menu(props: MenuProps) {
  const { genre, loadGenreRequest } = props

  useEffect(() => {
    loadGenreRequest()
  }, [loadGenreRequest])

  if (genre.loading || Object.entries(genre.data).length === 0) {
    return <Loader />
  }

  return (
    <Container>
      <Sidebar>
        <Genre genres={genre.data.genres} />
      </Sidebar>
      <Content>
        <Header />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
