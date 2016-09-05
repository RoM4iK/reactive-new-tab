import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'

import home from './homeReducer'
import history from './historyReducer'
import bookmarks from './bookmarksReducer'
import settings, { initialState as settingsState } from './settingsReducer'

const rootReducer = combineReducers({
  home,
  history,
  bookmarks,
  settings
})

export default rootReducer

export const initialState = Immutable.fromJS({
  settings: settingsState
})
