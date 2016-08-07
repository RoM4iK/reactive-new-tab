import { combineReducers } from 'redux-immutable'

import home from './homeReducer'
import history from './historyReducer'
import bookmarks from './bookmarksReducer'

const rootReducer = combineReducers({
  home,
  history,
  bookmarks
})

export default rootReducer
