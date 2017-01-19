import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'

class Background extends Component{
  render() {
    let settings = this.props.settings || (new Immutable.Map)
    let backgroundColor = settings.get('backgroundColor')
    let backgroundImage = settings.get('backgroundImage')
    let styles = {
      backgroundColor,
      top: this.props.topOffset || 0,
      right: this.props.rightOffset || 0,
      bottom: this.props.bottomOffset || 0,
      left: this.props.leftOffset || 0,
    }
    if (backgroundImage) {
      styles.backgroundImage = `url('${backgroundImage}')`
    }
    return (
      <div style={styles} id="background"/>
    )
  }
}

Background.propTypes = {
  settings: PropTypes.instanceOf(Immutable.Map),
  topOffset: PropTypes.number,
  rightOffset: PropTypes.number,
  bottomOffset: PropTypes.number,
  leftOffset: PropTypes.number
}



export default Background
