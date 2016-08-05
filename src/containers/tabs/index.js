import _ from 'lodash'

import History from './history'
import Mail from './mail'
import Home from './home'
import Options from './options'

let tabs = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'History',
    component: History
  },
  {
    name: 'Mail',
    component: Mail
  },
  {
    name: 'Options',
    component: Options
  }
]

export default tabs.map(
  (tab, index) => _.merge(tab, {id: index})
)
