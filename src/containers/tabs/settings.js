import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'


import { saveSettingsDelayed } from 'actions/settingsActions'
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
    this.props.saveSettingsDelayed(this.props.settings.merge(newSettings))
  }

}

Settings.propTypes = {
  settings: PropTypes.instanceOf(Immutable.Map),
  saveSettingsDelayed: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    settings: state.getIn(['settings', 'settings'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveSettingsDelayed: (settings) => {
      dispatch(saveSettingsDelayed(settings))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
