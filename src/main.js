// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
