import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import * as R from 'ramda'

import { InternalRoutes } from 'routes/internal-routes'
import { Sidebar } from 'components/shared/sidebar'
import { Loader } from 'components/shared/loader'
import { Genre } from './components/genre'
import { Header } from './components/header'

import { Category, MenuProps } from './types'
import { Container, Content } from './styles'

export function Menu({
  genreMovie,
  genreTVShow,
  history,
  loadGenreMovieRequest,
  loadGenreTVShowRequest,
}: MenuProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const moviesCategories: Category[] = [
    {
      title: 'Popular',
      name: 'popular-movies',
    },
    {
      title: 'No cinema',
      name: 'now-playing-movies',
    },
    {
      title: 'Em breve',
      name: 'upcoming-movies',
    },
    {
      title: 'Melhor avaliados',
      name: 'best-rating-movies',
    },
    {
      title: 'Mais votados',
      name: 'top-rated-movies',
    },
  ]

  const tvShowCategories: Category[] = [
    {
      title: 'Popular',
      name: 'popular-tv-shows',
    },
    {
      title: 'Lançamentos',
      name: 'now-playing-tv-shows',
    },
    {
      title: 'Em breve',
      name: 'upcoming-tv-shows',
    },
    {
      title: 'Melhor avaliados',
      name: 'best-rating-tv-shows',
    },
    {
      title: 'Mais votados',
      name: 'top-rated-tv-shows',
    },
  ]

  const handleToggleSidebar = (): void => setIsOpen(!isOpen)

  const handleCloseSidebar = (): void => setIsOpen(false)

  const isLoading = useMemo(() => {
    return genreMovie.loading || genreTVShow.loading 
      || R.isEmpty(genreMovie.data) || R.isEmpty(genreTVShow.data)
  }, [genreMovie, genreTVShow])

  useEffect(() => {
    loadGenreMovieRequest()
    loadGenreTVShowRequest()
  }, [loadGenreMovieRequest, loadGenreTVShowRequest])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <Sidebar handleToggleSidebar={handleToggleSidebar} isOpen={isOpen}>
        <Genre
          genreMovie={genreMovie.data.genres}
          genreTVShow={genreTVShow.data.genres}
          handleCloseSidebar={handleCloseSidebar}
          history={history}
          movieCategories={moviesCategories}
          tvShowCategories={tvShowCategories}
        />
      </Sidebar>
      <Content>
        <Header history={history} />
        <InternalRoutes />
      </Content>
    </Container>
  )
}
