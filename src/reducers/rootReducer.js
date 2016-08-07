import { combineReducers } from 'redux-immutable'

import home from './homeReducer'
import history from './historyReducer'

const rootReducer = combineReducers({
  home,
  history
})

export default rootReducer
