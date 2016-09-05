require('assets/styles/index.js')
import Immutable from 'immutable'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from 'store'
import MainContainer from 'containers/mainContainer'

const initialState = Immutable.Map()
const store = configureStore(initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}

ReactDOM.render(
  (<App/>),
  document.getElementById('main')
)
