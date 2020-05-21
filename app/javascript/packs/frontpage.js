/* eslint no-console:0 */

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'initializers/turbolinks.js'

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from './frontpage.vue'
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
