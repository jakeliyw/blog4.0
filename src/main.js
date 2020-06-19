import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import moment from 'moment'

Vue.prototype.$moment = moment
Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: '',
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
