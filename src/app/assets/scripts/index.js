import './config'
import Vue from 'Vue'
import App from '~/app.vue'

document.addEventListener('DOMContentLoaded', event => {
  return new Vue({
    el: '#mainApp',
    render: h => h(App)
  })
})
