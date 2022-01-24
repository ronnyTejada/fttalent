<template>
  <div id="app">
    <header class="navbar is-flex">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img
              src="https://www.fttalent.work/_nuxt/img/ui-logotipo_2.366da74.svg"
              alt="Logo"
            />
          </router-link>
          <span
            class="navbar-burger"
            data-target="navbarMenuHeroC"
            @click="showMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/about" class="navbar-item is-active"
              >Quienes somos</router-link
            >

            <router-link to="/services" class="navbar-item is-active"
              >Servicios</router-link
            >
            <router-link to="/clientes" class="navbar-item is-active"
              >Clientes</router-link
            >

           
          </div>
        </div>

        <ul class="menu-mobile hidden" id="menu-mobile">
          <li class="menu-mobile-text" @click="hideMenu">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menu-mobile-text" @click="hideMenu">
            <router-link to="/about">Quienes somos</router-link>
          </li>
          <li class="menu-mobile-text" @click="hideMenu">
            <router-link to="/services" class="">Servicios</router-link>
          </li>
          <li class="menu-mobile-text" @click="hideMenu">
            <router-link to="/clientes">Clientes</router-link>
          </li>
        </ul>
      </div>
    </header>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    hideMenu() {
      let menu_mobile = document.getElementById("menu-mobile");
      menu_mobile.classList.remove("show");
    },
    async showMenu() {
      let menu_mobile = document.getElementById("menu-mobile");

      let menu_mobile_text =
        document.getElementsByClassName("menu-mobile-text");
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      /*menu_mobile_text[0].onclick = function () {
        menu_mobile.classList.remove("show");
      };
      menu_mobile_text[1].onclick = function () {
        menu_mobile.classList.remove("show");
      };
      menu_mobile_text[2].onclick = function () {
        menu_mobile.classList.remove("show");
      };
      menu_mobile_text[3].onclick = function () {
        menu_mobile.classList.remove("show");
      };*/

      if (!menu_mobile.classList.value.includes("show")) {
        menu_mobile.classList.add("show");
        for (var i = 0; i < 284; i += 10) {
          if (i === 100) {
            menu_mobile_text[0].style.display = "block";
            menu_mobile_text[1].style.display = "block";
            menu_mobile_text[2].style.display = "block";
            menu_mobile_text[3].style.display = "block";
          }
          menu_mobile.style.height = i + "px";
          console.log(283);
          await delay(10);
        }
      } else {
        console.log("s");
        for (let i = 284; i > 0; i -= 10) {
          console.log(i);
          if (i === 4) {
            menu_mobile.classList.remove("show");
          }

          if (i === 104) {
            menu_mobile_text[0].style.display = "none";
            menu_mobile_text[1].style.display = "none";
            menu_mobile_text[2].style.display = "none";
            menu_mobile_text[3].style.display = "none";
          }
          menu_mobile.style.height = i + "px";
          await delay(10);
        }
      }
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter.active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.show {
  visibility: visible !important;
}
.hidden {
  visibility: hidden;
}

.menu-mobile {
  display: none;
}
.header {
  background-color: #fafafa;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #ccc;
  /* IMPORTANTE */
  text-align: center;
}

.menu-mobile {
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 5rem;
  background-color: #111111;
  justify-self: right;
  margin-left: 5%;
  
  margin-right: 5%;
  justify-content: space-around;
  text-align: center;
  list-style: none;
  width: 90%;
  height: auto;

  font-family: "Roboto Mono", monospace;
  z-index: 1;
}
</style>
