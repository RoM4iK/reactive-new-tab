import { combineReducers } from 'redux-immutable'

import homeReducer from './homeReducer'

const rootReducer = combineReducers({
  homeReducer,
})

export default rootReducer
