<template>
<i :class="`fa fa-${icon}`"></i>
</template>

<script>
export default {
  name: "Fontawesome",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },

};
</script>

<style scoped>
.material-icons {
  color: var(--color-text);
}
</style>