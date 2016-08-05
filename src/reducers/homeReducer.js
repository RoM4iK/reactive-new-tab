import Immutable from 'immutable'

import { UPDATE_TIME } from 'actions/homeActions'

export default (state = null, action) => {
  if (state === null) {
    state = new Immutable.Map
  }
  switch (action.type) {
    case UPDATE_TIME:
      return state.set('time', action.time)
    default:
      return state
  }
}
