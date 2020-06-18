import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { DiscoverState } from './modules/discover/types'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface ApplicationState {
  discover: DiscoverState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
