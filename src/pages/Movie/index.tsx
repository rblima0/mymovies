import React, { useEffect, useMemo } from 'react'
import * as R from 'ramda'

import { Details } from '../../components/Details'
import { Loader } from '../../components/shared/Loader'
import { Error } from '../../components/shared/Error'

import { MovieProps } from './types'

export function Movie(props: MovieProps) {
  const {
    loadMovieRequest,
    loadTrailerRequest,
    movie,
    trailer,
    match: {
      params: { movieId },
    },
  } = props

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
  }, [loadMovieRequest, loadTrailerRequest, movieId])

  if (movie.error) {
    return <Error title="Tivemos um problema" />
  }

  if (isLoading) {
    return <Loader />
  }

  return <Details movie={movie.data} trailer={trailer.data} />
}
