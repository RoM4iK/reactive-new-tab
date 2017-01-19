import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'


import { saveSettingsDelayed } from 'actions/settingsActions'
import { Background, FontColor } from 'components/settings'

class Settings extends Component{
  render() {
    return (
      <div className="settings">
        <h1>Settings</h1>
        {this.props.settings && this.renderSettingsComponents()}
      </div>
    )
  }

  renderSettingsComponents() {
    let { settings } = this.props
    return (
      <div>
        <FontColor settings={settings} updateSettings={this.updateSettings.bind(this)} />
        <Background settings={settings} updateSettings={this.updateSettings.bind(this)} />
      </div>
    )
  }

  updateSettings(newSettings) {
    this.props.saveSettingsDelayed(this.props.settings.merge(newSettings))
  }

}

Settings.propTypes = {
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
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
