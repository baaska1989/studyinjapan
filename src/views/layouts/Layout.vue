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

    <div class="l_pagetop js_pagetop">
      <div class="l_pagetop_inner">
        <a class="l_pagetop_btn" href="#wrapper" aria-label="Дээд хуудас руу буцах"></a>
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
    return {}
  }
}
</script>

<style lang="css">
  @import "../../assets/css/style.css";
  @import "../../assets/css/overwrite.css";
  @import "../../assets/css/pages/top.css";
  @import "../../assets/css/slick.css";

  nav ul li {
    cursor: pointer;
  }
  .nav__toggle {
    position: absolute;
    cursor: pointer;
    margin: 0rem 1rem;
    right: 0;
  }

  .close,
  input[type="checkbox"] {
    display: none;
  }
  @media only screen and (min-width: 768px) {

    .nav__toggle {
      display: none;
    }
    .l_global_parent {
      flex-direction: row;
    }
    .l_global_parent li {
      display: block;
    }
  }
</style>