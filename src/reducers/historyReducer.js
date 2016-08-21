import Immutable from 'immutable'

import { UPDATE_HISTORY } from 'actions/historyActions'

export default (state = new Immutable.Map, action) => {
  switch (action.type) {
    case UPDATE_HISTORY:
      return state.set('history', Immutable.fromJS(action.history))
    default:
      return state
  }
}
