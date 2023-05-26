<template>
  <div id="app">
    <start-app v-if="starting" />
    <router-view v-else />
  </div>
</template>
<script>
import StartApp from "./modules/app/components/theme/StartApp.vue";

export default {
  components: { StartApp },
  name: "App",
  data() {
    return {
      starting: true,
    };
  },
  async mounted() {
    if(localStorage.getItem("data-theme") != null) {
      document.body.setAttribute("data-theme", localStorage.getItem("data-theme"));
    }
    await new Promise((r) => setTimeout(r, 8000));
    this.starting = false;
  },
};
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  transition: all 0.4s;
}
.no_session {
  padding: 2rem 8px !important;
  overflow: auto !important;
}
</style>