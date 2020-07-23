import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import api from './api/api.js'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api = api 
App.mpType = 'app'
Vue.use(uView)
const app = new Vue({
	store,
	...App
})
app.$mount()
