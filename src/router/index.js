import Vue from 'vue'
import VueRouter from 'vue-router'
import TopGame from '../views/TopGame.vue'
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import TopStream from "@/views/TopStream";
import StreamUser from "@/views/StreamUser";

library.add(fas)

Vue.use(VueRouter)

dom.watch()



const routes = [
  {
    path: '/',
    name: 'TopGame',
    component: TopGame
  },
  {
    path: '/topStream',
    name: 'TopStream',
    component: TopStream
  },
  {
    path: '/stream/:id',
    name: 'StreamerDetails',
    component: StreamUser
  }
]

const router = new VueRouter({
  routes
})

export default router
