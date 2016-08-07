import Immutable from 'immutable'

import { UPDATE_HISTORY } from 'actions/historyActions'

export default (state = null, action) => {
  if (state === null) {
    state = new Immutable.Map
  }
  switch (action.type) {
    case UPDATE_HISTORY:
      return state.set('history', Immutable.fromJS(action.history))
    default:
      return state
  }
}
