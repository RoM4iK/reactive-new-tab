export const UPDATE_HISTORY = 'UPDATE_HISTORY'

export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    history: history
  }
}

export function fetchHistory () {
  return function (dispatch) {
    return chrome.history.search({text: ''}, (items) =>
      dispatch(updateHistory(items))
    )
  }
}

// TODO: create action for add single history item
