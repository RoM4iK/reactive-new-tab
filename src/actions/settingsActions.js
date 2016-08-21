export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const SET_VALUE = 'SET_VALUE'


export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    settings: settings
  }
}

export function fetchSettings() {
  return function (dispatch) {
    return chrome.storage.sync.get('settings', (items) => {
      let settings = items.settings ? JSON.parse(items.settings) : {}
      dispatch(updateSettings(settings))
    })
  }
}
