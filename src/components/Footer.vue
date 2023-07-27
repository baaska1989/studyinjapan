<script>
export default {
  name: "Footer"
}
</script>

<template>
  <div class="l_footer_wrap">
    <nav class="l_footer_nav js_pagetop_endpoint">
      <ul class="l_footer_nav_list">
        <li>
          <div class="l_footer_nav_list_label">
            {{$t("footer.f1")}}
          </div>
          <ul class="l_footer_nav_list_child">
            <li><router-link to="/attraction/economy">{{$t("footer.f2")}}</router-link></li>
            <li><router-link to="/attraction/culture">{{$t("footer.f3")}}</router-link></li>
            <li><router-link to="/attraction/environment">{{$t("footer.f4")}}</router-link></li>
            <li><router-link to="/attraction/diversity">{{$t("footer.f5")}}</router-link></li>
            <li><router-link to="/attraction/numbers">{{$t("footer.f6")}}</router-link></li>
          </ul>
        </li>
        <li>
          <div class="l_footer_nav_list_label">
            {{$t("footer.f7")}}
          </div>
          <ul class="l_footer_nav_list_child">
            <li><a href="planning/educational-system/index.html">{{$t("footer.f8")}}</a></li>
            <li><a href="planning/know-schools/index.html">{{$t("footer.f9")}}</a></li>
            <li><a href="planning/by-style/index.html">
              {{$t("footer.f10")}}
            </a></li>
            <li><a href="planning/flow-chart/index.html">{{$t("footer.f11")}}</a></li>
            <li><a href="planning/search-school/index.html">{{$t("footer.f12")}}</a></li>
            <li><a href="planning/examination/index.html">{{$t("footer.f13")}}</a></li>
            <li><a href="planning/academic-fees/index.html">{{$t("footer.f14")}}</a></li>
            <li><a href="planning/about-scholarship/index.html">{{$t("footer.f15")}}</a></li>
            <li><a href="planning/immigration-procedures/index.html">{{$t("footer.f16")}}</a></li>
          </ul>
        </li>
        <li>
          <div class="l_footer_nav_list_label">{{$t("footer.f17")}}</div>
          <ul class="l_footer_nav_list_child">
            <li><a href="life/livingcost-price/index.html">{{$t("footer.f18")}}</a></li>
            <li><a href="life/accomodation/index.html">{{$t("footer.f19")}}</a></li>
            <li><a href="life/insurance/index.html">
              {{$t("footer.f20")}}
            </a></li>
            <li><a href="life/zairyuinjapan/index.html">{{$t("footer.f21")}}</a></li>
            <li><a href="life/support/index.html">{{$t("footer.f22")}}</a></li>
          </ul>
        </li>
        <li>
          <div class="l_footer_nav_list_label">{{$t("footer.f23")}}</div>
          <ul class="l_footer_nav_list_child">
            <li><router-link to="/work/part-time" >{{$t("footer.f24")}}</router-link></li>
            <li><router-link to="/work/intern-ship" >{{$t("footer.f25")}}</router-link></li>
            <li><router-link to="/work/employment">{{$t("footer.f26")}}</router-link></li>
            <li><router-link to="/work/change-status">{{$t("footer.f27")}}</router-link></li>
          </ul>
        </li>
        <li>
          <div class="l_footer_nav_list_label">{{$t("footer.f28")}}</div>
          <ul class="l_footer_nav_list_child">
            <li><router-link to="/work/part-time" >{{$t("footer.f29")}}</router-link></li>
            <li><router-link to="/work/intern-ship" >{{$t("footer.f30")}}</router-link></li>
            <li><router-link to="/work/employment">{{$t("footer.f31")}}</router-link></li>
            <li><router-link to="/work/change-status">{{$t("footer.f32")}}</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>