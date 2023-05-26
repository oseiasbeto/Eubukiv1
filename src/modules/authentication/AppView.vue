<template>
  <div class="iddude-auth">
    <Auth v-if="this.$route.path == '/account/auth'" />
    <Signup v-if="this.$route.path == '/account/signup'"/>
  </div>
</template>

<script>
import Auth from "./Views/Auth.vue";
import Signup from './Views/Signup.vue';
export default {
  components: { Auth, Signup },
  name: "AppView",
};
</script>

<style scoped>
.iddude-auth {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-body-bg);
}
</style>