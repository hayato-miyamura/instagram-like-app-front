<template>
  <v-form>
    <v-container>
      <!-- <v-text-field label="MailAddress" v-model="mail"></v-text-field>
      <v-text-field label="Password" v-model="pass"></v-text-field> -->
      <!-- <v-btn color="primary" @click="login">ログイン</v-btn> -->
      <!-- <v-btn color="primary" v-if="signedInOrSignedOut" @click="signOut">ログアウト</v-btn> -->
      <v-btn @click="signIn">signIn</v-btn>
      <!-- <p>{{ isAuthenticated }}</p> -->
      <p>isAuthenticated: {{ isAuthenticated }}</p>
      <!-- <v-btn color="primary" @click="googleLogin">Googleログイン</v-btn> -->
      <p>
        <!-- <v-btn @click="signIn">signIn</v-btn> -->
        <!-- <v-btn @click="signOut">signOut</v-btn> -->
      </p>
      <div>
        <!-- {{ signedInOrSignedOut.name }} -->
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'
import firebase from '../plugins/firebase'

export default {
  // async mounted() {
  //   try {
  //     const { user } = await firebase.auth().getRedirectResult()
  //     if (user) {
  //       const idToken = await user.getIdToken(true)
  //       await this.$axios.post('/api/auth', { idToken })
  //       // ログイン後トップページに遷移させる↓しかしログインページが一瞬表示される現象あり。
  //       // this.$router.push('/');
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  // methods: {
  //   googleLogin() {
  //     const provider = new firebase.auth.GoogleAuthProvider()

  // asyncData () {
  //   return {
  //     isAuth: false,
  //   }
  // },
  // mounted: function () {
  //   firebase.auth().onAuthStateChanged((user) => this.isAuth = !!user)
  // },

  // computed: {
  //   signedInOrSignedOut() {
  //     return this.$store.getters.user
  //   },
  // },
  async mounted() {
    // firebase.auth().onAuthStateChanged(user => {
    //   let currentUser = firebase.auth().currentUser;

    //   if (currentUser) {
    //     // store.commit("setSignInState", true);
    //     // this.$store.dispatch("setSignInState", true);
    //     redirect('/');

    //   }

    // })
    const user = await firebase.auth().getRedirectResult()
    if (user) {
      this.setTrueSignInState()
    }
  },
  methods: {
    ...mapActions('usersstate', ['signIn']),
    ...mapActions('usersstate', ['setTrueSignInState']),
  },
  computed: {
    ...mapGetters('usersstate', ['isAuthenticated']),
    // isAuthenticated () {
    //   return this.$store.getters.isAuthenticated
    // }
  },
}
</script>
