import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { HistoryList } from 'components'
import { fetch } from 'actions/historyActions'


export default class History extends Component{
  render() {
    let { fetch, history, addItem } = this.props
    return (
      <div className="history container-fluid">
          <HistoryList fetch={fetch} history={history} addItem={addItem}/>
      </div>
    )
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.history != this.props.history
  }
}

History.propTypes = {
  history: PropTypes.array,
  fetch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  let history = state.getIn(['history', 'history'])
  if (history) {
    history = history.toJS()
  }
  return {
    history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetch())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
