import React, { Component } from 'react'

import sampleBg from 'assets/img/example-bg.jpg'

export default class Background extends Component{
  render() {
    let styles = {
      backgroundImage: `url(${sampleBg})`,
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
