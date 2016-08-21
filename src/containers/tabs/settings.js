import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'


import { fetchSettings } from 'actions/settingsActions'
import { Background } from 'components/settings'

class Settings extends Component{
  render() {
    return (
      <div className="settings">
        <div className="container-fluid">
          <h1>Settings</h1>
          {this.props.settings && this.renderSettingsComponents()}
        </div>
      </div>
    )
  }

  renderSettingsComponents() {
    let { settings } = this.props
    return (
      <Background settings={settings} updateSettings={this.updateSettings.bind(this)} />
    )
  }

  updateSettings(newSettings) {
    console.log(_.merge(this.props.settings, newSettings))
  }

  componentWillMount() {
    this.props.fetchSettings()
  }
}

Settings.propTypes = {
  settings: PropTypes.object
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
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
