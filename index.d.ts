// import Vue from 'vue';
import Vue, { ComponentOptions } from "vue";


declare module "*.vue" {
  const _default: Vue
  export default _default
}

declare global {
  interface Window { onNuxtReady: any; }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    middleware?: string | string[];
  }
}
