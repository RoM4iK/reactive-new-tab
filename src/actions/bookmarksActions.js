export const UPDATE_RECENT_BOOKMARKS = 'UPDATE_RECENT_BOOKMARKS'
export const UPDATE_BOOKMARKS = 'UPDATE_BOOKMARKS'

export function updateBookmarks(bookmarks) {
  return {
    type: UPDATE_BOOKMARKS,
    bookmarks: bookmarks
  }
}

export function filterRecentBookmarks(bookmarks, history) {
  history = history.toJS()
  let recentBookmarks =  _
    .chain(bookmarks.toJS())
    .filter((item) =>
      history.some((historyItem) =>
        historyItem.url == item.url
      )
    )
    .take(10)
    .sortBy((item) =>
      _.findIndex(history, (historyItem) => {
        return historyItem.url == item.url
      })
    )
    .value()

  return {
    type: UPDATE_RECENT_BOOKMARKS,
    recentBookmarks
  }
}

export function fetchBookmarks() {
  return (dispatch) => {
    chrome.bookmarks.getRecent(1000000, (bookmarks) =>
      dispatch(updateBookmarks(bookmarks))
    )
  }
}
