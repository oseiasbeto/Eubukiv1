<template>
  <div class="mycontents">
    <div v-if="loading" class="loading"></div>
    <div class="container">
      <div class="header">
        <div class="left">
          <h1>{{ this.$route.name }}</h1>
        </div>

        <div class="right">
          <button
            @click="goBack"
            style="
              background-color: transparent !important;
              border: 1px solid #1a516b;
              color: #1a516b;
              font-size: 14px;
              margin-left: 12px;
              border-radius: 8px;
            "
          >
            Voltar
          </button>
        </div>
      </div>
      <div class="content">
        <div class="field">
          <label for="">Capa</label>
          <div class="file-area">
            <label for="cover" class="upload-image pointer">
              <img
                v-if="cover != ''"
                :src="getImage(cover)"
                @load="loadImage"
                srcset=""
              />
              <div v-else class="icon">
                <svg
                  height="60px"
                  width="60px"
                  fill="#1f1f1f96"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
                  />
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
          <label for="">Título</label>
          <input v-model="form.title" class="form-control" type="text" />
        </div>
        <div class="field">
          <label for="">Categoria</label>
          <select v-model="form.category">
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
          <label for="">Arquivo</label>
          <div
            v-if="book == ''"
            class="file-area"
            :class="{ danger: errorFile.show }"
          >
            <label for="book" class="file-area-content">
              <p v-if="!errorFile.show">
                Você pode inserir arquivo apenas dos tipo
                <strong>PDF</strong> Lembre-se que o tamanho do arquivo deve ter
                no máximo 50MB
              </p>
              <p class="danger" v-else>
                {{ errorFile.message }}
              </p>

              <button>Selecionar arquivo</button>
              <input
                ref="book"
                @change="selectBook"
                id="book"
                accept="application/pdf"
                type="file"
                style="display: none"
              />
            </label>
          </div>

          <div v-else class="file-open">
            <div class="sept">
              <div class="icon">
                <svg
                  width="54"
                  height="50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#2c3f65"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"
                  />
                </svg>
              </div>
              <div class="info">
                <div class="filename">
                  {{ book.name }}
                </div>
                <div class="size">{{ book.size }}MB</div>
              </div>
            </div>

            <button @click="close" class="btn-remove">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757"
                  class="icon_svg-stroke"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke="#666"
                  stroke-width="1.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="field">
          <label for="">Descrição</label>
          <textarea
            v-model="form.description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="field">
          <label for="">Tags</label>
          <input
            v-model="tag"
            class="form-control"
            type="text"
            placeholder="Separe por vúrgulas ex: Aventuras, Romance, Comédia"
          />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="buttons">
        <span>
          <button
            disabled
            v-if="
              book == '' ||
              cover == '' ||
              form.title == '' ||
              form.category == '' ||
              loading
            "
            class="disabled"
          >
            Salvar
          </button>
          <button @click="publishBook" v-else class="active">Salvar</button>
        </span>

        <button @click="goBack">cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { loadImage, getImage } from "../Plugins/ValidationFiles";
