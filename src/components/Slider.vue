<template>
  <div class="p_top_mainvisual">
    <Search />
    <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true" :autoplaySpeed="6000">
    
        <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/slider/bg1.jpg" alt="" ></span>

        <span class="p_top_mainvisual_slider_item" ><img src="@/assets/_mt/slider/bg2.jpg"  alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/slider/bg3.png" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/slider/bg7.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/slider/bg5.jpg" alt=""></span>

        <span class="p_top_mainvisual_slider_item"><img src="@/assets/_mt/slider/bg6.jpg" alt=""></span>

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