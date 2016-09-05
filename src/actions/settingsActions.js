import Immutable from 'immutable'

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'

export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    settings: settings
  }
}

let delayedTimeout

export function saveSettingsDelayed(settings) {
  return function (dispatch) {
    dispatch(updateSettings(settings))
    if (delayedTimeout) {
      clearTimeout(delayedTimeout)
    }
    delayedTimeout = setTimeout(() => {
      dispatch(saveSettings(settings))
    }, 1000)
  }
}

export function saveSettings(settings) {
  return function (dispatch) {
    return chrome.storage.sync.set({settings: JSON.stringify(settings.toJS())}, () => {
      dispatch(fetchSettings())
    })
  }
}

export function fetchSettings() {
  return function (dispatch) {
    return chrome.storage.sync.get('settings', (items) => {
      if (items.settings) {
        let settings = Immutable.fromJS(JSON.parse(items.settings))
        dispatch(updateSettings(settings))
      }
    })
  }
}
