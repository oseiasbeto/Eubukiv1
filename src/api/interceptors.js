import store from "../store";

export default () => {
    return ({ status }) => {
        if (status == 403) {
            store.dispatch("actionSetIsExpiredSubscription", true)
            window._Vue.$router.push("/upgrade")
        } else {
            store.dispatch("actionSetIsExpiredSubscription", false)
        }
    }
}
