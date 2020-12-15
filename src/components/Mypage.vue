<template>
  <div class="mypage">
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import Vue from 'vue'
import firebase from '../plugins/firebase'

export default {
  name: 'Mypage',
  methods: {
    logout() {
      firebase.auth().signOut()
    },
  },
}
</script>
