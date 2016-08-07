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
    chrome.history.onVisited.addListener(this.fetch.bind(this))
  }

  fetch() {
    this.props.fetch()
  }

  componentWillMount() {
    this.subscribeOnHistoryUpdate()
    this.fetch()
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.history)
    console.log(this.props.history)
    console.log(nextProps.history != this.props.history)
    return nextProps.history != this.props.history
  }
}


HistoryList.propTypes = {
  time: PropTypes.array,
  fetch: PropTypes.func.isRequired
}

export default HistoryList
