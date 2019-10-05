import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/signup'
import login from '../components/Login'
import FullSignUp from '../components/fullSignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    { 
      path: '/', 
      component: Home
    },

    {
      path: '/login',
      component: login,
      props: (route) => ({ name: route.query.name })
    },

    {
      path: '/signup',
      component: FullSignUp,
      props: (route) => ({ name: route.query.name })
    }
  ]
})
