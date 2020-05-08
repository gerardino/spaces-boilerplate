import axios from 'axios'

const SpaceStore = {
  namespaced: true,
  state: {
    current: {}
  },
  getters: {
    current: state => state.current
  },
  mutations: {
    set(state, { space }) {
      state.current = space
    },
    clear(state) {
      state.current = null
      return state
    }
  },
  actions: {
    delete(context) { },
    update(context, { space }) { 
      return axios.patch(`space.json`, space)
        .then(() => {
          context.commit('set', { space });
        });
     },
    create(context, { space }) { 
      return axios.post(`space.json`, space)
        .then(() => {
          context.commit('set', { space });
        });
    },
    get(context, id) {
      return axios.get(`space/${id}.json`)
        .then(data => {
          context.commit('set', { space: data });
        });
    },
  }
};

export default SpaceStore;
