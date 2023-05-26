<template>
<i class="material-icons">
  {{icon}}
</i>
</template>

<script>
export default {
  name: "MaterialIcons",
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