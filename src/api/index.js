import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
const api = Vue.http

api.options.root = 'http://env-8570933.us1.buyucloud.net/'

api.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token")

export { api }