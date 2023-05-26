<template>
  <header class="navbar">
    <div class="left">
      <div id="icon" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--color-primary)"
          height="24" width="24" version="1.1" id="Layer_1" viewBox="0 0 150 150" xml:space="preserve">
          <g id="XMLID_240_">
            <path id="XMLID_241_"
              d="M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z" />
            <path id="XMLID_242_"
              d="M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z" />
            <path id="XMLID_243_"
              d="M135,120H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,120,135,120z" />
          </g>
        </svg>
      </div>
      <h3>Eubuki</h3>
    </div>


    <div class="right">
      <div @click="openMenu($event)" class="avatar">
        <img :src="User.avatar" />
      </div>

      <div class="icons">
          <svg 
          @click="toggleMode"
          v-if="!isDarkMode"
           xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           height="24"
           width="24"
           viewBox="0 0 24 24" xml:space="preserve"
           fill="currentColor"
           >
            <g id="Layer_1" />
            <g id="Layer_2">
              <g>
                <path
                  d="M12,22C6.5,22,2,17.5,2,12c0-4.7,3.4-8.9,8-9.8c0.4-0.1,0.9,0.1,1.1,0.5c0.2,0.4,0.1,0.9-0.2,1.2C9.7,5.1,9,6.8,9,8.5    c0,3.6,2.9,6.5,6.5,6.5c1.7,0,3.4-0.7,4.6-1.9c0.3-0.3,0.8-0.4,1.2-0.2c0.4,0.2,0.6,0.6,0.5,1.1C20.9,18.6,16.7,22,12,22z     M7.6,5.3C5.4,6.8,4,9.2,4,12c0,4.4,3.6,8,8,8c2.8,0,5.2-1.4,6.7-3.6c-1,0.4-2.1,0.6-3.2,0.6C10.8,17,7,13.2,7,8.5    C7,7.4,7.2,6.3,7.6,5.3z" />
              </g>
            </g>
          </svg>

          <svg v-if="isDarkMode" fill="currentColor" width="24" height="24" @click="toggleMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="43. Brightness" id="_43._Brightness"><path d="M18.553,16.576c.03-.044.066-.082.095-.126s.048-.088.075-.131a7.969,7.969,0,0,0,.409-.713c.057-.114.113-.228.166-.344a8.091,8.091,0,0,0,.329-.851c.026-.083.045-.167.068-.251a7.751,7.751,0,0,0,.182-.811c.017-.1.033-.2.047-.3A8.006,8.006,0,0,0,20,12c0-.264-.015-.524-.04-.782-.006-.064-.017-.126-.025-.189-.024-.2-.052-.395-.09-.589-.011-.055-.025-.11-.037-.165-.045-.207-.1-.41-.158-.611l-.03-.095a7.921,7.921,0,0,0-4.465-4.918c-.038-.017-.077-.031-.115-.047q-.24-.1-.487-.179c-.123-.041-.247-.079-.372-.115q-.1-.027-.2-.051a7.969,7.969,0,0,0-1.214-.22A7.475,7.475,0,0,0,12,4a8,8,0,1,0,.918,15.943c.091-.01.18-.028.27-.041.212-.032.422-.07.629-.118.1-.024.2-.05.3-.078q.291-.081.573-.182c.1-.036.2-.069.294-.108.2-.082.4-.174.592-.271.074-.037.15-.069.223-.108a8.017,8.017,0,0,0,.709-.436c.107-.073.208-.155.312-.233.128-.1.255-.2.377-.3s.212-.188.315-.286.224-.223.332-.339c.092-.1.186-.2.273-.3C18.273,16.96,18.416,16.77,18.553,16.576ZM13.669,6.266c.116.033.238.052.35.091l.086.031a5.973,5.973,0,0,1,.827.382c.073.041.143.087.214.131a5.76,5.76,0,0,1,.568.4c.112.088.219.182.324.278q.194.176.37.368c.109.118.213.239.312.366a5.9,5.9,0,0,1,.343.486c.062.1.124.194.18.295a5.982,5.982,0,0,1,.329.7c.032.083.062.166.091.25a5.941,5.941,0,0,1,.226.83c.01.052.016.106.024.158A6.044,6.044,0,0,1,18,12a6.151,6.151,0,0,1-.057.782q-.015.117-.036.234a5.836,5.836,0,0,1-.131.586c-.021.078-.041.156-.066.233a5.606,5.606,0,0,1-.232.6c-.042.094-.087.185-.133.275,0,.011-.012.021-.017.031A5.962,5.962,0,0,1,13,9,5.888,5.888,0,0,1,13.669,6.266ZM6,12a6,6,0,0,1,5.581-5.979,7.972,7.972,0,0,0,4.46,10.4c-.045.041-.088.083-.135.123-.1.083-.2.162-.3.239-.073.054-.144.112-.219.163a5.864,5.864,0,0,1-.539.332c-.047.026-.1.046-.145.07-.153.077-.308.15-.467.214-.069.028-.14.052-.211.077-.144.052-.291.1-.439.14-.074.02-.148.04-.222.057-.157.037-.316.066-.476.09-.067.01-.133.023-.2.03A5.846,5.846,0,0,1,12,18,6.006,6.006,0,0,1,6,12Z"/><path d="M12.02,2a1,1,0,0,0,0-2h-.01a1,1,0,0,0,.01,2Z"/><path d="M19.8,3.222h-.01a1.005,1.005,0,1,0,.01,0Z"/><path d="M23.02,11h-.01a1.005,1.005,0,1,0,.01,0Z"/><path d="M19.8,18.778h-.01a1.005,1.005,0,1,0,.01,0Z"/><path d="M12.02,22h-.01a1.005,1.005,0,1,0,.01,0Z"/><path d="M4.242,18.778H4.231a1.006,1.006,0,1,0,.011,0Z"/><path d="M1.02,11H1.01a1.005,1.005,0,1,0,.01,0Z"/><path d="M4.242,5.222a1,1,0,0,0,0-2H4.231a1,1,0,0,0,.011,2Z"/></g></svg>
      </div>
      <ContextMenu ref="menu">
        <div @click="goTo('/myaccount')" class="item">Minha conta</div>
        <div @click="logout()" class="item">Terminar sessão</div>
      </ContextMenu>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import ContextMenu from "../modals/ContextMenu.vue";
