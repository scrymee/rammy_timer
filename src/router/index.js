import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GameTimer from '@/components/GameTimer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameTimer',
      component: GameTimer
    }
  ]
})
