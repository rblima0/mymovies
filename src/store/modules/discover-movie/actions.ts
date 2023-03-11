import { action } from 'typesafe-actions'
import { DiscoverMovieResponse } from 'entities/discover-movie/types'
import { DiscoverMovieTypes } from './types'

export const loadDiscoverMovieRequest = (
  genre?: number,
  cast?: number,
  nowPlaying?: boolean,
  upcoming?: boolean,
  bestRating?: boolean,
  topRated?: boolean,
  page?: number
) =>
  action(DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_REQUEST, {
    genre,
    cast,
    nowPlaying,
    upcoming,
    topRated,
    bestRating,
    page,
  })

export const loadDiscoverMovieSuccess = (data: DiscoverMovieResponse) =>
  action(DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_SUCCESS, data)

export const loadDiscoverMovieFailure = () =>
  action(DiscoverMovieTypes.LOAD_DISCOVER_MOVIE_FAILURE)
