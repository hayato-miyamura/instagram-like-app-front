import createPersistedState from 'vuex-persistedstate'

export default ({ store }: {store: any}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'state',

    })(store)
  })
}
