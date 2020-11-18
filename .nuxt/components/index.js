export { default as Logo } from '../../src/components/Logo.vue'
export { default as VuetifyLogo } from '../../src/components/VuetifyLogo.vue'

export const LazyLogo = import('../../src/components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../src/components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
