<template>
  <div class="p_top_mainvisual">
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="4000">

      <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_02.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_03.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_04.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_05.jpg" alt=""></span>

      <span class="p_top_mainvisual_slider_item"><img src="_mt/2020/05/kv_01.jpg" alt=""></span>

    </VueSlickCarousel>

  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "Slider",
  components: { VueSlickCarousel },
}
</script>
<style scoped>

</style>