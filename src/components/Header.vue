<template>
  <header class="l_header">

    <div class="l_utility l_utility_tools study-header">
      <div class="l_header_logo">
        <a href="index.html">
          <picture>
            <source media="(max-width: 767px)" srcset="@/assets/images/logo.png">
            <img src="@/assets/images/logo.png" alt="Study in Japan">
          </picture>
        </a>
      </div>
      <div class="l_utility_column">

        <div class="l_utility_column_item l_utility_column_item_tools">
          <form id="cse-search-box" action="https://google.com/cse" target="_blank" class="l_utility_search">
            <input type="text" name="q" size="31" :placeholder="$t('menu.search2')" class="l_utility_search_input">
            <input type="submit" name="sa" :value="$t('menu.search')" id="search_btn" class="l_utility_search_submit">
            <input type="hidden" name="cx" value="001053951043051989747:tsw40oj1f_w">
            <input type="hidden" name="ie" value="UTF-8">
          </form>

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
</template>

<script>
import data from "@/helper/translate.json";

export default {
  name: "Layout",

  data()
  {
    return {
      mn: data.mn.menu,

      isFixed: false,
      showMobileMenu: false,
    }
  },
  created() {
console.log(this.mn);
  },
  mounted() {
    document.body.classList.remove("nav-display");
    document.body.classList.remove("is_fixed");
    document.body.classList.remove("nav-display1");
  },
  methods: {
    changeLang()
    {
      if (this.lang == "mn")
      {
        this.$i18n.locale = "mn";
      }
      if (this.lang == "en")
      {
        this.$i18n.locale = "en";
      }
      if (this.lang == "jp")
      {
        this.$i18n.locale = "jp";
      }
    },

    changeSizeBig()
    {
      document.documentElement.classList.add("MyClass");
    },
    changeSizeNormal()
    {
      document.documentElement.classList.remove("MyClass");
    },
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
@import "@/assets/css/style.css";
@import "@/assets/css/overwrite.css";
@import "@/assets/css/pages/top.css";
@import "@/assets/css/slick.css";
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
<script setup>
</script>