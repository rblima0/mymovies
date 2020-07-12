import React, { useEffect } from 'react'

import { Details } from '../../components/Details'
import { Loader } from '../../components/shared/Loader'

import { MovieProps } from './types'

export function Movie(props: MovieProps) {
  const {
    loadMovieRequest,
    loadTrailerRequest,
    movie,
    match: {
      params: { movieId },
    },
  } = props

  useEffect(() => {
    loadMovieRequest(movieId)
    loadTrailerRequest(movieId)
  }, [loadMovieRequest, loadTrailerRequest, movieId])

  if (
    movie.loading ||
    Object.entries(movie.data).length === 0 ||
    Object.entries(movie.trailer).length === 0
  ) {
    return <Loader />
  }

  return (
    <>
      <Details movie={movie.data} trailer={movie.trailer} />
    </>
  )
}
