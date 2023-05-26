import store from "../store/"

export default async (to, from, next) => {
    if (to.name == "") {
        next({ path: "/dashboard" })
    } else document.title = `${to.name}`
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({ path: "/account/auth" })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({ path: "/dashboard" })
        } else {
            next()
        }
    }
}