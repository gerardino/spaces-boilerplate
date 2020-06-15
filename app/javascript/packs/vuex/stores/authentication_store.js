import { Credentials } from '../../lib/authentication';

const AuthenticationStore = {
  namespaced: true,
  state: new Credentials({}),
  getters: {
    token: state => state.token
  },
  mutations: {
    setCredentials(state, newCredentials) {
      state.token = newCredentials.token;
      state.client = newCredentials.client;
      state.expiry = newCredentials.expiry;
      state.uid = newCredentials.uid;


    },
    resetToken(state) {
      state.token = state.client = state.expiry = state.uid = null;
    }
  },
  actions: {
    loadCredentials({ commit, dispatch }) {
      const credentials = Credentials.getAuthenticationCredentials();

      if (credentials) {
        commit('setCredentials', credentials);
        dispatch('setAuthenticationHeaders');
      } else {
        window.location = '/';
      }
    },
    setAuthenticationHeaders({ state }) {
      this._vm.axios.defaults.headers.common["access-token"] = state.token;
      this._vm.axios.defaults.headers.common["client"] = state.client;
      this._vm.axios.defaults.headers.common["expiry"] = state.expiry;
      this._vm.axios.defaults.headers.common["uid"] = state.uid;
    }
  }
};

export default AuthenticationStore;
