<template>
  <form @submit.prevent="handleSubmit">
    <div class="form">
      <error
        v-if="error.open"
        :error="error"
        @closelogout="error.open = !error.open"
      />
      <div class="form-container">
        <div class="border"></div>
        <section class="form-body" style="height: 100%">
          <div class="sept">
            <article>
              <div class="form-header">
                <div class="info-title">Fazer login</div>
                <div class="options">
                  <div class="option active">Rápido</div>
                  <div class="option">Redes socias</div>
                </div>
              </div>
              <div class="field">
                <input
                  class="form-control"
                  type="text"
                  ref="inputfocus"
                  v-model="form.email_or_tell"
                  placeholder="Email"
                  required
                />
              </div>
              <article class="sepdown"></article>
              <div class="field">
                <input
                  class="form-control"
                  :type="typePassword"
                  v-model="form.password"
                  placeholder="Palavra-passe"
                  required
                />
                <span
                  v-show="form.password.length"
                  @click="toggleTypePassword"
                  class="btn-password"
                >
                  <svg
                    v-if="typePassword == 'password'"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(39, 40, 43)"
                    style="opacity: 0.67"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                    />
                  </svg>

                  <svg
                    v-else
                    width="16"
                    height="16"
                    fill="rgb(39, 40, 43)"
                    style="opacity: 0.67"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM189.8 123.5L235.8 159.5C258.3 139.9 287.8 128 320 128C390.7 128 448 185.3 448 256C448 277.2 442.9 297.1 433.8 314.7L487.6 356.9C521.1 322.8 545.9 283.1 558.6 256C544.1 225.1 518.4 183.5 479.9 147.7C438.8 109.6 385.2 79.1 320 79.1C269.5 79.1 225.1 97.73 189.8 123.5L189.8 123.5zM394.9 284.2C398.2 275.4 400 265.9 400 255.1C400 211.8 364.2 175.1 320 175.1C319.3 175.1 318.7 176 317.1 176C319.3 181.1 320 186.5 320 191.1C320 202.2 317.6 211.8 313.4 220.3L394.9 284.2zM404.3 414.5L446.2 447.5C409.9 467.1 367.8 480 320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L120.8 191.2C102.1 214.5 89.76 237.6 81.45 255.1C95.02 286 121.6 328.5 160.1 364.3C201.2 402.4 254.8 432 320 432C350.7 432 378.8 425.4 404.3 414.5H404.3zM192 255.1C192 253.1 192.1 250.3 192.3 247.5L248.4 291.7C258.9 312.8 278.5 328.6 302 333.1L358.2 378.2C346.1 381.1 333.3 384 319.1 384C249.3 384 191.1 326.7 191.1 255.1H192z"
                    />
                  </svg>
                </span>
              </div>

              <div class="row-small">
                <span style="font-size: 14px" class="forgout">
                  <router-link to="/account/forgout_password"
                    >Esqueci a senha</router-link
                  >
                </span>
              </div>
            </article>

            <article class="footer">
              <div class="buttons-group">
                <button style="width: 100%">Continuar</button>
              </div>

              <div class="already">
                <p>
                  Não tens uma conta?
                  <router-link to="/account/signup">Cadastra-se</router-link>
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import Error from "../Components/modals/Error.vue";

export default {
  components: { Error },
  name: "Auth",

  data() {
    return {
      remember_me: false,
      form: {
        email_or_tell: "",
        password: "",
      },
      error: {
        title: "",
        message: "",
        open: false,
      },
      typePassword: "password",
    };
  },
  computed: {
    ...mapState(["User"]),
  },
  mounted() {
    this.$refs.inputfocus.focus();
  },
  created() {
    const remember_me = JSON.parse(localStorage.getItem("remember_me"));
    if (remember_me != null) {
      this.form = {
        email_or_tell: remember_me.email_or_tell,
        password: remember_me.password,
      };
      this.remember_me = true;
    } else return;
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await api.post("users/enter", this.form);
        this.error = false;

        localStorage.setItem("access_token", response.data.data.token);
        this.$store.dispatch("actionSetToken", response.data.data.token);

        if (this.remember_me) {
          const remember_me = {
            email_or_tell: this.form.email_or_tell,
            password: this.form.password,
          };
          localStorage.setItem("remember_me", JSON.stringify(remember_me));
        }
        window.location.reload();
      } catch (err) {
        this.error = {
          title: "Credenciais inválidas",
          message:
            " O teu endereço de Email ou então a Palavra-passe informada está inválida.",
          open: true,
        };
        setTimeout(() => {
          this.error = {
            title: "",
            message: "",
            open: false,
          };
        }, 3000);

        this.form.email_or_tell = "";
        this.form.password = "";
        console.log(err.message);
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
    toggleTypePassword() {
      if (this.typePassword == "password") this.typePassword = "text";
      else this.typePassword = "password";
    },
  },
};
</script>


<style scoped>
form {
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
  font-size: 13px;
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
  overflow: hidden;
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
  border-radius: 8px;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  height: 2.7rem;
  padding: 0 1.5rem;
  text-align: center;
  background-color: #f75e36;
  border: 1px solid transparent;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
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
  position: relative;
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
  font-weight: 500;
  color: var(--color-opc);
  padding: 12px;
}
.already a {
  color: #88d3ab;
  font-size: 14px;
  font-weight: bold;
}
.field {
  position: relative;
}
.btn-password {
  position: absolute;
  cursor: pointer;
  top: 6px;
  right: 5px;
  padding: 4px;
  height: 27px;
  background: transparent;
}
.border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #f75e36;
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

</style>