import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import * as R from 'ramda'

import { InternalRoutes } from 'routes/InternalRoutes'
import { Sidebar } from 'components/shared/Sidebar'
import { Loader } from 'components/shared/Loader'
import { Genre } from './components/Genre'
import { Header } from './components/Header'

import { Category, MenuProps } from './types'
import { Container, Content } from './styles'

export function Menu({
  loadGenreRequest,
  loadGenreSeriesRequest,
  genre,
  genreSeries,
  history,
}: MenuProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const moviesCategories: Category[] = [
    {
      title: 'Popular',
      name: 'popular',
    },
    {
      title: 'No cinema',
      name: 'now-playing',
    },
    {
      title: 'Em breve',
      name: 'upcoming',
    },
    {
      title: 'Melhor avaliados',
      name: 'best-rating',
    },
    {
      title: 'Mais votados',
      name: 'top-rated',
    },
  ]

  const handleToggleSidebar = (): void => setIsOpen(!isOpen)

  const handleCloseSidebar = (): void => setIsOpen(false)

  const isLoading = useMemo(() => {
    return genre.loading || genreSeries.loading 
      || R.isEmpty(genre.data) || R.isEmpty(genreSeries.data)
  }, [genre, genreSeries])

  useEffect(() => {
    loadGenreRequest()
    loadGenreSeriesRequest()
  }, [loadGenreRequest, loadGenreSeriesRequest])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <Sidebar handleToggleSidebar={handleToggleSidebar} isOpen={isOpen}>
        <Genre
          genres={genre.data.genres}
          genresSeries={genreSeries.data.genres}
          movieCategories={moviesCategories}
          history={history}
          handleCloseSidebar={handleCloseSidebar}
        />
      </Sidebar>
      <Content>
        <Header history={history} />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
