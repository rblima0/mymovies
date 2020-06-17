import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { MovieState } from './modules/movie/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface ApplicationState {
  movie: MovieState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
