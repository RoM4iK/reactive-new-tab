import React, { Component, PropTypes } from 'react'

import { Card } from 'components'

class HistoryList extends Component{
  render() {
    let { history } = this.props
    return history ? (
      <div className="items row">
          {history.map(this.renderItem)}
      </div>
    ) : null
  }

  renderItem(item) {
    return(
      <Card className="item col-xs-12" key={item.id} href={item.url} title={item.title} />
    )
  }

  subscribeOnHistoryUpdate() {
    this.bindedFetch = this.fetch.bind(this)
    chrome.history.onVisited.addListener(this.bindedFetch)
  }

  unSubscribeOnHistoryUpdate() {
    chrome.history.onVisited.removeListener(this.bindedFetch)
  }

  fetch() {
    this.props.fetch()
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.history != this.props.history
  }

  componentWillMount() {
    this.subscribeOnHistoryUpdate()
    this.fetch()
  }

  componentWillUnmount() {
    this.unSubscribeOnHistoryUpdate()
  }

}

HistoryList.propTypes = {
  time: PropTypes.array,
  fetch: PropTypes.func.isRequired
}

export default HistoryList
