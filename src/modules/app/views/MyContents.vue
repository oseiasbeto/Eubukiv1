<template>
  <div class="mycontents">
    <div class="header">
      <div class="left">
        <h1>{{ this.$route.name }}</h1>
        <span
        class="sub"
          >Nesta página ficam todos os livros que você já publico em nossa
          plataforma</span
        >
      </div>

      <div class="right">
        <button class="pb" @click="goNewContent">Publicar Livro</button>
      </div>
    </div>
    <div class="border"></div>
    <div style="padding: 6px 0" class="count">
      <span style="font-size: 12px; opacity: 0.6"
        >Total de registros: <strong> {{ mybooks.length }} </strong></span
      >
    </div>
    <div class="content">
      <div v-if="mybooks.length" class="mybooks">
        <div
        @click="goToViewBook(book._id)"
          @click.right.prevent="openMenu($event, book._id)"
          v-for="book in mybooks"
          :key="book._id"
          class="book"
        >
          <div class="img">
            <img :src="book.cover" />
          </div>
          <div class="info">
            <div class="title">
              {{ book.title }} - Gostos {{ book.likes.length }} - Views {{ book.views }}
            </div>
            <div class="subtitle">
              ID: {{ book._id }} -- criado em {{ book.createdAt }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="no-books">
        <div class="no-books-content">
          <div class="txt">
            <h1>Primeiro, publique o seu livro</h1>
            <p>
              Publique apenas livros da tua autoria em nossa plataforma, no
              formato PDF
            </p>
          </div>
          <button @click="goNewContent">Publicar</button>
        </div>
      </div>
    </div>
    <ContextMenu ref="menu">
      <div @click="goToViewBook(id)" class="item">Visualizar o livro</div>
      <div @click="openModal(id)" class="item">Actualizar informações</div>
      <div @click.stop v-if="!confirm" @click="confirm = true" class="item">
        Eliminar defenitivamente
      </div>
      <div v-else @click="remove(id)" class="item danger">Tens a certeza desta ação?</div>
    </ContextMenu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import ContextMenu from "../components/modals/ContextMenu.vue";
export default {
  name: "MyContents",
  components: { ContextMenu },
  data() {
    return {
      id: "",
      confirm: false,

    };
  },
  watch: {
    "book"() {
      this.geMyBooks()
    }
  },
  computed: {
    ...mapState(["mybooks", "book"]),
  },
  created() {
    this.geMyBooks();
  },
  methods: {
    async geMyBooks() {
      try {
        const res = await api.get("books/my");
        const mybooks = res.data.books;
        this.$store.dispatch("actionSetMyBooks", mybooks);
      } catch (err) {
        console.log(err.message);
      }
    },
    async remove(id) {
      try {
        const res = await api.delete(`book/delete/${id}`);
        if (res.status == 200) {
          let bookIdx = this.$store.state.mybooks.findIndex(
            (book) => book._id == id
          );
          if (bookIdx != -1) {
            this.$store.state.mybooks.splice(bookIdx, 1);
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    openModal(id) {
      this.$store.dispatch("actionsSetModals", {
        name: "editbook",
        id: id,
      });
    },
    goNewContent() {
      this.$router.push("/newcontent");
    },
    goToViewBook(id) {
      this.$router.push(`/book/${id}`);
    },
    openMenu(e, id) {
      this.confirm = false;
      this.$refs.menu.openMenu(e);
      this.id = id;
    },
    setTab(tab) {
      this.tab = tab;
    },
    goTeacherInfo(id) {
      this.$router.push(`/teacher/${id}`);
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
  background: var(--border);
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
  background-color: var(--box-background);
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
.book {
  cursor: pointer;
  position: relative;
  background-color: var(--box-background);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  align-items: center;
  height: 50px;
  padding: 16px;
  margin-bottom: 1rem;
}
.book:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.book .img {
  width: 35px;
  height: 38px;
  margin-right: 8px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.book .info {
  line-height: 1.2;
}
.info .title {
  font-weight: 600;
  color: var(--color-link);
}
.info .subtitle {
  opacity: 0.6;
  font-size: 14px;
}
@media (max-width: 414px) {
  .subtitle {
    display: none
  }
  h1 {
    font-size: 24px
  }
  .sub {
    display: none
  }
  .txt h1 {
    font-size: 19px
  }
  .pb {
    background: var(--color-primary) !important;
  }
}
</style>