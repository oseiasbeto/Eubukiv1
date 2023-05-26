<template>
  <div ref="contextMenu" class="context-menu">
    <div
      v-if="showMenu"
      ref="menu"
      class="menu"
      tabindex="-1"
      :style="{ top: top, left: left }"
      @blur="closeMenu"
      @click="closeMenu"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      showMenu: false,
      top: "0px",
      left: "0px",
    };
  },
  computed: {},
  methods: {
    setMenu(top, left) {
      let largestHeight = window.innerHeight - this.$refs.menu.offsetHeight;
      let largestWidth = window.innerWidth - this.$refs.menu.offsetWidth - 25;
      if (top > largestHeight) top = largestHeight;
      if (left > largestWidth) left = largestWidth;
      this.top = top + "px";
      this.left = left + "px";
    },

    closeMenu() {
      this.showMenu = false;
      if (this.$parent.closeMenu !== undefined) {
        this.$parent.closeMenu();
      }
    },

    openMenu(e) {
      this.showMenu = true;
      this.$nextTick(
        function () {
          this.$refs.menu.focus();
          this.setMenu(e.y, e.x);
        }.bind(this)
      );
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.context-menu {
  width: 100%;
  height: 100%;
  user-select: none;
}

.menu {
  position: fixed;
  min-width: 136px;
  max-width: 240px;
  list-style: none;
  background: var(--box-background);
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px;
  z-index: 1000;
  -webkit-app-region: no-drag;
  outline: none;
}

.menu .item {
  font-weight: 600;
  font-size: 13px;
  padding: 10px 14px;
  border-radius: 4px;
  cursor: default;
  color: var(--color-text);
  display: flex;
  align-items: center;
}
.item.danger {
  background-color: #f7e9ea;
  color: #ef5466;
}

.item:hover {
  cursor: pointer;
  color: var(--color-link);
  background: rgba(206, 236, 223, 0.219);
  transition: opacity 125ms ease-out, transform 125ms ease-out;
}
.item.danger:hover {
  background-color: #f7e9ea;
  color: #ef5466;
}
.item:active {
  opacity: 0.75;
  transform: scale(0.95);
}

hr {
  margin: 4px 10px;
  background: rgba(128, 128, 128, 0.18);
  height: 1px;
  box-shadow: none;
  border: none;
}

.item-info {
  padding: 10px 10px;
  display: flex;
  align-items: center;
  color: var(--color-text);
  cursor: default;
}
.item-info img {
  height: 38px;
  width: 38px;
  border-radius: 4px;
}
.item-info .info {
  margin-left: 10px;
}
.item-info .title {
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
.item-info .subtitle {
  font-size: 12px;
  opacity: 0.68;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  word-break: break-all;
}
</style>
