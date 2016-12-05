import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
import SignIn from './components/SignIn'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: SignIn }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()

      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })

    return
  }

  next()
})

export default router
