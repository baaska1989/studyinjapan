<template>
  <main class="l_container_main_body">
    <section class="p_top_menu">
      <h2 class="p_top_heading p_top_heading_menu"><span>{{ $t("homePage.title1") }}</span></h2>
      <div class="p_top_menu_list">
        <a class="p_top_menu_list_item p_top_menu_button" href="nav-applicants-for-study-abroad.html">{{ $t("homePage.text1_1") }}</a>
        <a class="p_top_menu_list_item p_top_menu_button is_purple" href="nav-studying-in-japan.html">{{ $t("homePage.text1_2") }}</a>
        <a class="p_top_menu_list_item p_top_menu_button is_green" href="nav-finished-studying-in-japan.html">{{ $t("homePage.text1_3") }}</a>
      </div>
    </section>

    <section class="p_search_menu">
      <h2 class="p_top_heading p_top_heading_menu"><span>{{ $t("homePage.title2") }}</span></h2>
      <div class="p_search_menu_list">
        <a class="p_search_menu_list_item p_search_menu_button" href="https://www.studyinjapan.go.jp/en/search-school/school_search.php?lang=en"><img src="assets/images/top/icon_school.svg" class="ic">{{ $t("homePage.text2_1") }}</a>
        <a class="p_search_menu_list_item p_search_menu_button is_sec" href="https://www.studyinjapan.go.jp/en/search-scholarship/gakuhi_genmen_search.php?lang=en"><img src="assets/images/top/icon_money.svg" class="ic">{{ $t("homePage.text2_2") }}</a>
        <a class="p_search_menu_list_item p_search_menu_button is_six" href="https://www.studyinjapan.go.jp/en/search-shorttermprogram/short_program_search.php?lang=en"><img src="assets/images/top/icon_short.svg" class="ic">{{ $t("homePage.text2_3") }}</a>
      </div>
    </section>

  </main>
</template>

<script>
  export default {
    name: "Home",
    data()
    {
      return {

      }
    }
  }
</script>


<style scoped>

</style>