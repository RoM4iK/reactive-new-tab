import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'


let middleware = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  let createLogger = require('redux-logger')
  middleware = [...middleware, createLogger()]
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      ...middleware
    )
  )
}
