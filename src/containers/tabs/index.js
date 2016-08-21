import _ from 'lodash'

import Bookmarks from './bookmarks'
import Home from './home'
import Settings from './settings'

let tabs = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    name: 'Settings',
    component: Settings
  }
]

export default tabs.map(
  (tab, index) => _.merge(tab, {id: index})
)
