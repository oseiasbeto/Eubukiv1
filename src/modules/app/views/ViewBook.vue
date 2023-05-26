<template>
  <div class="mycontents">
    <div class="container">
      <div class="header">
        <div class="left">
          <h1>Visualizador PDF</h1>
        </div>

        <div class="right">
          <button class="screen" @click="goScreen()">Tela cheia</button>
          <a :href="book.book" :donwload="book.book" class="donwload">Donwload</a>
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
        <object
          class="viewpdf"
          :data="book.book"
          type="application/pdf"
        ></object>

        <div class="img">
        <img :src="book.cover">
        </div>

        

        <div class="comments">
          <div class="header">
            <h1>Comentários</h1>
          </div>

          <div>
            <div class="comment-wrapper">
              <div class="rw">
                <img :src="User.avatar" />
                <input
                  v-model="txt"
                  type="text"
                  placeholder="Escrever um comentário"
                />

                <button @click="commentent" style="margin-left: 4pxs">
                  Comentar
                </button>
              </div>

              <div class="border"></div>

              <div class="count">
                <p>
                  Total de comentários:
                  <strong> {{ book.comments.length }} </strong>
                </p>
              </div>
              <div v-if="book.comments.length" class="comments">
                <comment
                  v-for="comment in book.comments"
                  :comment="comment.txt"
                  :commentedBy="comment.createdBy"
                  :key="comment._id"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import Comment from "../components/theme/Comment.vue";

export default {
  name: "ViewBook",
  components: { Comment },
  data() {
    return {
      txt: "",
    };
  },
  computed: {
    ...mapState(["book", "User"]),
  },
  created() {
    this.getBook();
  },
  methods: {
    async getBook() {
      try {
        const res = await api.get(`book/${this.$route.params.id}`);

        if (res.status == 200) {
          const book = res.data.book;
          this.$store.dispatch("actionSetBook", book);
          this.form = this.book;
        }
      } catch (err) {
        alert("Erro ao cadastrar: " + err.message);
      }
    },
    async commentent() {
      try {
        console.log(this.txt);
        const res = await api.put(`book/comment/${this.book._id}`, {
          txt: this.txt,
        });

        if (res.status == 200) {
          this.$store.state.book.comments.push({
            txt: this.txt,
            createdBy: this.User,
          });
          this.txt = "";
        }
      } catch (err) {
        console.log(err);
      }
    },
    goScreen() {
      this.$store.dispatch("actionsSetModals", {
        name: "screen",
        show: true,
      });
    },
    goBack() {
      history.go(-1);
    },
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
button , a {
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

.viewpdf {
  display: block;
  margin: auto;
  width: 100%;
  height: 500px;
  border-radius: 20px;
}
.img {
  display: none
}
.img img {
  margin: auto;
  width: 100%;
  height: 300px;
  border-radius: 6px;
  object-fit: cover
}
input,
select,
textarea {
  width: calc(100% - 24px);
  flex: 1;
  background-clip: padding-box;
  background-color: var(--search-background);
  box-shadow: rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  color: var(--search-color);
  font-size: 15px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  line-height: 1.5;
  padding: 7px 12px;
  border-radius: 4px;
  margin-right: 18px;
  outline: none;
}
.rw img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100px;
  margin-right: 12px;
}

.rw {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.border {
  width: 100%;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 10px;
  background-color: var(--border);
}
button {
  background-color: var(--color-primary);
}
.count {
  font-size: 12px;
  margin-bottom: 16px;
}
.donwload {
  display: none;
}
@media (max-width: 414px) {
  .container {
    width: 100% !important;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
  }
  .header {
     align-items: center
  }
  .content {
    padding: 0px !important;
  }
  .viewpdf {
    display: none;
  }
  .img {
    display: block
  }
  .screen {
    display: none
  }
  .donwload {
        display: flex;
    align-items: center;
    background: var(--color-primary)
  }
}

</style>