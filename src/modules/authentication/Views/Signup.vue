<template>
  <div class="form-panel">
    <div class="form">
      <error v-if="errorApi.open" :error="errorApi" />
      <success
        v-if="success.open"
        :success="success"
        @close="success.open = !success.open"
      />
      <div class="form-container">
        <div class="border"></div>
        <section class="form-body" style="height: 100%">
          <div class="sept">
            <article>
              <div class="form-header">
                <div class="info-title">Registre-se</div>
                <div class="options">
                  <div class="option active">Rápido</div>
                  <div class="option">Redes socias</div>
                </div>
              </div>
              <div class="field">
                <input
                  class="form-control"
                  :class="{
                    danger: error.username,
                  }"
                  type="text"
                  ref="inputfocus"
                  v-model="form.username"
                  placeholder="Nome completo"
                />
              </div>
              <article class="sepdown"></article>
              <div class="field">
                <input
                  class="form-control"
                  :class="{
                    danger: error.email,
                  }"
                  type="text"
                  v-model="form.email"
                  placeholder="Email"
                />
                <div class="info-small">
                  <p>
                    Inforne um email válido. Porque é com ele que você vai poder
                    iniciar a tua sessão em nossa plataforma.
                  </p>
                </div>
              </div>
              <article class="sepdown"></article>
              <div class="field">
                <input
                  class="form-control"
                  type="text"
                  :class="{
                    danger: error.tell,
                  }"
                  v-model="form.tell"
                  placeholder="ex: +244 900 000 000"
                />
              </div>
              <article class="sepdown"></article>
              <div class="field">
                <input
                  class="form-control"
                  :class="{
                    danger: error.password,
                  }"
                  type="password"
                  v-model="form.password"
                  placeholder="Palavra-passe"
                />
              </div>
              <article class="sepdown"></article>
              <div class="field" style="display: flex; align-items: center">
                <input
                  type="checkbox"
                  class="form-check-input"
                  checked
                  readonly
                  disabled
                  id="legal"
                />

                <label for="legal" class="legal"
                  >Aceito todos os
                  <router-link to="/terms">Termos</router-link> &
                  <router-link to="/politics">Politicas</router-link> da
                  Eubuki</label
                >
              </div>
            </article>

            <article class="footer">
              <div class="buttons-group">
                <button @click="handleSubmit" style="width: 100%">
                  Registrar-se
                </button>
              </div>

              <div class="already">
                <p>
                  Já tens uma conta?
                  <router-link to="/account/auth">Login</router-link>
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import Success from "../Components/modals/Success.vue";
import Error from "../Components/modals/Error.vue";

export default {
  components: { Success, Error },
  name: "Auth",

  data() {
    return {
      remember_me: false,
      form: {
        username: "",
        email: "",
        tell: "",
        password: "",
      },
      error: {
        username: false,
        email: false,
        tell: false,
        password: false,
      },
      success: {
        open: false,
        message: "",
      },
      errorApi: {
        message: "",
        open: false,
      },
      viewPassword: false,
    };
  },
  computed: {
    ...mapState(["User"]),
  },
  mounted() {
    this.$refs.inputfocus.focus();
  },
  created() {},
  methods: {
    async handleSubmit() {
      try {
        if (this.form.username == "" || this.form.username == null) {
          this.error.username = true;
        } else {
          this.error.username = false;
        }
        if (this.form.email == "" || this.form.email == null) {
          this.error.email = true;
        } else if (
          !this.form.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          this.error.email = true;
        } else {
          this.error.email = false;
        }
        if (this.form.tell == "" || this.form.tell == null) {
          this.error.tell = true;
        } else {
          this.error.tell = false;
        }
        if (this.form.password == "" || this.form.password == null) {
          this.error.password = true;
        } else {
          this.error.password = false;
        }

        if (
          !this.error.username &&
          !this.error.email &&
          !this.error.tell &&
          !this.error.password
        ) {
          const res = await api.post("users/register", this.form);

          if (res.status == 201) {
            this.success = {
              open: true,
              message: "Cadastrado com sucesso.",
            };

            setTimeout(() => {
              this.success.message = "Redirecioando...";
            }, 1000);

            setTimeout(() => {
              this.$router.push("/account/auth");
            }, 3000);
          }
        }
      } catch (err) {
        if (err.status == 400) {
          if (err.data.message == "this email already exisits!") {
            this.errorApi = {
              open: true,
              message: "O email informado já está registrado.",
            };
            setTimeout(() => {
              this.errorApi = {
                open: false,
                message: "",
              };
            }, 3000);
          }
        }
        console.log(err);
      }
    },
    closeError() {
      this.error = !this.error;
    },
    setModal(type, id) {
      this.$store.dispatch("actionsSetModals", {
        type,
        id,
        show: true,
      });
    },
  },
};
</script>


