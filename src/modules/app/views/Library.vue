<template>
  <div class="teachers">
    <div class="header">
      <h1>{{ this.$route.name }}</h1>
      <span>Encontre os melhores livros feitos em Angola apartir do nosso
        marketplace</span>
    </div>
    <div v-if="books.recomendads.length || books.news.length || books.hots.length" class="search">
      <svg aria-hidden="true" style="margin-right: 4px" width="18" height="18" viewBox="0 0 18 18" fill="#7575754d">
        <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z">
        </path>
      </svg>
      <input v-model="keyword" ref="txtsearch" @input="setNetwork($event.target.value)" type="search"
        placeholder="Pesquisar" />
    </div>
    <ul v-if="!keyword.length" class="tabs">
      <li @click="setTab('todos')" class="tab">
        <span>Recomendados</span>
        <span v-show="tab == 'todos'" class="border"></span>
      </li>
      <li @click="setTab('news')" class="tab">
        <div>Recentes</div>
        <span v-show="tab == 'news'" class="border"></span>
      </li>
      <li @click="setTab('hots')" class="tab">
        <div>Quentes</div>
        <span v-show="tab == 'hots'" class="border"></span>
      </li>
    </ul>
    <div class="content">
      <span v-if="!keyword.length" class="no-search">
        <section class="books" v-if="tab == 'todos' && books.recomendads.length">
          <book-box v-for="book in books.recomendads" :key="book.id" :book="book" />

          <h6 v-if="!books.recomendads.length">Nenhum resultado encontrado</h6>
        </section>
        <section class="books" v-if="tab == 'news' && books.news.length">
          <book-box v-for="book in books.news" :key="book.id" :book="book" />
          <h6 v-if="!books.news.length">Nenhum resultado encontrado</h6>
        </section>
        <section class="books" v-if="tab == 'hots' && books.hots.length">
          <book-box v-for="book in books.hots" :key="book.id" :book="book" />
        </section>

        <article v-if="!books.recomendads.length && books.news.length && books.hots.length" class="no-data">
          <h1>Nenhum dado</h1>
        </article>
      </span>

      <span v-else class="search-find">
        <section class="books" v-if="search.length">
          <book-box v-for="book in search" :key="book.id" :book="book" />
        </section>
        <article v-else class="no-data">
          <h1>Nenhum resultado</h1>
        </article>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import BookBox from "../components/utils/BookBox.vue";

export default {
  name: "Library",
  components: { BookBox },
  data() {
    return {
      tab: "todos",
      id: "",
      search: [],
      mutableOptions: [],
      keyword: "",
      selectOption: "",
      originalOptions: [],
      options: [],
    };
  },
  watch: {
    options() {
      this.cloneOptions();
    },
  },
  computed: {
    ...mapState(["books"]),
  },
  created() {
    if (this.options.length) {
      this.cloneOptions();
    }
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const res = await api.get("books");
        const data = res.data;
        this.$store.dispatch("actionSetBooks", {
          recomendads: data.recomendads,
          news: data.news,
          hots: data.hots
        });
      } catch (err) {
        console.log(err.message);
      }
    },
    async setNetwork(vl) {
      if (vl.length) {
        if (!this.originalOptions.length) {
          const res = await api.post(`book/search?name=${vl.toLowerCase()}`);

          if (res.status == 200) {
            this.search = res.data.books;
          }
        } else {
          if (this.selectOption == "") {
            this.searchInternaly();
          }
        }
      } else {
        this.options = [];
        this.selectOption = "";
        this.search = [];
      }
    },
    select(value) {
      this.keyword = value.title;
      this.selectOption = this.keyword;
      this.$router.push(`/chat/search/${this.keyword}`);
      this.close();
    },
    searchInternaly() {
      const search = this.keyword;
      this.mutableOptions = this.originalOptions.filter(
        (o) => o.title.toLowerCase().search(search.toLowerCase()) >= 0
      );
    },
    onClear() {
      this.keyword = "";
      this.selectOption = "";
      this.options = [];
    },
    cloneOptions() {
      this.originalOptions = JSON.parse(JSON.stringify(this.options));
      this.mutableOptions = JSON.parse(JSON.stringify(this.options));
    },
    setTab(tab) {
      this.tab = tab
    }
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
</style>