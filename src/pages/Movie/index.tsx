import React, { ReactElement, useEffect, useMemo } from 'react'
import { MdArrowBack } from 'react-icons/md'
import * as R from 'ramda'

import { colors } from 'styles/theme'

import { Loader } from 'components/shared/Loader'
import { Error } from 'components/shared/Error'
import { Details } from './components/Details'
import { Credits } from './components/Credits'
import { Informations } from './components/Informations'

import { MovieProps } from './types'
import { ButtonBack, Divisor, Wrapper, Section } from './styles'

export function Movie({
  loadMovieRequest,
  loadTrailerRequest,
  movie,
  trailer,
  history,
  match: {
    params: { movieId },
  },
}: MovieProps): ReactElement {
  const handleClickCast = (id: number, name?: string): void => {
    history.push({
      pathname: `/dashboard/cast/${id}`,
      state: name,
    })
  }

  const isLoading = useMemo(() => {
    return (
      movie.loading ||
      trailer.loading ||
      R.isEmpty(movie.data) ||
      R.isEmpty(trailer.data)
    )
  }, [movie, trailer])

  useEffect(() => {
    loadMovieRequest(movieId)
    loadTrailerRequest(movieId)
    window.scrollTo(0, 0)
  }, [loadMovieRequest, loadTrailerRequest, movieId])

  if (movie.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Wrapper>
      <ButtonBack type="button" onClick={(): void => history.goBack()}>
        <MdArrowBack size={24} color={colors.gray200} />
      </ButtonBack>

      <Section>
        <Details movie={movie.data} trailer={trailer.data} />
        <Informations movie={movie.data} />
      </Section>

      <Divisor />

      <Credits movie={movie.data} handleClickCast={handleClickCast} />
    </Wrapper>
  )
}
