<template>
  <div id="wrapper" class="l_wrapper p_top">
    <header class="l_header u_hide_pc">
      <div class="l_header_logo">
        <router-link to="/">
          <picture>
            <img src="../../assets/images/common/logo_header.png" alt="Study in Japan">
          </picture>
        </router-link>
      </div>
      <input type="checkbox" id="nav__checkbox" class="nav__checkbox">
      <label for="nav__checkbox" class="nav__toggle" @click="showMenu()">
        <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" class="hamburger"  />
        <img src="https://img.icons8.com/plumpy/30/000000/x.png" class="close" />
      </label>
    </header>
    <div class="l_container">
      <div class="l_container_inner" >
        <div class="l_container_aside js_drower_nav" :class="this.showMobileMenu ? 'is-open nav-display' : ''">
          <Header />
          <Sidebar />
        </div>
        <div class="l_container_main">
          <Search />
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Layout",
  components: {Search, Sidebar, Footer, Header},
  data()
  {
    return {
      isFixed: false,
      showMobileMenu: false,
    }
  },
  created() {

  },
  mounted() {
    document.body.classList.remove("nav-display");
    document.body.classList.remove("is_fixed");
    document.body.classList.remove("nav-display1");
  },
  methods: {
    showMenu() {
      this.isFixed = !this.isFixed;
      if (!this.isFixed)
      {
        document.body.classList.remove("is_fixed");
        document.body.classList.remove("nav-display");
        if (this.isFixed)
        {
          document.body.classList.remove("nav-display1");
        }

      } else
      {
        document.body.classList.add("nav-display");
        document.body.classList.add("is_fixed");
        document.body.classList.remove("nav-display1");
      }
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
}
</script>

<style lang="scss">
  @import "../../assets/css/style.css";
  @import "../../assets/css/overwrite.css";
  @import "../../assets/css/pages/top.css";
  @import "../../assets/css/slick.css";
  .nav-display {
    display: block;
  }
  .nav-display1 {
    display: none;
  }
  .nav {
    border-bottom: 1px solid grey;
  }
  .nav__toggle {
    position: absolute;
    cursor: pointer;
    margin: 1rem 1rem;
    right: 0;
    z-index: 500000;
  }

  .close,
  input[type="checkbox"] {
    display: none;
  }
  .hamburger {
    margin-top: 0.2rem;
  }
  .nav__menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin: 1rem;
  }
  li {
    list-style: none;
  }

  li:first-child {
    margin-right: auto;
    display: block;
  }
  .nav__menu a {
    text-decoration: none;
    color: initial;
    font-size: 1.2rem;
  }
  #nav__checkbox:checked ~ ul.nav__menu li {
    display: block;
  }
  #nav__checkbox:checked ~ label.nav__toggle .hamburger {
    display: none;
  }
  #nav__checkbox:checked ~ label.nav__toggle .close {
    display: block;
  }

  @media only screen and (min-width: 768px) {
    .nav__toggle {
      display: none;
    }
    .nav__menu {
      flex-direction: row;
    }
    .nav__menu li {
      display: block;
    }
  }
</style>