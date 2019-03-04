import Vue from 'vue'
import Vuex from 'vuex'
import flight from './flight'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        flight
    }
})