/*
 * @Author: 王亮
 * @Date: 2019-01-17 18:06:34
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-19 15:32:21
 * @Description: 静态数据配置
 */

export default {
  header: [{
    title: '直播管理',
    lnk: '/',
    icon: ['fab', 'line']
  }, {
    title: '删除日志',
    lnk: '/log/list',
    icon: ['far', 'trash-alt']
  }, {
    title: '推荐管理',
    lnk: '/recommend/list',
    icon: ['fas', 'glass-martini']
  }, {
    title: '用户管理',
    lnk: '/user/list',
    icon: ['fas', 'user']
  }],
  // 临时token
  token: {
    jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0cnVlTmFtZSI6IueOi-S6rijliY3nq6_nu4QpIiwic3ViIjoid2FuZ2xpYW5nNSIsImlzcyI6Im9wLXVjLWp3dCIsIm5hbWUiOiJ3YW5nbGlhbmc1IiwiZXhwIjoxNTQ3NzkyOTgxLCJpYXQiOjE1NDc3MDY1ODEsInVzZXJJZCI6MjE0Nn0.szHrLSsi0-7osQU4n8b07yoovH6T5E0yZR-dq4H9Xyo',
    user: {userName: 'wangliang5', trueName: '王亮(前端组)', userId: 2146}
  },
  nav: [{
    pathName: 'liveList',
    title: '直播列表'
  }, {
    pathName: 'liveList',
    title: '直播列表'
  }, {
    pathName: 'liveList',
    title: '直播列表'
  }, {
    pathName: 'liveList',
    title: '直播列表'
  }]
}
