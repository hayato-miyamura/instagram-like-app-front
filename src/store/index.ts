import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../plugins/firebase'
import usersstate from './modules/usersstate'

const store = () => new Vuex.Store({
  modules: {
    usersstate,
  }
})

export default store
