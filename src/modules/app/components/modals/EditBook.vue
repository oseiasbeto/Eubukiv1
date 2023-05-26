<template>
  <div class="shade">
    <div class="modal" @click.stop>
      <div v-if="loading" class="loading">
        <div class="loading-body">
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
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
      <div class="header">Editar Produto</div>
      <div class="body">
        <div class="field">
          <label for="">Capa</label>
          <div class="file-area">
            <label for="cover" class="upload-image pointer">
              <img
                v-if="cover != '' || form.cover"
                :src="form.cover != '' ? form.cover : getImage(cover)"
                @load="loadImage"
                srcset=""
              />
              <div v-else class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 0 24 24"
                  width="60px"
                  fill="#1f1f1f96"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path
                    d="M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  ></path>
                </svg>
              </div>

              <input
                ref="cover"
                @change="selectImage"
                id="cover"
                accept="image/x-png, image/jpeg"
                type="file"
                style="display: none"
              />
            </label>
          </div>
        </div>
        <div class="field">
          <label>Titulo</label>
          <input v-model="form.title" max="50" type="text" />
        </div>

        <div class="field">
          <label>Categoria</label>
          <select v-model="form.category" style="width: 100%">
            <option value="Designer Gráfico">Designer Gráfico</option>
            <option value="Religioso">Religioso</option>
            <option value="Design">Design</option>
            <option value="Finanças">Finanças</option>
            <option value="Programação">Programação</option>
            <option value="Desenvolvimento web">Desenvolvimento web</option>
            <option value="Pintura">Pintura</option>
            <option value="Colinária">Colinária</option>
            <option value="Música">Música</option>
            <option value="Comédia">Comédia</option>
            <option value="Moda">Moda</option>
            <option value="Literatura">Literatura</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Romance">Romance</option>
            <option value="História">História</option>
          </select>
        </div>

        <div class="field">
          <label>Descrição</label>
          <textarea
            v-model="form.description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="field">
          <label>Tags</label>
          <input v-model="form.tags" type="text" />
        </div>
      </div>
      <div class="footer">
        <div class="buttons">
          <button
            style="margin-right: 10px; pointer-events: none"
            v-if="
              form.title == '' ||
              (cover == '' && form.cover == '') ||
              form.description == '' ||
              form.category == ''
            "
          >
            Actualizar
          </button>
          <button v-else @click="edit()" class="active">Actualizar</button>
          <button @click="cancelar()">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadImage, getImage } from "../../Plugins/ValidationFiles";
import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "EditBook",
  data() {
    return {
      form: {
        title: "",
        category: "",
        cover: "",
        createdAt: "",
        createdBy: "",
        description: "",
        tags: [],
      },
      loading: false,
      cover: "",
      loadImage,
      getImage,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(["User", "modals", "mybooks", "book"]),
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
    selectImage(e) {
      this.form.cover = "";
      const inputFile = e.target.files || this.$refs.cover;
      this.cover = inputFile[0];
    },
    async edit() {
      try {
        if (this.cover != "") {
          const formData = new FormData();
          formData.append("file", this.cover);
          formData.append("title", this.form.title);
          formData.append("category", this.form.category);
          formData.append("description", this.form.description);
          formData.append("tags", this.form.tags);

          const res = await api.put(`book/all/${this.modals.id}`, formData);
          if (res.status == 200) {
            const { book } = res.data;
            this.cancelar();
            this.$store.dispatch("showToast", "Actualizado com sucesso!");
            this.$store.dispatch("actionSetBook", book);
          }
        } else {
          const res = await api.put(`book/string/${this.modals.id}`, this.form);
          if (res.status == 200) {
            const { book } = res.data;
            this.cancelar();
            this.$store.dispatch("showToast", "Actualizado com sucesso!");
            this.$store.dispatch("actionSetBook", book);
          }
        }
      } catch (err) {
        alert("Erro ao cadastrar: " + err.message);
      }
    },
    async getBook() {
      try {
        const res = await api.get(`book/${this.modals.id}`);

        if (res.status == 200) {
          const book = res.data.book;
          this.$store.dispatch("actionSetBook", book);
          this.form = this.book;
        }
      } catch (err) {
        alert("Erro ao cadastrar: " + err.message);
      }
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
  width: 400px !important;
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
input,
select,
textarea {
  width: calc(100% - 24px);
  flex: 1;
  background-clip: padding-box;
  background-color: var(--input-background);
  box-shadow: rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  color: var(--input-color);
  font-size: 15px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  line-height: 1.5;
  padding: 7px 12px;
  border-radius: 4px;
  margin-top: 6px;
  outline: none;
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
  align-items: center;
  box-sizing: border-box;
}
.row input,
select {
  width: 50%;
}
.loading {
  background: hsl(0deg 0% 100% / 66%);
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
  left: 83%;
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
.file-area {
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  background-color: var(--file-area-background);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #1a516b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 14px;
  font-size: 14px;
  padding: 0 12px;
  margin-top: 4px;
}
.file-area button {
  pointer-events: none;
  background-color: transparent !important;
  border: 1px solid #1a516b;
  color: #1a516b;
  font-size: 14px;
  margin-top: 12px;
  border-radius: 8px;
}
.file-area img {
  width: 150px;
  height: 100%;
  object-fit: cover;
}
</style>