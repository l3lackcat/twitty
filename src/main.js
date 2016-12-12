// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!bootstrap/dist/js/bootstrap.min.js'

import '!style!css!bootstrap/dist/css/bootstrap.min.css'
import '!style!css!font-awesome/css/font-awesome.min.css'

import App from './App'

firebase.initializeApp({
  apiKey: 'AIzaSyAXv2xXpOo2vL_OoRZcsS158Z-YbyJUwXk',
  authDomain: 'vuejs-twitty.firebaseapp.com',
  databaseURL: 'https://vuejs-twitty.firebaseio.com',
  storageBucket: 'vuejs-twitty.appspot.com',
  messagingSenderId: '591437503528'
})

const ticker = new Vue({
  data () {
    return {
      tick: 0
    }
  },
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
