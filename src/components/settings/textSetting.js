import React, { Component, PropTypes } from 'react'

class TextSetting extends Component{
  render() {
    let { name, shortName } = this.props
    return (
      <div className="text-setting">
        <label style={{marginRight: '10px'}}>{name}</label>
        <input
          type="text"
          value={this.props.settings.get(shortName)}
          onChange={this.handleColorChange.bind(this)}
        />
      </div>
    )
  }

  handleColorChange(event) {
    let newSettings = {}
    newSettings[this.props.shortName] = event.target.value
    this.props.updateSettings(newSettings)
  }
}

TextSetting.propTypes = {
  settings: PropTypes.object.isRequired,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateSettings: PropTypes.func.isRequired
}

export default TextSetting
