import { action } from 'typesafe-actions'
import { GenreResponse } from 'entities/genre/types'
import { GenreMovieTypes } from './types'

export const loadGenreMovieRequest = () => action(GenreMovieTypes.LOAD_GENRE_MOVIE_REQUEST)

export const loadGenreMovieSuccess = (data: GenreResponse) => action(GenreMovieTypes.LOAD_GENRE_MOVIE_SUCCESS, data)

export const loadGenreMovieFailure = () => action(GenreMovieTypes.LOAD_GENRE_MOVIE_FAILURE)
