import { action } from 'typesafe-actions'

import { GenreResponse } from 'entities/genre/types'
import { GenreTVShowTypes } from './types'

export const loadGenreTVShowRequest = () => action(GenreTVShowTypes.LOAD_GENRE_TV_SHOW_REQUEST)

export const loadGenreTVShowSuccess = (data: GenreResponse) => action(GenreTVShowTypes.LOAD_GENRE_TV_SHOW_SUCCESS, data)

export const loadGenreTVShowFailure = () => action(GenreTVShowTypes.LOAD_GENRE_TV_SHOW_FAILURE)
