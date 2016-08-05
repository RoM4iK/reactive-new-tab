import React, { Component, PropTypes } from 'react'

class Navigation extends Component{
  render() {
    return (
      <div className="navigation">
        {this.items()}
      </div>
    )
  }
  items() {
    return this.props.tabs.map(this.renderItem, this)
  }

  renderItem(item) {
    return (
      <div className="navigation_item cp" key={item.id} onClick={this.select.bind(this, item)}>
        {item.name}
      </div>
    )
  }
  select(tab) {
    this.props.onSelect(tab.id)
  }
}

Navigation.PropTypes = {
  tabs: PropTypes.array.isRequired
}

export default Navigation
