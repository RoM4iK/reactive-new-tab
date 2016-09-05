import React, { Component, PropTypes } from 'react'

// import sampleBg from 'assets/img/example-bg.jpg'

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
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number
}



export default Background
