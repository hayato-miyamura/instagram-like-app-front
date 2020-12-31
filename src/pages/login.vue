<template>
  <v-form>
    <v-container>
      <div v-if="isLoading">
        <p>Now Loading...</p>
      </div>
      <div v-else>
        <v-btn v-if="!isAuthenticated" @click="signIn">signIn</v-btn>
        <v-btn v-if="isAuthenticated" @click="signOut">signOut</v-btn>
        <p>isAuthenticated: {{ isAuthenticated }}</p>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapGetters, mapActions } from 'vuex'
import firebase from '../plugins/firebase'
import cookie from 'js-cookie'
import axios from 'axios'


export default Vue.extend({

  data() {
    return {
      isLoading: false
    }
  },

  async mounted() {
    try {
      const { user } = await firebase.auth().getRedirectResult();
      if (user) {
        this.isLoading = true;
        const idToken = await user.getIdToken(true);

        await this.$axios.post('/api/auth', { idToken });
        await this.setTrueSignInState();

        this.$router.push('/');
      }
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    ...mapActions('usersstate', ['signIn']),
    ...mapActions('usersstate', ['signOut']),
    ...mapActions('usersstate', ['setTrueSignInState']),
  },
  computed: {
    ...mapGetters('usersstate', ['isAuthenticated']),
  },
})
</script>
