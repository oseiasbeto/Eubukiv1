<template>
  <span v-if="unseen.length">{{unseen.length}}</span>
</template>


<script>
export default {
  props: ['unseen'],
};
</script>


<style scoped>
span {
    background-color: #fa3e3e;
    border-radius: 2px;
    color: #fff;
    padding: 1px 3px;
    font-size: 11px;
    position: absolute;
    top: -25%;
    left: 68%;
}
</style>

