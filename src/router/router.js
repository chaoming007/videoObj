import LiveList from '@/views/live/List'
import LogList from '@/views/log/List'
import RecommendList from '@/views/recommend/List'
import UserList from '@/views/user/List'
const routes = [
  {
    path: '/',
    name: 'liveList',
    component: LiveList
  }, {
    path: '/log/list',
    name: 'logList',
    component: LogList
  }, {
    path: '/recommend/list',
    name: 'recommendList',
    component: RecommendList
  }, {
    path: '/user/list',
    name: 'userlist',
    component: UserList
  }
]

export default routes
