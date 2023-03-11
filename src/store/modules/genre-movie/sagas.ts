import { call, put, takeLatest, all } from 'redux-saga/effects'

import api from 'services/api'
import config from 'utils/config'

import Genre from 'entities/genre'

import { loadGenreMovieSuccess, loadGenreMovieFailure } from './actions'
import { GenreMovieTypes } from './types'

export function* loadGenreMovie() {
  try {
    const url = `/genre/movie/list?api_key=${config.api_key}&language=pt-BR`
    const response = yield call(api.get, url)

    const { data } = response

    const genre = new Genre(data)

    yield put(loadGenreMovieSuccess(genre))
  } catch (err) {
    yield put(loadGenreMovieFailure())
  }
}

export default all([takeLatest(GenreMovieTypes.LOAD_GENRE_MOVIE_REQUEST, loadGenreMovie)])
