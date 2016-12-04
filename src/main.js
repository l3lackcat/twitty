// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '!style!css!bootstrap/dist/css/bootstrap.min.css'
import '!style!css!font-awesome/css/font-awesome.min.css'

import '!script!jquery/dist/jquery.min.js'
import '!script!bootstrap/dist/js/bootstrap.min.js'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