<style scoped>
.form-panel {
  display: flex;
  align-items: center;
  background-color: var(--background);
  height: 100vh;
}
.card {
  background-color: #fff;
  color: var(--color-text);
}
.sept {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.forgout a {
  margin-top: 10px;
  color: #969696;
  font-weight: 500;
  font-size: 14px;
}
.header-img {
  width: 135px;
}
.MuiIconButton-sizeSmall {
  padding: 3px;
  font-size: 1.125rem;
}
.form-tipograph {
  padding: 16px 0;
  font-size: 27px;
  text-align: center;
  font-weight: 600;
}
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
}
.dont-account {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 14px;
  padding-top: 15px;
  text-align: center;
}
.dont-account span {
  margin-right: 4px;
}
.form-container {
  position: relative;
  flex-basis: 100%;
  max-width: 300px;
  width: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  border-radius: 4px;
  padding: 16px;
}

.brand {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}
.form-control {
  width: calc(100% - 24px);
  flex: 1;
  background-clip: padding-box;
  background-color: #ecf0f6;
  border: 1px solid #ecf0f6;
  border-radius: 8px;
  transition: background-color 240ms ease 0s, box-shadow 240ms ease 0s;
  color: var(--color-dark) !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 9px 12px;
  border-radius: 8px;
  margin-top: -1px;
}
.form-control::-moz-placeholder {
  color: rgb(39, 40, 43) !important;
  opacity: 1;
}
.form-control::placeholder {
  color: rgb(166, 171, 179) !important;
  opacity: 1;
}
.form-control:focus {
  color: var(--color-dark);
  background-color: #fff;
  border-color: rgb(60 66 87 / 16%);
}

button {
  border: 1px solid transparent;
  border-radius: 8px;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  height: 2.7rem;
  padding: 0 1.5rem;
  text-align: center;
  background-color: #85cfa7;
  border: 1px solid #85cfa7;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
}
.border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #85cfa7;
}
.row1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.row-small {
  display: flex;
  flex-direction: row;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: END;
  align-items: center;
  margin-top: 9px;
  margin-bottom: 5.2rem;
}
.sepdown {
  margin-bottom: 10px;
}
.info-title {
  color: #111;
  font-weight: bolder;
  margin-bottom: 4px;
  font-size: 18px;
}
a {
  color: var(--color-link);
}

.options {
  display: flex;
  align-items: center;
  padding: 16px 0;
}
.options .option {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  height: 2.175rem;
  padding: 0 1.5rem;
  text-align: center;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  text-decoration: none;
  vertical-align: middle;
  color: var(--color-opc);
  white-space: nowrap;
  width: 50%;
}
.options .option.active {
  border-color: transparent !important;
  background: linear-gradient(88deg, #0db9de 10.71%, #0abfc8);
  color: #fff !important;
  font-weight: bolder;
  margin-right: 12px;
}
.already {
  text-align: center;
  font-size: 11px;
  color: var(--color-opc);
  font-weight: 500;
  padding: 12px;
}
.already a {
  text-align: center;
  font-size: 14px;
  color: var(--color-primary);
  font-weight: bold;
}
.status {
  position: absolute;
  top: 12%;
  left: 93%;
  color: var(--color-opc);
  font-size: 24px;
}
.legal {
  font-size: 12px;
  color: var(--gray);
  margin-top: 4px;
  margin-left: 9px;
}
.legal a {
  color: var(--color-primary);
  text-decoration: underline;
}
.info-small {
  font-size: 11px;
  padding-top: 10px;
  padding-bottom: 4px;
  color: var(--gray-light);
}
[data-theme='dark'] .form-container {
  background: var(--box-background);
}
[data-theme='dark'] .info-title {
  color: #fff;
}
[data-theme='dark'] .options .option {
  background-color: #383737;
  border: 1px solid #222121;
}
[data-theme='dark'] .form-control {
  background-color: #191919;
  border: 1px solid #ecf0f61f;
  color: #fff;
}
[data-theme='dark'] .form-control:focus {
  background-color: #191919;
  border: 1px solid #ecf0f61f;
}
.form-control.danger {
  border-color: #ff5555 !important;
}
</style>