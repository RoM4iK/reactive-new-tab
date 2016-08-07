import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { HistoryList } from 'components'
import { fetchHistory } from 'actions/historyActions'


export default class History extends Component{
  render() {
    let { fetchHistory, history } = this.props
    return (
      <div className="history">
        <HistoryList fetchHistory={fetchHistory} history={history}/>
      </div>
    )
  }
}

History.propTypes = {
  history: PropTypes.array,
  fetchHistory: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  let history = state.getIn(['history', 'history'])
  return {
    history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistory: () => {
      dispatch(fetchHistory())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
