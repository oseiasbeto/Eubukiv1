import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
router.beforeEach(beforeEach)

export default router