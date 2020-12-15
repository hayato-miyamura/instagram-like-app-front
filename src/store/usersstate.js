import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../plugins/firebase'

export const strict = false

Vue.use(Vuex)

export const state = () => ({
  isSignedIn: false,
})

export const getters = {
  isAuthenticated: (state) => !!state.isSignedIn,
}

export const mutations = {
  setSignInState(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  },
}

export const actions = {
  async signIn({ commit }) {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      // await firebase.auth().signInWithPopup(provider).then(function (result) {
      //   commit("setSignInState", true)
      // }).catch(function (error) {
      //   console.error(error)
      // })
      firebase.auth().signInWithRedirect(provider)
      // commit("setSignInState", true)
    } catch (error) {
      console.error(error)
    }
  },
  signOut({ commit }) {
    commit('setSignInState', false)
  },
  setTrueSignInState({ commit }) {
    commit('setSignInState', true)
  },
}
