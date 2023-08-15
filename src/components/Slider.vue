<template>
  <div class="p_top_mainvisual">
    <Search />
    <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true" :autoplaySpeed="8000">

      <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/2020/05/kv_02.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/2020/05/kv_03.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/2020/05/kv_04.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/2020/05/kv_05.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/2020/05/kv_01.jpg" alt=""></span>

    </VueSlickCarousel>

  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Search from "@/components/Search.vue";
export default {
  name: "Slider",
  components: {VueSlickCarousel, Search },
}
</script>
<style scoped>

</style>