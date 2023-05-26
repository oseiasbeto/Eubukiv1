<template>
  <div class="loading">
    <div class="loading-body">
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="spinner-content">
          <div class="spinner"></div>
          <div
            style="
              font-weight: 600;
              margin-left: 20px;
              color: var(--color-active);
            "
          >
            A carregar...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingApp",
};
</script>

<style scoped>
.loading {
  background: transparent;
  top: 65px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  z-index: 111111;
  height: 100%;
  height: 100%;
}
.loading-body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 116px;
  background: transparent;
  padding: 0 16px;
  margin-top: 65px;
}
.loading .spinner-content {
  top: 39%;
  left: 84%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  padding: 20px;
  border-radius: 5px;
  width: 402px;
}
.loading .spinner {
  width: 26px;
  height: 26px;
  border-width: 4px;
  border-style: solid;
  border-color: var(--color-primary) transparent transparent
    var(--color-primary);
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