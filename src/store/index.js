import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    User: {},
    modals: {
        name: "",
        title: "",
        id: "",
        context: "",
        show: false
    },
    books: {},
    sidebar: false,
    mybooks: [],
    book: {},
    toast: {
        show: false,
        text: "",
        timer: 0
    },
    todayBookmarks: [],
    token: localStorage.getItem("access_token") || null,
}

const store = new Vuex.Store({
    state,
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setUser(state, payload) {
            state.User = payload
        },
        setNewMessage(state, payload) {
            state.newMessage = payload
        },
        setReciveChat(state, payload) {
            state.reciveChat = payload
        },
        setBooks(state, payload) {
            state.books = payload
        },
        setMyBooks(state, payload) {
            state.mybooks = payload
        },
        setBook(state, payload) {
            state.book = payload
        },
        setTodayBookmarks(state, payload) {
            state.todayBookmarks = payload
        },
        setModals(state, payload) {
            state.modals = payload
        },
        updateToast(state, toast) {
            state.toast = toast;
        },
        setSidebar(state, payload) {
            state.sidebar = payload;
        },
    },
    actions: {
        actionSetToken(context, token) {
            context.commit("setToken", token)
        },
        actionSetUser(context, User) {
            context.commit("setUser", User)
        },
        actionSetSidebar(context, User) {
            context.commit("setSidebar", User)
        },
        actionSetBooks(context, payload) {
            context.commit("setBooks", payload)
        },
        actionSetMyBooks(context, payload) {
            context.commit("setMyBooks", payload)
        },
        actionSetBook(context, payload) {
            context.commit("setBook", payload)
        },
        actionSetTodayBookmarks(context, payload) {
            context.commit("setTodayBookmarks", payload)
        },
        actionsSetModals(context, payload) {
            context.commit("setModals", payload)
        },
        showToast({ state, commit }, text) {
            if (state.toast.timer !== null) {
                clearTimeout(state.toast.timer);
                commit('updateToast', { show: false, text: '', timer: null });
            }
            commit('updateToast', {
                show: true,
                text,
                timer: setTimeout(() => {
                    commit('updateToast', {
                        show: false,
                        text: state.toast.text,
                        timer: null,
                    });
                }, 3200),
            });
        },
    },
})

export default store