import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import { RecentBookmarks } from 'components'
import { fetchHistory } from 'actions/historyActions'
import { fetchBookmarks, filterRecentBookmarks } from 'actions/bookmarksActions'


export default class Bookmarks extends Component{
  render() {
    let {
      fetchHistory, recentBookmarks, bookmarks, history, filterRecentBookmarks
    } = this.props
    return (
      <div className="history container-fluid">
          <RecentBookmarks
            bookmarks={bookmarks}
            history={history}
            fetchHistory={fetchHistory}
            recentBookmarks={recentBookmarks}
            filterRecentBookmarks={filterRecentBookmarks}
          />
      </div>
    )
  }

  subscribeBookmarksUpdate() {
    this.bindedFetch = this.props.fetchBookmarks.bind(this)
    chrome.bookmarks.onCreated.addListener(this.bindedFetch)
    chrome.bookmarks.onRemoved.addListener(this.bindedFetch)
    chrome.bookmarks.onChanged.addListener(this.bindedFetch)
  }

  unSubscribeBookmarksUpdate() {
    chrome.bookmarks.onCreated.removeListener(this.bindedFetch)
    chrome.bookmarks.onRemoved.removeListener(this.bindedFetch)
    chrome.bookmarks.onChanged.removeListener(this.bindedFetch)
  }

  componentWillMount() {
    this.props.fetchBookmarks()
    this.subscribeBookmarksUpdate()
  }

  componentWillUnmount() {
    this.unSubscribeBookmarksUpdate()
  }

}

Bookmarks.propTypes = {
  history: PropTypes.instanceOf(Immutable.List),
  bookmarks: PropTypes.instanceOf(Immutable.List),
  recentBookmarks: PropTypes.instanceOf(Immutable.List),
  fetchHistory: PropTypes.func.isRequired,
  fetchBookmarks: PropTypes.func.isRequired,
  filterRecentBookmarks: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    history: state.getIn(['history', 'history']),
    bookmarks: state.getIn(['bookmarks', 'bookmarks']),
    recentBookmarks: state.getIn(['bookmarks', 'recentBookmarks'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistory: () => {
      dispatch(fetchHistory())
    },
    fetchBookmarks: () => {
      dispatch(fetchBookmarks())
    },
    filterRecentBookmarks: (bookmarks, history) => {
      dispatch(filterRecentBookmarks(bookmarks, history))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmarks)
