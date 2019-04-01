import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'user',
      component: user
    }
  ]
})
