<template>
  <header class="l_header u_hide_pc">
    <div class="l_header_logo">
      <router-link to="/">
        <picture>
          <source media="(max-width: 767px)" srcset="../../src/assets/images/common/logo_header.png 1x">
        <img src="../../src/assets/images/common/logo_header.png" alt="Study in Japan">
        </picture>
      </router-link>
    </div>
    <button type="button" class="l_header_btn js_drower_btn" aria-label="Цэсийг нээх/хаах">
      <span class="l_header_btn_border"></span>
    </button>

  </header>
</template>
<script>
export default {
  name: "Header"
}
</script>



<style scoped>

</style>