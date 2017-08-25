import Vue from 'vue'
import VueRouter from 'vue-router'
var $ = require("jquery");

Vue.use(VueRouter);

import App from './App.vue'
import about from './vues/about.vue'
require('bootstrap');

new Vue({
  el: '#app',
  render: h => h(App)
})
