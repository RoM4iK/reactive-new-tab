import React, { Component } from 'react'

import { Navigation, Background } from 'components'
import tabs from 'containers/tabs'

export default class MainContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    let SelectedTab = this.selectedTabComponent()
    return (
      <div className="main-container">
        <Navigation tabs={tabs} onSelect={this.selectTab.bind(this)}/>
        <Background />
        {SelectedTab && <SelectedTab/>}
      </div>
    )
  }

  selectTab(id) {
    this.setState({selectedTab: id})
  }

  selectedTab() {
    return tabs.find((tab) => tab.id == this.state.selectedTab)
  }

  selectedTabComponent() {
    return tabs.length && this.selectedTab().component
  }

}
