import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import user from '@/components/user'
import head from '@/components/head'
import foot from '@/components/foot'
import user_index from '@/components/user_index'
import home from '@/components/home'
import character from '@/components/character'
import view from '@/components/view'
import life from '@/components/life'
import others from '@/components/others'
import CoolStory from '@/components/CoolStory'
import AmazingTime from '@/components/AmazingTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/head',
      name: 'head',
      component: head
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/user_index',
      name: 'user_index',
      component: user_index,
      children:[
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/CoolStory',
          name: 'CoolStory',
          component: CoolStory
        },
        {
          path: '/AmazingTime',
          name: 'AmazingTime',
          component: AmazingTime
        },
        {
          path: '/character',
          name: 'character',
          component: character
        },
        {
          path: '/view',
          name: 'view',
          component: view
        },
        {
          path: '/life',
          name: 'life',
          component: life
        },
        {
          path: '/others',
          name: 'others',
          component: others
        }
      ]
    }
  ]
})
