import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Error500 from './components/errors/500.vue';
import Error404 from './components/errors/404.vue';

import Spaces from './components/pages/Spaces.vue';
import Space from './components/pages/Space.vue';

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  // base: `${I18n.prefix}`,
  routes: [
    { path: '/', component: Spaces, name: 'spaces' },
    { path: '/spaces/:id', component: Space, name: 'space' },
    { path: '/500', component: Error500 },
    { path: '/404', component: Error404 },
    { path: '*', redirect: '/404' }
  ]
});

export default router;
