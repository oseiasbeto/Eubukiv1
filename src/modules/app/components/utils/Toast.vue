<template>
  <transition name="fade">
    <div v-show="toast.show" class="toast">{{ toast.text }}</div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Toast',
  computed: {
    ...mapState(['toast']),
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #fff;
  background: var(--color-primary);
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-weight: bolder;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 6px 12px;
  z-index: 1010;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
