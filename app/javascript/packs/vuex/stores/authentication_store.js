import { Credentials, STORAGE_KEY } from '../../lib/authentication';

const AuthenticationStore = {
  namespaced: true,
  state: new Credentials({}),
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
      const fromLocal = Credentials.getCredentialsFromStore();
      const fromSearch = Credentials.getCredentialsFromUrl();
      let credentials = null;

      if (fromLocal && fromSearch) {
        credentials = fromLocal.getNewest(fromSearch);
      } else {
        credentials = fromLocal || fromSearch;
      }

      if (credentials) {
        commit('setCredentials', credentials);
      } else if (fromLocal !== null && fromLocal !== undefined) {
        dispatch('clearCredentials');
      }
    },
    saveCredentials({ state }) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.toStoreHash()));
      dispatch('setAuthHeaders');
      dispatch('saveCredentials');
    },
    clearCredentials() {
      localStorage.removeItem(Credentials.STORAGE_KEY);
    },
    setAuthHeaders({ state }) {
      Object.assign(this._vm.axios.defaults.headers.common, state.toAxiosHash());
    }
  }
};

export default AuthenticationStore;
