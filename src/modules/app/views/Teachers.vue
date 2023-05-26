<template>
  <div class="teachers">
    <div class="header">
      <h1>{{ this.$route.name }}</h1>
    </div>
    <ul class="tabs">
      <li @click="setTab('todos')" class="tab">
        <span>Activos</span>
        <span v-show="tab == 'todos'" class="border"></span>
      </li>
      <li @click="setTab('presentes')" class="tab">
        <div>Presentes <span class="badge">Hoje</span></div>
        <span v-show="tab == 'presentes'" class="border"></span>
      </li>
      <li @click="setTab('suspensos')" class="tab">
        <div>Suspensos</div>
        <span v-show="tab == 'suspensos'" class="border"></span>
      </li>
    </ul>
    <div class="content">
      <article v-show="tab == 'todos'">
        <div v-show="teachers.length" class="row">
          <div class="left">
            <div style="display: flex">
              <span style="font-size: 12px; margin-top: 2px; margin-right: 8px"
                >Total registrados</span
              >
              <strong style="font-size: 17px; color: var(--color-primary)">
                {{ teachers.length }}
              </strong>
            </div>
          </div>
          <div class="right">
            <div class="search">
              <svg
                aria-hidden="true"
                style="margin-right: 4px"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#7575754d"
              >
                <path
                  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
                ></path>
              </svg>
              <input type="text" placeholder="Pesquisar" />
            </div>
          </div>
        </div>
        <table v-if="teachers.length">
          <thead>
            <tr>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Nome completo</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Categorias</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Data de Nascimento</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Tempo de Serviço</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Habilitação literaria</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Especialidade</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Disciplinas que leciona</font
                  ></font
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              @click="openMenu($event, teacher._id)"
              @click.right.prevent="openMenu($event, teacher._id)"
              v-for="teacher in teachers"
              :key="teacher._id"
            >
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.nome }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.categorias }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.data_nascimento }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.tempo_servico }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.habilitacao }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ teacher.especialidade }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{
                      teacher.disciplinas[0] +
                      `${
                        teacher.disciplinas.length == 2
                          ? ", " + teacher.disciplinas[1]
                          : ""
                      }`
                    }}
                  </font></font
                >
              </td>
            </tr>
          </tbody>
        </table>

        <div class="no-data" v-else>
          <h1>Nenhum dado</h1>
        </div>
      </article>

      <article v-show="tab == 'presentes'">
        <div v-show="todayBookmarks.length" class="row">
          <div class="left">
            <div style="display: flex">
              <span style="font-size: 12px; margin-top: 2px; margin-right: 8px"
                >Total registrados</span
              >
              <strong style="font-size: 17px; color: var(--color-primary)">
                {{ todayBookmarks.length }}
              </strong>
            </div>
          </div>
          <div class="right">
            <div class="search">
              <svg
                aria-hidden="true"
                style="margin-right: 4px"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#7575754d"
              >
                <path
                  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
                ></path>
              </svg>
              <input type="text" placeholder="Pesquisar" />
            </div>
          </div>
        </div>
        <table v-if="todayBookmarks.length">
          <thead>
            <tr>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Nome completo</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Categorias</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Data de Nascimento</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Tempo de Serviço</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Habilitação literaria</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Especialidade</font
                  ></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Disciplinas que leciona</font
                  ></font
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bookmark in todayBookmarks" :key="bookmark._id">
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.nome }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.categorias }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.data_nascimento }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.tempo_servico }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.habilitacao }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{ bookmark.professor.especialidade }}
                  </font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">
                    {{
                      bookmark.professor.disciplinas[0] +
                      `${
                        bookmark.professor.disciplinas.length == 2
                          ? ", " + bookmark.professor.disciplinas[1]
                          : ""
                      }`
                    }}
                  </font></font
                >
              </td>
            </tr>
          </tbody>
        </table>

        <div class="no-data" v-else>
          <h1>Nenhum dado</h1>
        </div>
      </article>
      <article v-show="tab == 'suspensos'"></article>
    </div>
    <ContextMenu ref="menu">
      <div @click="goTeacherInfo(id)" class="item">Mais informações</div>
      <div class="item">Editar</div>
      <div class="item">Suspender</div>
      <div @click="addTeacher" class="item">Marcar como presente</div>
    </ContextMenu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/api";
import ContextMenu from "../components/modals/ContextMenu.vue";
export default {
  name: "Teachers",
  components: {
    ContextMenu,
  },
  data() {
    return {
      tab: "todos",
      id: "",
    };
  },
  computed: {
    ...mapState(["teachers", "todayBookmarks"]),
  },
  created() {
    this.getTeachers();
    this.getBookmarks();
  },
  methods: {
    async getTeachers() {
      try {
        const res = await api.get("teachers");
        const teachers = res.data.teachers;
        this.$store.dispatch("actionSetTeachers", teachers);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getBookmarks() {
      try {
        const res = await api.get("bookmarks/today");
        const bookmarks = res.data.bookmarks;
        this.$store.dispatch("actionSetTodayBookmarks", bookmarks);
      } catch (err) {
        console.log(err.message);
      }
    },
    async addTeacher() {
      try {
        const res = await api.post(`bookmarks/add/${this.id}`);
        this.$store.dispatch("showToast", res.data.message);
      } catch (err) {
        console.log(err.message);
      }
    },
    openMenu(e, id) {
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
.content table {
  width: 100%;
  margin-bottom: 1em; /* overflow: auto; */
}

.content table th,
.content table td {
  text-align: left;
  vertical-align: top;
  font-size: 13px;
  line-height: 1.6;
}

.content table th code,
.content table td code {
  white-space: nowrap;
}

.content table th {
  padding: 5px 10px;
  border-bottom: 1px solid rgb(204, 204, 204);
  vertical-align: bottom;
}

.content table td {
  padding: 10px;
}
.content table tr {
  cursor: pointer;
  user-select: none;
}

.content table tr:last-child {
  border-bottom: 1px solid rgb(204, 204, 204);
}

.content table tr:nth-child(2n + 1) > td {
  background-color: white;
}

.content table tr:nth-child(2n) > td {
  background-color: rgb(251, 252, 253);
}

.content dt {
  font-weight: bold;
}

.content dd {
  margin-left: 15px;
}

.content p,
.content li,
.content dt,
.content dd {
  line-height: 1.6;
  margin-top: 0px;
}
.header {
  margin-bottom: 1rem;
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
  border-bottom: 1px solid rgb(204, 204, 204);
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
.badge {
  width: 30px;
  height: 0px;
  padding: 2px 5px;
  text-align: center;
  background: #ff7a73;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bolder;
  color: #fff;
}
.search {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  background: #fff;
  border: 1px solid rgba(117, 117, 117, 0.302);
  padding: 0 12px;
  box-sizing: border-box;
}
.search input {
  width: 100%;
  height: 32px;
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
</style>