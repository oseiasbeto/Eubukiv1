<template>
  <div id="sidebar" class="sidebar">
    <div class="shade" id="shade"> </div>
    <ul class="menu" id="menu">
      <li class="item">
        <router-link :class="{ active: this.$route.path == '/dashboard' }" to="/dashboard">
          <div v-if="this.$route.path == '/dashboard'" class="border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"
            style="margin-right: 12px" fill="currentColor" viewBox="0 0 486.196 486.196">
            <g>
              <path
                d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1   c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6   c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2   c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5   C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9   v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0   s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z" />
            </g>
          </svg>

          <span>Dashboard</span>
        </router-link>
      </li>
      <li class="item">
        <router-link :class="{ active: this.$route.path == '/library' }" to="/library">
          <div v-if="this.$route.path == '/library'" class="border"></div>

          <svg width="24" height="24" style="margin-right: 12px" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21">
            <path
              d="M5.5 8C6.33 8 7 8.67 7 9.5S6.33 11 5.5 11 4 10.33 4 9.5 4.67 8 5.5 8M15.5 8c.828 0 1.5.67 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.67-1.5-1.5.672-1.5 1.5-1.5M10.5 6C11.88 6 13 7.12 13 8.5S11.88 11 10.5 11 8 9.88 8 8.5 9.12 6 10.5 6">
            </path>
            <path
              d="M15.833 17.113l-.252-.87.004-.003c-.313-1.284-.938-2.266-1.708-2.68l-2.17-1.366c-.506-.26-1.933-.26-2.44 0l-2.19 1.366c-.764.424-1.382 1.4-1.69 2.68l-.23.866c-.295-.24-.57-.5-.83-.777l.085-.327c.37-1.53 1.14-2.746 2.136-3.294l.193-.12-.78-.452c-.323-.186-.666-.186-.988 0l-1.65.977c-.24.148-.46.396-.642.72C2.243 12.808 2 11.682 2 10.5 2 5.806 5.806 2 10.5 2S19 5.806 19 10.5c0 1.192-.247 2.325-.69 3.355-.188-.335-.413-.59-.66-.74l-1.69-.977c-.325-.186-.668-.186-.99 0l-.764.45.142.09c1.05.564 1.824 1.776 2.2 3.3l.107.372c-.258.272-.53.528-.822.763M10.5 0C4.7 0 0 4.7 0 10.5S4.7 21 10.5 21 21 16.3 21 10.5 16.3 0 10.5 0">
            </path>
          </svg>
          <span>Bibilioteca</span>
        </router-link>
      </li>
      <li class="item">
        <router-link :class="{ active: this.$route.path == '/mycontents' }" to="/mycontents">
          <div v-if="this.$route.path == '/mycontents'" class="border"></div>
          <svg width="24" height="24" style="margin-right: 12px"  fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path xmlns="http://www.w3.org/2000/svg"
              d="M306.7 325.1L162.4 380.6C142.1 388.1 123.9 369 131.4 349.6L186.9 205.3C190.1 196.8 196.8 190.1 205.3 186.9L349.6 131.4C369 123.9 388.1 142.1 380.6 162.4L325.1 306.7C321.9 315.2 315.2 321.9 306.7 325.1V325.1zM255.1 224C238.3 224 223.1 238.3 223.1 256C223.1 273.7 238.3 288 255.1 288C273.7 288 288 273.7 288 256C288 238.3 273.7 224 255.1 224V224zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
          </svg>
          <span>Sou Escritor(a)</span>
        </router-link>
      </li>
      <li class="item">
        <router-link :class="{ active: this.$route.path == '/favorites' }" to="/favorites">
          <div v-if="this.$route.path == '/favorites'" class="border"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span style="margin-left: 12px">Favoritos</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: "Sidebar",
  mounted() {
    const menu = document.getElementById("menu");
    menu.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      const shade = document.getElementById("shade");
      sidebar.classList.remove("show")
      shade.classList.remove("show")

      shade.addEventListener("click", () => {
        sidebar.classList.remove("show")
        shade.classList.remove("show")
      })
    })
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #151617;
  color: #fff;
  z-index: 111111;
}

ul {
  list-style: none;
  padding: 16px;
}

.shade {
  background: rgba(0, 0, 0, 0.38);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 250px !important;
  right: 0;
  display: none;
  width: 100vw !important;
  height: 100vh;
  z-index: 0;
  padding: 0 30px;
  box-sizing: border-box;
}

a {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;
  border-radius: 4px !important;
  margin-bottom: 10px;
  opacity: 0.8;
  overflow: hidden;
}

a.active {
  background: rgb(61 62 64 / 26%);
  opacity: 1;
  font-weight: 600;
}

.border {
  position: absolute;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-primary);
}

svg {
  opacity: 0.6;
}

@media (max-width: 414px) {
  .sidebar {
    display: none
  }

  ul {
    margin-top: 3.5rem !important;
  }
}

.show {
  display: block !important;
}
</style>