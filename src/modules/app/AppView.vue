<template>
  <div class="oikamba-wrld">
    <navbar />
    <main class="mpls">
      <sidebar />
      <div class="content">
        <div v-if="this.$route.path == '/dashboard'" class="pix">
          <p>O Eubuki ainda está em fase de testes</p>
        </div>
        <library v-if="this.$route.name == 'Bibilioteca'" />
        <Favorites v-if="this.$route.name == 'Favoritos'" />
        <dashboard v-if="this.$route.path == '/dashboard'" />
        <my-contents v-if="this.$route.path == '/mycontents'" />
        <new-content v-if="this.$route.path == '/newcontent'" />
        <MyAccount v-if="this.$route.path == '/myaccount'" />
        <view-book
          v-if="this.$route.path == `/book/${this.$route.params.id}`"
        />
      </div>
    </main>
    <toast />
    <edit-book v-if="modals.name == 'editbook'" />
    <more-info-book v-if="modals.name == 'moreinfobook'" />
    <screen v-if="modals.name == 'screen'" />
  </div>
</template>

<script>
import { api } from "@/api";
import { mapState } from "vuex";
import EditBook from "./components/modals/EditBook.vue";
import MoreInfoBook from "./components/modals/MoreInfoBook.vue";
import ViewBook from "./views/ViewBook.vue";
import Navbar from "./components/theme/Navbar.vue";
import Sidebar from "./components/theme/Sidebar.vue";
import Toast from "./components/utils/Toast.vue";
import Library from "./views/Library.vue";
import Favorites from "./views/Favorites.vue";
import MyContents from "./views/MyContents.vue";
import NewContent from "./views/NewContent.vue";
import MyAccount from "./views/MyAccount.vue";
import Dashboard from './views/Dashboard.vue';
import Screen from './components/modals/Screen.vue';

export default {
  name: "AppView",
  components: {
    Navbar,
    Sidebar,
    Library,
    MyContents,
    NewContent,
    Toast,
    EditBook,
    Favorites,
    MoreInfoBook,
    ViewBook,
    Dashboard,
    Screen,
    MyAccount
  },
  data() {
    return {
      currentTab: "feed",
      unseen: 0,
    };
  },
  created() {
    this.getCurrentUser();
  },
  computed: {
    ...mapState(["User", "modals"]),
  },
  methods: {
    async getCurrentUser() {
      const res = await api.get("users/current_user");
      const user = res.data.user;
      this.$store.dispatch("actionSetUser", user);
    },
  },
};
</script>

<style scoped>
.oikamba-wrld {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden !important;
  box-sizing: border-box;
}
.sidebars {
  display: flex;
  flex-direction: row;
}
main {
  position: relative;
  box-sizing: border-box;
}
.content {
  position: relative;
  padding: 16px 30px;
  box-sizing: border-box;
  width: calc(100% - 250px);
  margin-left: 250px;
  margin-top: 56px;
  margin-bottom: 38rem;
}
.navbar-c {
  display: flex;
  position: sticky;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 15px;
  align-items: center;
}
.navbar-x {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-item {
  position: relative;
  height: 36px;
  margin-right: 20px;
  font-size: 17px;
  font-weight: 500;
}
.border {
  position: absolute;
  width: 100%;
  height: 4px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  bottom: 0;
  background-color: var(--color-secundary);
}
.act {
  color: var(--color-secundary);
}
.users {
  width: 100%;
  box-sizing: border-box;
  display: block;
  background-color: #fff !important;
  border-bottom: 1px solid rgb(222, 224, 225);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
}
.user {
  position: relative;
}
.info {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  line-height: 0;
}
.info-user {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.info-user .username {
  font-weight: 700;
  font-size: 16px;
  color: var(--username-color);
  overflow-wrap: break-word;
}
.online {
  position: absolute;
  top: 34px;
  right: 12px;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  background: rgb(76, 175, 80);
  box-shadow: white 0px 0px 0px 2px;
}
.btn {
  position: relative;
  user-select: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  text-align: center;
  min-width: 64px;
  line-height: 30px;
  font-size: 13px;
  padding: 0px 16px;
  border-radius: 30px;
  background-color: var(--color-secundary);
  color: #fff !important;
  border: 1px solid #ff8622;
  transform: translate3d(0px, 0px, 0px);
  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) 0s,
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  box-shadow: none;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  width: 100%;
}
.hero {
  position: fixed;
  width: 100%;
  height: 500px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pix {
  position: absolute;
  left: 0;
  top: 0px;
  padding: 12px;
  width: 100%;
  height: 20px;
  font-size: 12px;
  background-color: var(--color-link);
  color: #fff;
}
@media (max-width: 414px) {
  .content {
    margin-left: 0px !important;
    width: 100%;
  }
}
</style>