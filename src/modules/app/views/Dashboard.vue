<template>
  <div class="dashboard">
    <div class="container">
      <div class="header">
        <div class="left">
          <p>
            Olá <strong> {{ User.username }} </strong> esperamos que estejas
            bem. Tudo está pronto vamos começar...
          </p>
        </div>
      </div>
      <div class="content">
        <div class="box" style="font-size: 13px; height: 44px">
          <div class="left">
            <p class="info-txt">Compartilhe o teu conhecimento com os teus pontecias leitores.</p>
          </div>
          <div class="right">
            <button
              @click="goTo('/newcontent')"
              style="background: #198754 !important"
            >
              Publicar um livro
            </button>
          </div>
        </div>
        <div class="rw">
          <div
            @click="goTo('/mycontents')"
            style="
              box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
              width: 177px;
              font-size: 13px;
              margin-right: 22px;
              cursor: pointer;
            "
            class="box"
          >
            <div class="left">
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#7180f3"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M306.7 325.1L162.4 380.6C142.1 388.1 123.9 369 131.4 349.6L186.9 205.3C190.1 196.8 196.8 190.1 205.3 186.9L349.6 131.4C369 123.9 388.1 142.1 380.6 162.4L325.1 306.7C321.9 315.2 315.2 321.9 306.7 325.1V325.1zM255.1 224C238.3 224 223.1 238.3 223.1 256C223.1 273.7 238.3 288 255.1 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 255.1 224V224zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                  />
                </svg>
              </div>
              <p>Livros que publiquei</p>
            </div>
          </div>
          <div
            @click="goTo('/library')"
            style="
              box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
              width: 177px;
              font-size: 13px;
              cursor: pointer;
            "
            class="box"
          >
            <div class="left">
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#7180f3"
                >
                  <path
                    d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"
                  />
                </svg>
              </div>
              <p>Visitar Bibilioteca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ViewBook",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["User"]),
  },
  created() {

  },
  methods: {
    goBack() {
      history.go(-1);
    },
    goTo(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style scoped>
.dashboard {
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
  margin-top: 3.6rem;
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
}

label {
  font-weight: 500;
  font-size: 13px;
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
.row {
  width: 100%;
}

.right {
  display: flex;
  flex-direction: row;
  align-items: center;
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
.box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--box-background);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 12px;
  border-radius: 4px;
}
.icon {
  display: flex;
  width: 32px;
  justify-content: center;
  align-items: center;
  height: 32px;
  background-color: rgb(227 226 239);
  margin-right: 12px;
  border-radius: 100%;
  padding: 5px;
}
.left {
  display: flex;
  align-items: center;
}
.rw {
  display: flex;
  align-items: center;
}
[data-theme='dark'] .icon {
  background-color: #36373a;
}
@media (max-width: 414px) {
  .container {
    width: 110% !important;
  }
  .info-txt {
        font-size: 11px;
            margin-right: 12px;
  }
  .icon {
        height: 26px;
  }
  button {
    font-size: 13px
  }
}
</style>