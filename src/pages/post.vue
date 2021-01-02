<template>
<v-row justify="center" align="center">
  <v-col cols="12" sm="8" md="6">
    <p>
      post page
    </p>
    <v-card>
      <v-file-input @change="getImage"></v-file-input>
      <v-text-field label="Text" @change="getText" outlined></v-text-field>
      <v-card-actions>
        <v-btn color="accent" elevation="10" @click="submit">投稿する</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: {
    image: null,
    text: '',
  },
  methods: {
    getImage(e) {
      this.image = e;
    },
    getText(e) {
      this.text = e;
    },
    async submit() {
      if (this.image) {
        const image = this.image;
        const text = this.text;
        let formData = new FormData();

        await formData.append('image', image);
        await formData.append('text', text);

        const posts = await this.$axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // console.log(formData.get('text'));
        // console.log(formData.get('image'));
      }
    }
  }
})
</script>
