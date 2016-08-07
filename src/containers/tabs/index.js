import _ from 'lodash'

import Bookmarks from './bookmarks'
import Mail from './mail'
import Home from './home'
import Options from './options'

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
