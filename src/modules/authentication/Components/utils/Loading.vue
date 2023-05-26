<template>
  <div class="loading">
    <div class="uploading">
      <div class="spinner-content">
        <div class="spinner"></div>
      </div>
      <div style="font-weight: 600">A carregar...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading {
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  z-index: 111111;
  height: 100%;
  height: 100%;
}
.uploading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 116px;
  background: #fff;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%) !important;
  padding: 0 16px;
}
.loading .spinner-content {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
  border-radius: 5px;
}
.loading .spinner {
  width: 40px;
  height: 40px;
  border-width: 4px;
  border-style: solid;
  border-color: var(--color-primary) transparent transparent var(--color-primary);
  border-image: initial;
  border-radius: 30px;
  animation: pace-spinner 0.7s linear 0s infinite normal none running;
  display: block !important;
  overflow: visible !important;
}
@-webkit-keyframes pace-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>