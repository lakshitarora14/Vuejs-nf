import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Who's watching?",
    profiles: [
      {
        name: "Children",
        image: "../assets/profileIcon1.png"
      },
      {
        name: "Lakshit 4",
        image: "../assets/profileIcon1.png"
      },
      {
        name: "Lakshit 3",
        image: "../assets/profileIcon1.png"
      },
      {
        name: "Lakshit 2",
        image: "../assets/profileIcon1.png"
      },
      {
        name: "Lakshit 1",
        url: "../assets/profileIcon1.png"
      }]
  },
  mutations: {},
  actions: {},
  modules: {}
})
