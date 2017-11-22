import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/dashboard'
import addTask from '@/views/addTask'
import welcome from '@/views/welcome'
import userBoard from '@/views/userboard'
import materialsboard from '@/views/materialsboard'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    {
      path: '/',
      component: welcome,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/userBoard',
      name: 'userBoard',
      component: userBoard
    },{
      path:'/materials',
      name: 'materials',
      component: materialsboard
    }
  ]
})