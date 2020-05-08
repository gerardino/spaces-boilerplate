import axios from 'axios'

const SpacesStore = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    list: state => state.list
  },
  mutations: {
    add(state, {space}) {
      state.list.push(space);
      return state;
    },
    remove(state, { id }) {
      const index = state.list.find(s => s.id === id)
      if (index === -1) { return state }
      
      state.list.splice(index, 1)
      return state
    },
    resetTo(state, { list }) {
      state.list.length = 0;
      state.list = state.list.concat(list)
      return state;
    }
  },
  actions: {
    refresh(context, query) {
      return axios.get(`/spaces.json`)
        .then(data => {
          context.commit('resetTo', {list: data.data})
        })
    },
  }
};

export default SpacesStore;
