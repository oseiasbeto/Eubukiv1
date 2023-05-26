<template>
  <div class="teachers">
    <div class="header">
      <h1>{{ this.$route.name }}</h1>
      <span>Gerencie os dados da tua conta.
      </span>
    </div>

    <ul class="tabs">
      <li @click="setTab('todos')" class="tab">
        <span>Dados pessoas</span>
        <span v-show="tab == 'todos'" class="border"></span>
      </li>
    </ul>
    <div class="content">
      <div class="field">
        <label for="">Capa</label>
        <div class="file-area">
          <label for="cover" class="upload-image pointer">
            <img v-if="avatar != '' || form.avatar" :src="form.avatar != '' ? form.avatar : getImage(avatar)"
              @load="loadImage" srcset="" />
            <div v-else class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 24 24" width="60px" fill="#1f1f1f96">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  d="M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
                </path>
              </svg>
            </div>

            <input ref="avatar" @change="selectImage" id="cover" accept="image/x-png, image/jpeg" type="file"
              style="display: none" />
          </label>
        </div>
      </div>
      <div class="field">
        <label> Nome completo</label>
        <input v-model="form.username" type="text" placeholder="Nome completo">
      </div>

      <div class="field">
        <label> Email</label>
        <input v-model="form.email" type="text" placeholder="Email">
      </div>
      <div class="field">
        <label> Número de telefone</label>
        <input v-model="form.telefone" type="number" placeholder="telefone">
      </div>

      <div class="field">
        <label> Descrição</label>
        <textarea v-model="form.description" type="text" placeholder="Descrição"></textarea>
      </div>


    </div>
    <div class="buttons">
      <button @click="edit"> Actualizar </button>
    </div>
  </div>
</template>

<script>
import { api } from "@/api"
import { loadImage, getImage } from "../Plugins/ValidationFiles";
import { mapState } from "vuex";

export default {
  name: "Library",
  components: {},
  data() {
    return {
      tab: "todos",
      id: "",
      form: {
        username: "",
        avatar: "",
        email: "",
        tell: "",
        description: ""
      },
      avatar: "",
      loadImage, getImage
    };
  },
  watch: {
    options() {
      this.cloneOptions();
    },
  },
  computed: {
    ...mapState(["User"]),
  },
  created() {
    this.setValues()
  },
  methods: {
    setValues() {
      this.form = this.User
    },
    selectImage(e) {
      this.form.avatar = "";
      const inputFile = e.target.files || this.$refs.avatar;
      this.avatar = inputFile[0];
    },

    async edit() {
      try {
        if (this.avatar != "") {
          const formData = new FormData();
          formData.append("file", this.avatar);
          formData.append("username", this.form.username);
          formData.append("email", this.form.email);
          formData.append("telefone", this.form.telefone);
          formData.append("description", this.form.description);

          const res = await api.put(`users/all/update`, formData);
          if (res.status == 200) {
            const { user } = res.data;
            this.$store.dispatch("showToast", "Actualizado com sucesso!");
            this.$store.dispatch("actionSetUser", user);
          }
        } else {
          const res = await api.put(`users/string/update`, this.form);
          if (res.status == 200) {
            const { user } = res.data;
            this.$store.dispatch("showToast", "Actualizado com sucesso!");
            this.$store.dispatch("actionSetUser", user);
          }
        }
      } catch (err) {
        console.log(err.message)
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}

.header {
  margin: 1rem 0;
  line-height: 1.2;
}

.header span {
  font-size: 12px;
  opacity: 0.6;
}

.content {
  background: var(--box-background);
  border: 1px solid rgba(117, 117, 117, 0.302);
  padding: 12px;
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

.field {
  display: flex;
  flex-direction: column;
}

.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.tabs {
  position: relative;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.8rem;
}

.tab {
  position: relative;
  padding: 12px 0;
  margin-right: 24px;
  cursor: pointer;
  user-select: none;
}

.tab .border {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--color-primary);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  width: 100%;
  height: 4px;
}

.search {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(117, 117, 117, 0.302);
  border-radius: 4px;
  padding: 0 12px;
  box-sizing: border-box;
  margin-bottom: 0.6rem;
}

.search input {
  width: 100%;
  height: 36px;
  background: transparent;
  border: none;
  outline: none;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.books {
  display: block;
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
}

.field {
  margin-bottom: 1rem
}

label {
  font-weight: 600
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

button {
  border-radius: 6px;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  height: 2.4rem;
  padding: 0 1.2rem;
  text-align: center;
  background-color: var(--color-primary);
  border: 1px solid transparent;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
  margin-top: 1rem;
}
</style>