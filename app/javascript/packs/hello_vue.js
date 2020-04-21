/* eslint no-console: 0 */

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'

Vue.use(TurbolinksAdapter)
Vue.use(VueMaterial)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#vue-app-container',
    components: { App }
  })
})
