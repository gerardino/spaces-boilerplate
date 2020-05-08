import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import SpaceStore from './stores/space_store';
import SpacesStore from './stores/spaces_store';

const store = new Vuex.Store({
  modules: {
    spaces: SpacesStore,
    space: SpaceStore
  }
});

export default store;
