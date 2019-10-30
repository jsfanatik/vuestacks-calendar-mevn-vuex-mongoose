import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    setEvents: (state, events) => {
      state.events = events
    }
  },
  actions: {
    loadEvents: async context => {
      let uri = 'http://localhost:4000/events';
      const response = await axios.get(uri)
      context.commit('setEvents', response.data)
    }
  },
})
