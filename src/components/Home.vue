<template>
  <button @click="googleLogin">googleでログイン</button>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Home',
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
  },
}
</script>
