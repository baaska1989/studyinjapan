<template>
  <div id="wrapper" class="l_wrapper p_top">
    <header class="l_header">
      <div class="l_utility l_utility_tools study-header">
        <div class="l_utility_column">

          <div class="l_utility_column_item l_utility_column_item_tools">
            <form id="cse-search-box" action="https://google.com/cse" target="_blank" class="l_utility_search">
              <input type="text" name="q" size="31" :placeholder="$t('menu.search2')" class="l_utility_search_input">
              <input type="submit" name="sa" :value="$t('menu.search')" id="search_btn" class="l_utility_search_submit">
              <input type="hidden" name="cx" value="001053951043051989747:tsw40oj1f_w">
              <input type="hidden" name="ie" value="UTF-8">
            </form>

<!--            <div class="m_fontchange">-->
<!--              <div class="m_fontchange_title">{{$t("menu.fontsize")}}</div>-->
<!--              <div class="m_fontchange_btn">-->
<!--                <input type="radio" name="page_font" value="is_font_md" id="page_font_md" class="m_fontchange_btn_input js_font_control is_active" @click="changeSizeNormal()" checked>-->
<!--                <label for="page_font_md" class="m_fontchange_btn_label">{{$t("menu.standard")}}</label>-->
<!--              </div>-->
<!--              <div class="m_fontchange_btn">-->
<!--                <input type="radio" name="page_font" value="is_font_lg" id="page_font_lg" class="m_fontchange_btn_input js_font_control" @click="changeSizeBig()">-->
<!--                <label for="page_font_lg" class="m_fontchange_btn_label">{{$t("menu.zoom")}}</label>-->
<!--              </div>-->
<!--            </div>-->

            <div class="m_language" lang="mn">
              <label for="page_language" class="m_language_title">{{ $t("menu.lang") }}</label>
              <div class="m_language_select">
                <select name="search_lang" id="page_language" class="js_language_replace" @change="changeLang($event)" v-model="lang">
                  <option value="mn" selected>Монгол</option>
                  <option value="en">English</option>
                  <option value="jp">日本</option>
                </select>
              </div>
            </div>
          </div>

          <div class="l_utility_column_item l_utility_column_item_mail">
            <router-link to="/contact" class="m_btn m_btn_contact">{{$t("menu.contact")}}</router-link>
          </div>
        </div>
      </div>
      <button type="button" class="l_header_btn js_drower_btn" aria-label="Цэсийг нээх/хаах">
        <span class="l_header_btn_border"></span>
      </button>

    </header>
    <Slider />
    <div class="l_container">
      <div class="l_container_inner" >
        <div class="l_container_aside js_drower_nav" :class="this.showMobileMenu ? 'is-open nav-display' : ''">
<!--          <Header />-->
          <Sidebar />
        </div>
        <div class="l_container_main">
<!--          <Search />-->
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>

// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Layout",
  components: {Slider, Sidebar, Footer},
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
  .study-header {
    position: absolute;
    width: 100%;
    z-index: 2;
    background-color: transparent;
  }

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