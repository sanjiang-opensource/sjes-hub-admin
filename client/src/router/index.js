import Vue from 'vue'
import Router from 'vue-router'
import LoadingBar from 'iview/src/components/loading-bar'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(() => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
