<template>
  <div class="starting-loader">
    <div class="logo-brand logo">
      <img width="220px" src="@/assets/images/brand/eubuki.png">
    </div>
    <div class="spinner-content">
      <spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  components: {
    Spinner,
  },
  name: "StartApp",
};
</script>

<style scoped>
.starting-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.spinner-content {
  position: relative;
  box-sizing: border-box;
  margin-bottom: 4.3rem;
}
</style>