<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
        <mypage />
      </div>
      <v-card>
        <v-card-title class="headline">
          {{ data }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import { Vue, Component } from 'vue-property-decorator'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

// @Component({
//   components: {
//     Logo,
//     VuetifyLogo
//   }
// })
// export default class IndexPage extends Vue {}

import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Mypage from '~/components/Mypage.vue'

export default Vue.extend({
  components: {
    Logo,
    Mypage,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/posts')
    return { data }
  },
})
</script>
