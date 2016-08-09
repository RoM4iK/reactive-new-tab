import _ from 'lodash'

import Bookmarks from './bookmarks'
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
  // {
  //   name: 'Options',
  //   component: Options
  // }
]

export default tabs.map(
  (tab, index) => _.merge(tab, {id: index})
)
