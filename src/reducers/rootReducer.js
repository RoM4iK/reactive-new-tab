import { combineReducers } from 'redux-immutable'

import home from './homeReducer'
import history from './historyReducer'
import bookmarks from './bookmarksReducer'
import settings from './settingsReducer'

const rootReducer = combineReducers({
  home,
  history,
  bookmarks,
  settings
})

export default rootReducer
