import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from "./router/index"
import i18n from './i18n'
import moment from 'moment'
import './assets/style.scss'

Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  moment,
  i18n,
  render: h => h(App)
}).$mount('#app')