export default {
  components: { ContextMenu },
  name: "Navbar",
  computed: {
    ...mapState(["tabnavbar", "User"])
  },
  data() {
    return {
      isDarkMode: document.body.dataset.theme == "dark" ? true : false,
      toggle: false
    }
  },
  mounted() {
    const icon = document.getElementById("icon");
    icon.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      const shade = document.getElementById("shade");
      sidebar.classList.toggle("show")
      shade.classList.toggle("show")

      shade.addEventListener("click", () => {
        sidebar.classList.remove("show")
        shade.classList.remove("show")
      })
    })
  },
  methods: {
    openModal() { },
    openMenu(e) {
      this.$refs.menu.openMenu(e);
    },
    logout() {
      localStorage.removeItem("access_token");
      window.location.reload();
    },
    setSidebar() {
      this.toggle = !this.toggle
      this.$store.dispatch("actionSetSidebar", this.toggle)
    },
    goTo(to) {
      this.$router.push(to)
    },
    toggleMode() {
      if (document.body.dataset.theme == "dark") {
        document.body.setAttribute("data-theme", "light");
        this.isDarkMode = false;
        localStorage.setItem("data-theme", "light")
      } else {
        document.body.setAttribute("data-theme", "dark");
        this.isDarkMode = true;
        localStorage.setItem("data-theme", "dark")
      }
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  margin-left: 250px;
  height: 56px;
  padding: 0 15px;
  width: calc(100% - 250px);
  background-color: var(--navbar-background);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  color: var(--navbar-color);
  z-index: 111221;
}

.border {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #f04e23;
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  cursor: pointer;
  padding: 12px 0;
}

.menu .item {
  font-weight: 600;
  padding-right: 18px;
  opacity: 0.9;
}

.right {
  display: flex;
  align-items: center;
}

.menu .item.active {
  color: #478aff;
  font-weight: bolder;
  opacity: 1;
}

.btn {
  padding: 10px 12px;
  color: #fff;
  background-color: #478aff;
  font-weight: 500;
  font-weight: bolder;
  border-radius: 6px;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.avatar img {
  cursor: pointer;
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 100px;
  border: 2px solid var(--color-primary);
  margin-right: 8px;
}

.icon {
  display: none;
  align-items: center;
  margin-right: 15px;
  opacity: 0.8;
  color: var(--color-text);
}
[data-theme='dark'] h3 {
  opacity: 0.6;
  transition: all ease 0.2s;
}
@media (max-width: 414px) {
  .icon {
    display: flex;
    opacity: 1;
  }

  .navbar {
    margin-left: 0px !important;
    width: 100%;
  }

  h3 {
    color: var(--color-primary) !important;
    font-weight: 900 !important;
    font-size: 20px;
    opacity: 1 !important;
  }
}
</style>