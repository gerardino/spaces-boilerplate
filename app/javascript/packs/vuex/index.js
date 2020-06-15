import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import SpaceStore from './stores/space_store';
import SpacesStore from './stores/spaces_store';
import AuthenticationStore from './stores/authentication_store';

const store = new Vuex.Store({
  modules: {
    auth: AuthenticationStore,
    spaces: SpacesStore,
    space: SpaceStore
  }
});

export default store;
