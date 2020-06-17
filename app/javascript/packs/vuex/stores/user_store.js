function getInitialsFromName(name) {
  const initials = name.split(' ').map(s => s[0]).join('');

  return initials;
}

const UserStore = {
  namespaced: true,
  state: {
    email: null,
    image: null,
    initials: null,
    name: null
  },
  mutations: {
    setUser(state, { email, image, name }) {
      state.email = email;
      state.image = image;
      state.initials = getInitialsFromName(name);
      state.name = name;
    }
  },
  actions: {
    load({ commit }) {
      this._vm.axios.get('/user/current.json')
        .then(response => {
          commit('setUser', response.data);
        })
    }
  }
};

export default UserStore;
