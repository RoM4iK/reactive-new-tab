import React, { Component, PropTypes } from 'react'

class Background extends Component{
  render() {
    let styles = {
      backgroundColor: this.props.backgroundColor,
      top: this.props.topOffset || 0,
      right: this.props.rightOffset || 0,
      bottom: this.props.bottomOffset || 0,
      left: this.props.leftOffset || 0,
    }
    return (
      <div style={styles} id="background"/>
    )
  }
}

Background.propTypes = {
  backgroundColor: PropTypes.string,
  topOffset: PropTypes.number,
  rightOffset: PropTypes.number,
  bottomOffset: PropTypes.number,
  leftOffset: PropTypes.number
}



export default Background
