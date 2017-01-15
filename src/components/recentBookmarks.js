import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'

import { Card } from 'components'

class RecentBookmarks extends Component{
  render() {
    let { recentBookmarks } = this.props
    if (!recentBookmarks) {
      return null
    }
    recentBookmarks = recentBookmarks.toJS()
    if (recentBookmarks.lentgh == 0) {
      return null
    }
    return (
      <div className="recent-bookmarks">
        <h3 className="tac">Recently visited bookmarks</h3>
        {this.renderList(recentBookmarks)}
      </div>
    )
  }

  renderList(items) {
    return (
      <div className="items row">
        {items.map(this.renderItem)}
      </div>
    )
  }

  renderItem(item) {
    return(
      <Card className="item" key={item.id} href={item.url} title={item.title} />
    )
  }

  subscribeOnHistoryUpdate() {
    this.bindedFetch = this.fetchHistory.bind(this)
    chrome.history.onVisited.addListener(this.bindedFetch)
  }

  unSubscribeOnHistoryUpdate() {
    chrome.history.onVisited.removeListener(this.bindedFetch)
  }

  fetchHistory() {
    this.props.fetchHistory()
  }

  filterRecentBookmarks(props) {
    if (!this.recentBookmarksFiltering && props.bookmarks && props.history) {
      this.recentBookmarksFiltering = true
      props.filterRecentBookmarks(props.bookmarks, props.history)
    }
  }

  componentWillReceiveProps(props) {
    this.shouldFilterRecentBookmarks(props) && this.filterRecentBookmarks(props)
  }

  shouldFilterRecentBookmarks(props) {
    if (props.recentBookmarks) {
      this.recentBookmarksFiltering = false
    }
    return this.props.bookmarks != props.bookmarks || this.props.history != props.history
  }

  componentWillMount() {
    this.subscribeOnHistoryUpdate()
    this.fetchHistory()
  }

  componentWillUnmount() {
    this.unSubscribeOnHistoryUpdate()
  }
}

RecentBookmarks.propTypes = {
  history: PropTypes.instanceOf(Immutable.List),
  bookmarks: PropTypes.instanceOf(Immutable.List),
  recentBookmarks: PropTypes.instanceOf(Immutable.List),
  fetchHistory: PropTypes.func.isRequired,
  filterRecentBookmarks: PropTypes.func.isRequired
}

export default RecentBookmarks
