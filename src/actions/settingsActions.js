export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'


export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    settings: settings
  }
}

export function saveSettings(settings) {
  return function (dispatch) {
    return chrome.storage.sync.set({settings: JSON.stringify(settings)}, () => {
      dispatch(fetchSettings())
    })
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
