import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import * as R from 'ramda'

import { InternalRoutes } from '../../routes/InternalRoutes'
import { Sidebar } from '../../components/shared/Sidebar'
import { Loader } from '../../components/shared/Loader'
import { Genre } from './components/Genre'
import { Header } from './components/Header'

import { MenuProps } from './types'
import { Container, Content } from './styles'

export function Menu({
  loadGenreRequest,
  genre,
  history,
}: MenuProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = (): void => {
    setIsOpen(!isOpen)
  }

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
      <Sidebar handleToggleSidebar={handleToggleSidebar} isOpen={isOpen}>
        <Genre
          genres={genre.data.genres}
          history={history}
          handleToggleSidebar={handleToggleSidebar}
        />
      </Sidebar>
      <Content>
        <Header history={history} />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
