import React, { Component, PropTypes } from 'react'

class FontColor extends Component{
  render() {
    return (
      <div className="font-color">
        <div className="font-color">
          <label style={{marginRight: '10px'}}>Font color:</label>
          <input
            type="text"
            value={this.props.settings.get('font-color')}
            onChange={this.handleColorChange.bind(this)}
            placeholder="font color"
          />
        </div>
      </div>
    )
  }

  handleColorChange(event) {
    this.props.updateSettings({fontColor: event.target.value})
  }
}

FontColor.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired
}

export default FontColor
