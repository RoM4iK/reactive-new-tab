import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Navigation, Background } from 'components'
import tabs from 'containers/tabs'
import { fetchSettings } from 'actions/settingsActions'


class MainContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    let { settings } = this.props
    let SelectedTab = this.selectedTabComponent()
    return (
      <div className="main-container" style={this.getStyles()}>
        <Navigation tabs={tabs} onSelect={this.selectTab.bind(this)}/>
        <Background settings={settings}/>
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

  getStyles() {
    let { settings } = this.props
    return settings ? {
      color: settings.get('fontColor')
    } : {}
  }

  componentWillMount() {
    this.props.fetchSettings()
  }

}

MainContainer.propTypes = {
  settings: PropTypes.object,
  fetchSettings: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    settings: state.getIn(['settings', 'settings'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettings: () => {
      dispatch(fetchSettings())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
