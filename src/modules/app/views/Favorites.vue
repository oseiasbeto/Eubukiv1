<template>
  <div class="teachers">
    <div class="header">
      <h1>{{ this.$route.name }}</h1>
      <span>Esta página mostra todos os livros que você favoritou.</span>
    </div>

    <div class="content">
      <section class="books" v-if="User.myFavorites.length">
        <book-box v-for="book in User.myFavorites" :key="book.id" :book="book" />
      </section>
      <section v-else class="no-books">
        <h1>Nenhum livro favoritado</h1>
        <p style="font-size: 12px;
    opacity: 0.6;">Encontre os melhores livros em nossa bibilioteca </p>
        <router-link to="/library" >Ver bibilioteca</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookBox from "../components/utils/BookBox.vue";

export default {
  name: "Library",
  components: { BookBox },
  data() {
    return {

    };
  },
  computed: {
    ...mapState(["User"]),
  },
  created() {

  },
  methods: {

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
  background: var(--search-background);
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
  color: var(--search-color);
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
.no-books {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.no-books a {
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  height: 2.4rem;
  padding: 0 1.2rem;
  text-align: center;
  background-color: var(--color-link);
  border: 1px solid transparent;
  margin-top: 20px;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
}
</style>