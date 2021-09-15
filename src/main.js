import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router/index"
import moment from 'moment'
import './assets/style.scss'

Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')