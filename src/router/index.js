import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Incident from "../components/Incident.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
},
{
    path: '/incident',
    component: Incident
},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router