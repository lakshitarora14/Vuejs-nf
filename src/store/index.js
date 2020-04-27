import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Who's watching?",
    profiles: [
      {
        name: "Children",
        image: require('../assets/childrenLogo.png')
      },
      {
        name: "Lakshit 4",
        image: require("../assets/profile2.png")
      },
      {
        name: "Lakshit 3",
        image: require("../assets/profile3.png")
      },
      {
        name: "Lakshit 2",
        image: require("../assets/profile4.png")
      },
      {
        name: "Lakshit 1",
        image: require("../assets/profile1.png")
      }]
  },
  getters:{
    countNoOfProfiles: state => {
      return state.profiles.length
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