import { mapState } from "vuex";
import { api } from "@/api";
export default {
  name: "NewContent",
  components: {},
  data() {
    return {
      form: {
        title: "",
        category: "História",
        description: "",
        tags: [],
      },
      loading: false,
      errorFile: {
        show: false,
        message: "",
      },
      tag: "",
      book: "",
      cover: "",
      loadImage,
      getImage,
    };
  },
  computed: {
    ...mapState(["mybooks"]),
  },
  created() {},
  methods: {
    async publishBook() {
      try {
        this.loading = true;
        this.tag = this.tag.trim();
        const splitTags = this.tag.split(",");
        this.form.tags = splitTags;

        const formData = new FormData();
        formData.append("file", this.book);
        formData.append("title", this.form.title);
        formData.append("category", this.form.category);
        formData.append("description", this.form.description);
        formData.append("tags", this.form.tags);

        const res = await api.post("books/create", formData);

        if (res.status == 200) {
          this.updateCover(res.data.book._id);
        }

        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    },
    async updateCover(id) {
      try {
        const formData = new FormData();
        formData.append("file", this.cover);
        const res = await api.put(`book/cover/${id}`, formData);

        if (res.status == 200) {
          setTimeout(() => {
            this.$router.push("/mycontents");
            this.loading = false;
            this.$store.dispatch("showToast", "Cadastrado com sucesso!");
          }, 3000);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    goBack() {
      history.go(-1);
    },
    selectBook(e) {
      const inputFile = e.target.files || this.$refs.book;
      if (inputFile[0].type == "application/pdf") {
        this.book = inputFile[0];
        this.errorFile = {
          show: false,
          message: "",
        };
      } else {
        this.errorFile = {
          show: true,
          message: "O arquivo deve estar no formato PDF",
        };
        this.book = {};
      }
    },
    selectImage(e) {
      const inputFile = e.target.files || this.$refs.cover;
      this.cover = inputFile[0];
    },
    close() {
      this.book = ""
    }
  },
};
</script>

<style scoped>
.mycontents {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.container {
  width: 70%;
  box-sizing: border-box;
}
h1 {
  font-weight: normal;
}

.header {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header span {
  font-size: 12px;
  opacity: 0.6;
}
.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.border {
  background: rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 1px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}
button {
  border-radius: 6px;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  height: 2.4rem;
  padding: 0 1.2rem;
  text-align: center;
  background-color: var(--color-link);
  border: 1px solid transparent;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
}
.no-books {
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}
.no-books button {
  width: 100px;
}
.txt {
  margin-bottom: 12px;
  line-height: 1.5;
}
.txt h1 {
  font-size: 24px;
  font-weight: bolder !important;
}
.txt p {
  font-size: 13px;
  opacity: 0.7;
}
.content {
  padding: 16px 24px;
  background: var(--box-background);
  border: 1px solid rgba(117, 117, 117, 0.302);
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
  font-weight: 500;
  font-size: 13px;
  padding: 8px 0;
}
.field {
  margin-bottom: 14px;
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
  color: var(--file-area-color);
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

.file-open {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--file-area-background);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  border-radius: 4px;
}
.btn-remove {
  position: absolute;
  right: 12px;
  background-color: transparent;
  border-radius: 50%;
  height: 29px;
}
.sept {
  display: flex;
  align-items: center;
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
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}
.row input,
select {
  width: 100%;
}
.upload-image {
  width: 100%;
}
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.footer {
  position: fixed;
  left: 250px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  background-color: var(--navbar-background);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  padding: 0 24px;
  height: 56px;
  width: calc(100% - 250px);
}
.footer .buttons {
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
}
.footer .buttons button {
  background-color: transparent !important;
  border: 1px solid #1a516b;
  color: #1a516b;
  font-size: 14px;

  border-radius: 8px;
}
.buttons button.active {
  background-color: var(--color-primary) !important;
  color: #fff !important;
  border-color: transparent !important;
  margin-right: 12px;
}
.buttons button.disabled {
  pointer-events: none;
  background-color: var(--background) !important;
  color: rgba(64, 63, 63, 0.529) !important;
  border-color: transparent !important;
  margin-right: 12px;
}
.loading {
  background: rgb(255 255 255 / 62%);
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
.danger {
  color: #ff3e3e !important;
  font-weight: 600;
  border-color: #ff3e3e !important;
}
.info {
  line-height: 1.8;
  margin-left: 10px;
}
.info .filename {
  font-size: 13px;
}
.info .size {
  font-size: 13px;
  opacity: 0.6;
}
@media (max-width: 414px) {
  .container {
    width: 100% !important;
  }
  .footer {
    left: 0px !important;
    width: 100% !important;
  }
  h1 {
    font-size: 24px;
  }
}
</style>