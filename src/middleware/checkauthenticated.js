import Vuex from 'vuex'
import firebase from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
  const state = store.getters['usersstate/isAuthenticated']

  if (state == false) {
    // redirect('/login');
  }
}
