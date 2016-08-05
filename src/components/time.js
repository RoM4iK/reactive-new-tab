import React, { Component, PropTypes } from 'react'
import moment from 'moment'

class Time extends Component{
  render() {
    let time = moment(this.props.time)
    return time && (
      <div className="time">
        <div className="day">{time.format('dddd')}</div>
        <div className="date">{time.format('Do MMMM, hh:mm')}</div>
      </div>
    )
  }

  initializeTimer() {
    setTimeout(() => {
      setInterval(this.updateTime.bind(this), 60000)
      this.updateTime()
    }, this.timeToNextMinute())
  }

  timeToNextMinute() {
    let seconds = 60 - moment().seconds()
    return seconds * 1000
  }

  updateTime() {
    this.props.updateTime(new Date)
  }

  componentWillMount() {
    this.initializeTimer()
    this.updateTime()
  }
}


Time.propTypes = {
  time: PropTypes.instanceOf(Date),
  updateTime: PropTypes.func.isRequired
}

export default Time
