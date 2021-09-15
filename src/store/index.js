import Vue from 'vue'
import Vuex from 'vuex'

// Module importieren
import injury from './modules/injury';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    injury
  }
})
