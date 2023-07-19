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
          <span class="l_global_parent_label_en">Attractiveness of studying in Japan</span>
        </a>
        <b-collapse id="collapse-2" visible accordion="my-accordion" >
        <ul id="collapse-1" class="l_global_child js_globalnav_wrapper" data-rel="child">
          <li><router-link to="/why/economy">Advanced technology and developed economy</router-link></li>
          <li><router-link to="/why/culture">Attractive culture</router-link></li>
          <li><router-link to="/why/environment">Livable living environment</router-link></li>
          <li><router-link to="/why/diversity">Diverse international students</router-link></li>
          <li><router-link to="/why/numbers">Japan in numbers</router-link></li>
        </ul>
        </b-collapse>
      </li>
      <li class="is_planning">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-3'" data-rel="child">
          <span class="l_global_parent_label_en">Study abroad plan</span>
        </a>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li>
              <router-link to="/plan/system">education system</router-link>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">know the school</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/universities">Japanese language institution</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">Specialized training school (specialized course)</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">college of technology</router-link></li>
                <li><router-link to="/plan/know/training-colleges">Universities/junior colleges</router-link></li>
                <li><router-link to="/plan/know/language-institutes">Grad student</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-7'" data-rel="uncle">
                Study abroad style
              </a>
              <b-collapse id="collapse-7">
                <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                  <li><router-link to="/plan/choose/mext">Government-sponsored study abroad</router-link></li>
                  <li><router-link to="/plan/choose/scholarship23">Study abroad at private expense</router-link></li>
                  <li><router-link to="/plan/choose/programs-english">English-taught degree programs</router-link></li>
                  <li><router-link :to="{name: 'ShortPrograms'}">Short-term program</router-link></li>
                  <li><router-link to="/plan/choose/transfer-programs">Transfer admission</router-link></li>
                </ul>
              </b-collapse>
            </li>
            <li>
              <router-link to="/plan/chart">study abroad flowchart</router-link>
            </li>
            <li>
              <a href="planning/examination/index.html">Various exams used for studying in Japan</a>
            </li>
            <li>
              <a href="planning/academic-fees/index.html">study abroad expenses</a>
            </li>
            <li>
              <a href="planning/about-scholarship/index.html">scholarship</a>
            </li>
            <li>
              <a href="planning/immigration-procedures/index.html">About immigration procedures and status of residence</a>
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
      <li class="is_crisis">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-3'" data-rel="child">
          <span class="l_global_parent_label_en">Crisis management in Japan</span>
        </a>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">Earthquake</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/universities">Daily preparation is important</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">What should I do at that moment?</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">Daily preparation</router-link></li>
                <li><router-link to="/plan/know/training-colleges">"Will the phone work in case of a disaster?"</router-link></li>
                <li><router-link to="/plan/know/language-institutes">Where should I evacuate?</router-link></li>
                <li><router-link to="/plan/know/language-institutes">What can I do when disaster strikes?</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-7'" data-rel="uncle">
                fire
              </a>
              <b-collapse id="collapse-7">
                <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                  <li><router-link to="/plan/choose/mext">How to handle heaters</router-link></li>
                  <li><router-link to="/plan/choose/scholarship23">in case of fire</router-link></li>
                </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">Accident</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/universities">Is Japan a safe country?</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">This is a crime!</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">Bicycles are so dangerous!</router-link></li>
                <li><router-link to="/plan/know/training-colleges">Driving a car</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">Medical</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/universities">To avoid catching a cold</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">When I get sick</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">Emergency (nighttime, holiday)</router-link></li>
                <li><router-link to="/plan/know/training-colleges">About the insurance system</router-link></li>
              </ul>
              </b-collapse>
            </li>
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