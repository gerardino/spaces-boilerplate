import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import SpaceStore from './stores/space_store';
import SpacesStore from './stores/spaces_store';
import AuthenticationStore from './stores/authentication_store';
import UserStore from './stores/user_store';

const store = new Vuex.Store({
  modules: {
    auth: AuthenticationStore,
    user: UserStore,
    spaces: SpacesStore,
    space: SpaceStore
  }
});

export default store;
