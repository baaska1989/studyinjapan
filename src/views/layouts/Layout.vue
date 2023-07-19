<template>
  <div id="wrapper" class="l_wrapper p_top">
    <HeaderBlock />
    <div class="l_container">
      <div class="l_container_inner">
        <div class="l_container_aside js_drower_nav">
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
import HeaderBlock from "@/components/HeaderBlock.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Layout",
  components: {Search, Sidebar, Footer, Header, HeaderBlock},
  data()
  {
    return {
      showMobileMenu: false,
    }
  },
  methods: {
    showMenu() {
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

  nav ul li {
    cursor: pointer;
  }
  .nav-menu {
    background-color: white;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
  }
  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 0 10px;
    }
  }
  i {
    display: none;
  }
  // Mobile version - hidden hamburger menu
  @media screen and (max-width: 768px) {
    .nav-menu {
      padding-top: 10px;
      position: absolute;
      width: 100%;
    }
    .open-menu {
      opacity: 1;
      height: 150px;
    }
    .closed-menu {
      opacity: 0;
      height: 0;
      padding: 0;
    }
    .nav-content {
      flex-direction: column;
      z-index: 100;
      position: relative;
      transition: all 0.2s ease-out;
    }
    .nav-items {
      flex-direction: column;
    }
    i {
      display: block;
      text-align: right;
      padding: 0 10px 10px 0;
    }
  }
</style>