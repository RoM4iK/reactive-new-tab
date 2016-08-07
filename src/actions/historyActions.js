export const UPDATE_HISTORY = 'UPDATE_HISTORY'

export function update(history) {
  return {
    type: UPDATE_HISTORY,
    history: history
  }
}

export function fetch () {
  return function (dispatch) {
    return chrome.history.search({text: ''}, (items) =>
      dispatch(update(items))
    )
  }
}
