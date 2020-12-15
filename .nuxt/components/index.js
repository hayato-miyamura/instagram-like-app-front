export { default as Home } from '../../src/components/Home.vue'
export { default as Logo } from '../../src/components/Logo.vue'
export { default as Mypage } from '../../src/components/Mypage.vue'
export { default as VuetifyLogo } from '../../src/components/VuetifyLogo.vue'

export const LazyHome = import('../../src/components/Home.vue' /* webpackChunkName: "components/Home" */).then(c => c.default || c)
export const LazyLogo = import('../../src/components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMypage = import('../../src/components/Mypage.vue' /* webpackChunkName: "components/Mypage" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../src/components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
