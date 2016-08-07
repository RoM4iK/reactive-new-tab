import React, { Component, PropTypes } from 'react'

class HistoryList extends Component{
  render() {
    let { history } = this.props
    return history ? (
      <div className="items-container">
          {history.map(this.renderItem)}
      </div>
    ) : null
  }

  renderItem(item) {
    return(
      <div className="item" key={item.id}>
          <a href={item.url} target="_blank" title={item.title}>{item.title}</a>
      </div>
    )
  }

  subscribeOnHistoryUpdate() {
    // TODO: replace this handler with single adding
    chrome.history.onVisited.addListener(this.fetchHistory.bind(this))
  }

  fetchHistory() {
    this.props.fetchHistory()
  }

  componentWillMount() {
    this.subscribeOnHistoryUpdate()
    this.fetchHistory()
  }
}


HistoryList.propTypes = {
  time: PropTypes.array,
  fetchHistory: PropTypes.func.isRequired
}

export default HistoryList
