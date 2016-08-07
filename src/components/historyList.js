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
