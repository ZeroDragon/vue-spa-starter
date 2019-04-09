import './config'
import router from './router'
import Vue from 'vue'
import store from './store'

document.addEventListener('DOMContentLoaded', event => {
  return new Vue({
    el: '#mainApp',
    store,
    router
  })
})
