import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchSettings } from 'actions/settingsActions'

class Settings extends Component{
  render() {
    return (
      <div className="settings">
        <div className="container-fluid">
          Settings
        </div>
      </div>
    )
  }

  componentWillReceiveProps(props) {
    console.log(props)
  }

  componentWillMount() {
    this.props.fetchSettings()
  }
}

Settings.propTypes = {
  settings: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    settings: state.getIn(['settings', 'settings'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSettings: () => {
      dispatch(fetchSettings())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
