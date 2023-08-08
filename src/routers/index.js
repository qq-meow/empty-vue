import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
import utils from '@/utils/utils'

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

router.afterEach((to) => {
    store.commit('updateTitle', to.query.title || to.meta.title || '')
})
router.beforeEach((to, from, next) => {
    if (to.meta.isLogin && (!utils.getStorage('token') || utils.getStorage('token') === 'undefined')) {
        // 根据路由meta标签，判断需要访问的页面是否需要登录
        // const urlHref = encodeURIComponent(window.location.href);
        // window.location.replace(
        //     `/?return_url=${urlHref}`,
        // );
        next()
    } else {
        next()
    }
})
export default router
