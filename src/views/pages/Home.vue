<template>
  <main class="l_container_main_body">

    <div class="p_top_mainvisual">
      <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="3000">
        <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_02.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_03.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_04.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_05.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_01.jpg" alt=""></span>
      </VueSlickCarousel>

      <div class="p_top_mainvisual_slider js_top_mainvisual">

      </div>

    </div>

    <section class="p_top_menu">
      <h2 class="p_top_heading p_top_heading_menu"><span>хэрэглэгчийг хэлбэрээр ангилсан цэс</span></h2>
      <div class="p_top_menu_list">
        <a class="p_top_menu_list_item p_top_menu_button" href="nav-applicants-for-study-abroad.html">Японд суралцахыг хүссэн танаа</a>
        <a class="p_top_menu_list_item p_top_menu_button is_purple" href="nav-studying-in-japan.html">Японд суралцаж буй танаа</a>
        <a class="p_top_menu_list_item p_top_menu_button is_green" href="nav-finished-studying-in-japan.html">Японд суралцаж төгссөн танаа</a>
      </div>
    </section>

    <section class="p_search_menu">
      <h2 class="p_top_heading p_top_heading_menu"><span>Сургууль хайх (зөвхөн англи хэлээр)</span></h2>
      <div class="p_search_menu_list">
        <a class="p_search_menu_list_item p_search_menu_button" href="https://www.studyinjapan.go.jp/en/search-school/school_search.php?lang=en"><img src="assets/images/top/icon_school.svg" class="ic">Сургууль хайх</a>
        <a class="p_search_menu_list_item p_search_menu_button is_sec" href="https://www.studyinjapan.go.jp/en/search-scholarship/gakuhi_genmen_search.php?lang=en"><img src="assets/images/top/icon_money.svg" class="ic">Тэтгэлэг хайх</a>
        <a class="p_search_menu_list_item p_search_menu_button is_six" href="https://www.studyinjapan.go.jp/en/search-shorttermprogram/short_program_search.php?lang=en"><img src="assets/images/top/icon_short.svg" class="ic">Богино хугацааны хөтөлбөр</a>
      </div>
    </section>

  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: "Home",
    components: { VueSlickCarousel },
    data()
    {
      return {

      }
    }
  }
</script>


<style scoped>

</style>