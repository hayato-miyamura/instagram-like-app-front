import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60140706 = () => interopDefault(import('../src/pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _dec58dd6 = () => interopDefault(import('../src/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7214d404 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _60140706,
    name: "inspire"
  }, {
    path: "/login",
    component: _dec58dd6,
    name: "login"
  }, {
    path: "/",
    component: _7214d404,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
