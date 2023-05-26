<template>
  <div class="shade" @click="cancelar">
    <div class="modal" @click.stop>
      <div class="header">
        <h2>{{ book.title }}</h2>

        <div style="display: flex; align-items: center" class="sept">
          <p style="margin-right: 12px">
            Publicado por: <strong> {{ book.createdBy.firstname }} {{ book.createdBy.lastname }} </strong>
          </p>

          <p class="id" style="color: #f93c3c">ID: {{ Date.now() }}</p>
        </div>
      </div>
      <div class="body">
        <div class="row">
          <div class="cover">
            <button @click="toggleBookFromMyFavorites(book._id)" class="like">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" 
                :fill="book.likes.includes(User._id) ? 'var(--color-primary)' : 'none'" 
                :stroke="book.likes.includes(User._id) ? 'var(--color-primary)' : 'currentColor'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <img :src="book.cover" />
          </div>
          <div class="info">
            <ul class="info">
              <li class="info-item">
                <strong>Categoria: </strong>
                <div class="category">{{ book.category }}</div>
              </li>
              <li class="info-item">
                <strong>Classificações: </strong>
                <span>
                  <div class="stars">
                    <strong style="font-size: 10px; margin-right: 4px">4.4</strong>
                    <svg style="margin-right: 5px" width="10" height="10" viewBox="0 0 576 512">
                      <path fill="#efba0f"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>

                    <span style="font-size: 10px; opacity: 0.6">(176)</span>
                  </div>
                </span>
              </li>
              <li class="info-item">
                <strong>Visualizações: </strong> <span> 0 </span>
              </li>
            </ul>
            <br />
            <ul class="info">
              <li class="info-item">
                <strong>N/páginas: </strong>
                <span>16</span>
              </li>
              <li class="info-item">
                <strong>Lançado em: </strong> <span> 2023 </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="description">
          <strong style="color: var(--color-primary)"> Descrição</strong>
          <p>{{ book.description }}</p>
        </div>
      </div>
      <div class="footer">
        <div class="buttons">
          <button @click="goView(book._id)" class="active">Visualizar</button>
          <button @click="cancelar()">Voltar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "MoreInfoBook",
  data() {
    return {
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
    goView(id) {
      this.$router.push(`/book/${id}`)
      this.cancelar()
    },
    async toggleBookFromMyFavorites(id) {
      try {
        const res = await api.put(`book/toggle_myfavorites/${id}`);
        if (res.status == 200) {
          if (res.data.message == 'Adicionado com sucesso.') {
            this.$store.state.book.likes.push(this.User._id);
            this.$store.state.User.myFavorites.push(this.book)
            this.$store.dispatch("showToast", "Favoritado com sucesso!");
          } else {
            let userIdx = this.$store.state.book.likes.findIndex(
              (user) => user == this.User._id
            );
            if (userIdx != -1) {
              this.$store.state.book.likes.splice(userIdx, 1);
            }
            let boxIdx = this.$store.state.User.myFavorites.findIndex(
              (book) => book._id == id
            );
            if (boxIdx != -1) {
              this.$store.state.User.myFavorites.splice(userIdx, 1);
            }
            this.$store.dispatch("showToast", "Desfavoritado com sucesso!");
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}
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
  background-color: transparent;
  box-shadow: rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  color: rgb(57, 61, 74);
  font-size: 15px;
  font-weight: 500;
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
  box-sizing: border-box;
  width: 100%;
}

.cover {
  position: relative;
  box-sizing: border-box;
  width: 178px;
  height: 175px;
  margin-right: 18px;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.info {
  list-style: none;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-item strong {
  font-size: 14px;
  margin-right: 6px;
  padding: 2px 0;
  opacity: 0.8;
}

.category {
  background: rgb(165 168 255 / 21%);
  padding: 4px 12px;
  font-size: 12px;
  color: #035357;
  border: 1px solid #035357;
  font-weight: 600;
  border-radius: 8px;
}

.description {
  margin-top: 1.2rem;
}

@media (max-width: 414px) {
  .id {
    display: none;
  }

  .info-item {
    font-size: 7px;
  }

  .cover {
    height: 148px;
    width: 150px
  }

}

.like {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 40px;
  height: 40px;
  background: var(--box-background);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 30px;
  color: var(--color-text);
}
</style>