import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { updateTime } from 'actions/homeActions'
import { Time } from 'components'


class Home extends Component{
  render() {
    let { time, updateTime } = this.props
    return (
      <div className="home">
          { <Time time={time} updateTime={updateTime} /> }
      </div>
    )
  }
}

Home.propTypes = {
  time: PropTypes.instanceOf(Date),
  updateTime: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  let time = state.getIn(['home', 'time'])
  return {
    time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTime: (time) => {
      dispatch(updateTime(time))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
