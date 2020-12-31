import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../../plugins/firebase'
// import nuxtClientInit from 'nuxt-client-init-module'

export const strict = false

const namespaced = true

Vue.use(Vuex)

const state = () => ({
  isSignedIn: false,
})

// anyは後ほど型を修正。
const getters = {
  isAuthenticated: (state: any) => state.isSignedIn,
}

const mutations = {
  setSignInState(state: any, isSignedIn: any) {
    state.isSignedIn = isSignedIn
  },
}

const actions = {
  async signIn({ commit }: { commit: any; }) {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithRedirect(provider)

    } catch (error) {
      console.log(error)
    }
  },
  signOut({ commit }: { commit: any; }) {
    firebase.auth().signOut().then(() => {
      commit('setSignInState', false);
    })
    .catch( (error) => {
      console.log(error)
    })
  },
  setTrueSignInState({ commit }: { commit: any; }) {
    commit('setSignInState', true)
  },
}

export default {
  state,
  namespaced,
  getters,
  mutations,
  actions
}
