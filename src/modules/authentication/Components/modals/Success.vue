<template>
  <div class="shade" @click="close">
    <div class="modal" @click.stop>
      <div class="body">
        <article>
          <p style="font-size: 13px">
            {{ success.message }}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
//import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "logout",
  data() {
    return {};
  },
  props: {
    success: Object,
  },
  computed: {
    ...mapState(["User", "optionComment", "feed"]),
  },
  created() {},
  methods: {
    close() {
      this.$emit("closemodal");
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
  width: 15rem !important;
  background-color: #57B657 !important;
  font-size: 6px;
  z-index: 1110 !important;
  display: flex;
  color: #fff;
  flex-direction: column;
  font-weight: 600;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 15px;
  border-radius: 8px;
}
.body {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2px;
}
.text-info {
  font-size: 18px;
  margin-bottom: 1rem;

  font-weight: 600;
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
  background-color: #f3a9a933;
  color: #fff !important;
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
  align-items: center;
  margin-top: 12px;
}
.btn.no {
  background: transparent !important;
  border: 2px solid var(--color-text);
  color: var(--color-text) !important;
}
</style>