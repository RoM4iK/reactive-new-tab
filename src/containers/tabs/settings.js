import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'


import { saveSettingsDelayed } from 'actions/settingsActions'
import { BackgroundImage, TextSetting } from 'components/settings'

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
    let childProps = {
      settings: settings,
      updateSettings: this.updateSettings.bind(this)
    }
    return (
      <div>
        <TextSetting {...childProps} shortName="fontColor" name="Font color" />
        <TextSetting {...childProps} shortName="backgroundColor" name="Background color" />
        <BackgroundImage {...childProps}/>
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
