import React, { Component, PropTypes } from 'react'
import { BackgroundImage } from 'components/settings'

class Background extends Component{
  render() {
    let { settings, updateSettings } = this.props
    return (
      <div className="background">
        <div className="background-color">
          <label style={{marginRight: '10px'}}>Background color:</label>
          <input
            type="text"
            value={settings.get('backgroundColor')}
            onChange={this.handleColorChange.bind(this)}
            placeholder="background color"
          />
        </div>
        <BackgroundImage {...{settings, updateSettings}}/>
      </div>
    )
  }

  handleColorChange(event) {
    this.props.updateSettings({backgroundColor: event.target.value})
  }
}

Background.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired
}

export default Background
