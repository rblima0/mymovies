import React, { useEffect } from 'react'

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

  useEffect(() => {
    loadMovieRequest(movieId)
    loadTrailerRequest(movieId)
  }, [loadMovieRequest, loadTrailerRequest, movieId])

  if (movie.error) {
    return <Error />
  }

  if (
    movie.loading ||
    trailer.loading ||
    Object.entries(movie.data).length === 0 ||
    Object.entries(trailer.data).length === 0
  ) {
    return <Loader />
  }

  return <Details movie={movie.data} trailer={trailer.data} />
}
