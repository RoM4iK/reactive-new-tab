import Immutable from 'immutable'

import { UPDATE_TIME } from 'actions/homeActions'

export default (state = new Immutable.Map, action) => {
  switch (action.type) {
  case UPDATE_TIME:
    return state.set('time', action.time)
  default:
    return state
  }
}
