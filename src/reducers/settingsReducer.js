import Immutable from 'immutable'

import { UPDATE_SETTINGS } from 'actions/settingsActions'

export default (state = new Immutable.Map, action) => {
  switch (action.type) {
  case UPDATE_SETTINGS:
    return state.set('settings', action.settings)
  default:
    return state
  }
}
