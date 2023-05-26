<template>
  <div class="shade" @click="cancelar">
    <div class="body">
      <object class="viewpdf" :data="book.book" type="application/pdf"></object>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Screen",
  data() {
    return {};
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(["book"]),
  },
  created() {
    this.getBook();
  },
  methods: {
    cancelar() {
      this.$store.dispatch("actionsSetModals", {
        name: "",
        title: "",
        context: "",
        id: "",
      });
    },
  },
};
</script>
<style scoped>
.shade {
  background: rgba(0, 0, 0, 0.38);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 1000111;
  padding: 0 30px;
  box-sizing: border-box;
}
.modal {
  position: relative;
  width: 600px !important;
  min-height: 120px;
  max-height: 600px;
  background-color: var(--modal-background) !important;
  font-size: 14px;
  z-index: 1110 !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  border-radius: 8px;
}
.header {
  padding: 12px 16px;
  border-bottom: 1px solid rgb(0 0 0 / 12%);
}
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  padding: 12px 16px;
  border-top: 1px solid rgb(0 0 0 / 12%);
}
.body {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: scroll;
  padding: 16px;
}
.modal-title {
  font-size: 16px;
  font-weight: 600;
}

.btn {
  position: relative;
  user-select: none;
  text-decoration: none;
  text-align: center;
  min-width: 34px;
  line-height: 34px;
  font-size: 20px !important;
  padding: 0px 8px;
  background-color: transparent;
  color: var(--color-primary) !important;
  font-size: 14px;
  font-weight: 500;
}

.btn-option {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 35px;
  min-width: 35px;
  padding: 0px;
  height: 35px;
  margin: 0px 4px 10px;
  display: inline-block;
}
.btn-option svg {
  fill: var(--color-primary);
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.buttons button {
  padding: 8px 12px;
  background: rgba(165, 168, 172, 0.2);
  font-family: inherit;
  width: 50%;
  color: rgb(146, 146, 157);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
}
.buttons button.active {
  background-color: var(--color-primary);
  color: #fff;
  margin-right: 10px;
}

label {
  font-weight: 600;
  padding: 8px 0;
}
.field {
  margin-bottom: 14px;
}
.row {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
}
.viewpdf {
  width: 800px;
  height: 100%;
}
</style>