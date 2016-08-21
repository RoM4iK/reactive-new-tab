import React, { Component, PropTypes } from 'react'
import moment from 'moment'

class Time extends Component{
  render() {
    let time = moment(this.props.time)
    return time && (
      <div className="time">
        <div className="day">{time.format('dddd')}</div>
        <div className="date">{time.format('Do MMMM, HH:mm')}</div>
      </div>
    )
  }


  createTimer() {
    this.timerTimeout = setTimeout(() => {
      this.timerTimeout = undefined
      this.timer = setInterval(this.updateTime.bind(this), 60000)
      this.updateTime()
    }, this.timeToNextMinute())
  }

  destroyTimer() {
    if (this.timerTimeout) {
      clearTimeout(this.timerTimeout)
    }
    else {
      clearInterval(this.timer)
    }
  }

  timeToNextMinute() {
    let seconds = 60 - moment().seconds()
    return seconds * 1000
  }

  updateTime() {
    this.props.updateTime(new Date)
  }

  componentWillMount() {
    this.createTimer()
    this.updateTime()
  }

  componentWillUnmount() {
    this.destroyTimer()
  }
}


Time.propTypes = {
  time: PropTypes.instanceOf(Date),
  updateTime: PropTypes.func.isRequired
}

export default Time
