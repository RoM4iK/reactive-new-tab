import Immutable from 'immutable'

import { UPDATE_RECENT_BOOKMARKS, UPDATE_BOOKMARKS } from 'actions/bookmarksActions'

export default (state = null, action) => {
  if (state === null) {
    state = new Immutable.Map
  }
  switch (action.type) {
  case UPDATE_BOOKMARKS:
    return state.set('bookmarks', Immutable.fromJS(action.bookmarks))
  case UPDATE_RECENT_BOOKMARKS:
    return state.set('recentBookmarks', Immutable.fromJS(action.recentBookmarks))
  default:
    return state
  }
}
