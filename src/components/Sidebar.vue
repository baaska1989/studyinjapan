<template>
  <nav class="l_global">
    <input type="checkbox" id="nav__checkbox" class="nav__checkbox">
    <label for="nav__checkbox" class="nav__toggle">
      <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" class="hamburger" />
      <img src="https://img.icons8.com/plumpy/30/000000/x.png" class="close" />
    </label>

    <ul class="l_global_parent">
      <li>
        <a v-b-toggle="'collapse-2'" class="l_global_parent_label js_globalnav" data-rel="child">
          <span class="l_global_parent_label_en">Яагаад Японд суралцах вэ?</span>
        </a>
        <b-collapse id="collapse-2" visible accordion="my-accordion" >
<!--          visible-->
        <ul id="collapse-1" class="l_global_child js_globalnav_wrapper" data-rel="child">
          <li><router-link to="/why/attraction">Японд суралцахын давуу тал</router-link></li>
          <li><router-link to="/why/feedback">Японд яагаад ирж сурах болов?<br>Одоо сурч буй гадаад оюутнуудаас асууж үзлээ!</router-link></li>
        </ul>
        </b-collapse>
      </li>
      <li class="is_planning">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-3'" data-rel="child">
          <span class="l_global_parent_label_en">Японд суралцах талаар төлөвлөх нь</span>
        </a>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li>
              <router-link to="/plan/system">Японы боловсролын тогтолцоо</router-link>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">Сургуультай танилцах</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/universities">Их дээд сургууль (Бакалаврын хөтөлбөр) болон Богино хугацааны дээд сургууль</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">Магистр, докторын сургууль</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">Техникийн коллеж</router-link></li>
                <li><router-link to="/plan/know/training-colleges">Мэргэжлийн сургалт, үйлдвэрлэлийн коллеж (Мэргэжил олгох хөтөлбөр)</router-link></li>
                <li><router-link to="/plan/know/language-institutes">Япон хэлний сургалтын байгууллага</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-7'" data-rel="uncle">
                Хэв загвараас сонголт хийн Японд сурах төлөвлөгөө гаргах
              </a>
              <b-collapse id="collapse-7">
                <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                  <li><a href="planning/scholarship/index.html">Засгийн газрын тэтгэлгээр суралцах</a></li>
                  <li><a href="planning/by-style/pamphlet/index.html">Японд суралцах тэтгэлэгт хөтөлбөрийн танилцуулга 2022-2023</a></li>
                  <li><a href="planning/by-style/english-program/index.html">Англи хэлээр эрдмийн зэрэг горилох хөтөлбөр</a></li>
                  <li><router-link :to="{name: 'ShortPrograms'}">Богино хугацааны хөтөлбөр</router-link></li>
                  <li><a href="planning/by-style/transfer/index.html">Шилжин суралцах тогтолцоо</a></li>
                </ul>
              </b-collapse>
            </li>
            <li>
              <a href="planning/flow-chart/index.html">Японд сурахад ямар бэлтгэл хийх тухай зураглал</a>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" href="planning/search-school/index.html" data-rel="uncle">Суралцах сургуулиа хайцгаая</a>
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><a href="planning/search-school/daigakukensaku/index.html">Магистр, докторын сургууль, Их, дээд сургуулийн бакалаврын хөтөлбөр, Богино хугацааны дээд сургууль</a></li>
                <li><a href="planning/search-school/kosen/index.html">Техникийн коллеж</a></li>
                <li><a href="planning/search-school/senmongakkou/index.html">Мэргэжлийн сургалт, үйлдвэрлэлийн коллеж</a></li>
                <li><a href="planning/search-school/nihongokyouiku/index.html">Япон хэлний сургалтын байгууллага</a></li>
              </ul>
            </li>
            <li>
              <a href="planning/examination/index.html">Японд суралцахад өгдөг  шалтгалтуудын тухай</a>
            </li>
            <li>
              <a href="planning/academic-fees/index.html">Суралцах зардал</a>
            </li>
            <li>
              <a href="planning/about-scholarship/index.html">Тэтгэлэг</a>
            </li>
            <li>
              <a href="planning/immigration-procedures/index.html">Японы хилээр нэвтрэх процесс, баримт бичигын бүрдүүлэлт болон оршин суух зөвшөөрлийн тухай</a>
            </li>
          </ul>
        </b-collapse>
      </li>
      <li class="is_life">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-4'" data-rel="child">
          <span class="l_global_parent_label_en">Япон дахь амьдрал</span>
        </a>
        <b-collapse id="collapse-4" accordion="my-accordion">
        <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
          <li><a href="life/livingcost-price/index.html">Амьжиргааны зардал болон өртөг</a></li>
          <li><a href="life/accomodation/index.html">Амьдрах байр сууц</a></li>
          <li><a href="life/insurance/index.html">Даатгал</a></li>
          <li><a href="life/zairyuinjapan/index.html">Оршин суух зөвшөөрөлтэй холбоотой зүйлс</a></li>
          <li><a href="life/support/index.html">Орон нутгийн засаг захиргаанаас өгөх дэмжлэг</a></li>
        </ul>
        </b-collapse>
      </li>
      <li class="is_job">
        <a class="l_global_parent_label js_globalnav" data-rel="child" v-b-toggle="'collapse-5'">
          <span class="l_global_parent_label_en">Японд хөдөлмөр эрхлэх нь</span>
        </a>
        <b-collapse id="collapse-5" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li><a href="job/parttime-works/index.html">Цагийн ажил</a></li>
            <li><a href="job/internship/index.html">Мэргэжлийн дадлага</a></li>
            <li><a href="job/employment/index.html">Японд ажилд орох</a></li>
            <li><a href="job/immigration-procedures/index.html">Хөдөлмөр эрхлэхтэй холбогдуулан оршин суух зөвшөөрлийн ангилал өөрчлөх тухай</a></li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data()
  {
    return {

    }
  }
}
</script>

<style>
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