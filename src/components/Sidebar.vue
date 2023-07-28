<template>
  <nav class="l_global">
    <ul class="l_global_parent">
      <li>
        <a v-b-toggle="'collapse-2'" class="l_global_parent_label js_globalnav" data-rel="child">
          <span class="l_global_parent_label_en">{{$t("menu.sb10")}}</span>
        </a>
        <b-collapse id="collapse-2" accordion="my-accordion" >
        <ul id="collapse-1" class="l_global_child js_globalnav_wrapper" data-rel="child">
          <li><router-link to="/attraction/economy">{{$t("menu.sb11")}}</router-link></li>
          <li><router-link to="/attraction/culture">{{$t("menu.sb12")}}</router-link></li>
          <li><router-link to="/attraction/environment">{{$t("menu.sb13")}}</router-link></li>
          <li><router-link to="/attraction/diversity">{{$t("menu.sb14")}}</router-link></li>
          <li><router-link to="/attraction/numbers">{{$t("menu.sb15")}}</router-link></li>
        </ul>
        </b-collapse>
      </li>
      <li class="is_planning">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-3'" data-rel="child">
          <span class="l_global_parent_label_en"> {{$t("menu.sb20")}}</span>
        </a>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li>
              <router-link to="/plan/system">{{$t("menu.sb21")}}</router-link>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-6'" data-rel="uncle">{{$t("menu.sb22")}}</a>
              <b-collapse id="collapse-6">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/plan/know/language-schools">{{$t("menu.sb23")}}</router-link></li>
                <li><router-link to="/plan/know/training-colleges">{{$t("menu.sb24")}}</router-link></li>
                <li><router-link to="/plan/know/technology-colleges">{{$t("menu.sb25")}}</router-link></li>
                <li><router-link to="/plan/know/universities">{{$t("menu.sb26")}}</router-link></li>
                <li><router-link to="/plan/know/graduate-schools">{{$t("menu.sb27")}}</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-7'" data-rel="uncle">
                {{$t("menu.sb30")}}
              </a>
              <b-collapse id="collapse-7">
                <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                  <li><router-link to="/plan/style/government">  {{$t("menu.sb31")}}</router-link></li>
                  <li><router-link to="/plan/style/private"></router-link>{{$t("menu.sb32")}}</li>
                  <li><router-link to="/plan/style/english-taught">{{$t("menu.sb33")}}</router-link></li>
                  <li><router-link to="/plan/style/short-term"></router-link>{{$t("menu.sb34")}}</li>
                  <li><router-link to="/plan/style/transfer"></router-link>
                    {{$t("menu.sb35")}}
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li>
              <router-link to="/plan/chart">{{$t("menu.sb36")}}</router-link>
            </li>
            <li>
              <router-link to="/plan/exams"> {{$t("menu.sb37")}}</router-link>
            </li>
            <li>
              <router-link to="/plan/expenses"> {{$t("menu.sb38")}}</router-link>
            </li>
            <li>
              <router-link to="/plan/scholarships">{{$t("menu.sb39")}}</router-link>
            </li>
            <li>
              <router-link to="/plan/immigration"> {{$t("menu.sb35")}}</router-link>
            </li>
          </ul>
        </b-collapse>
      </li>
      <li class="is_life">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-4'" data-rel="child">
          <span class="l_global_parent_label_en">
            {{$t("menu.sb40")}}
          </span>
        </a>
        <b-collapse id="collapse-4" accordion="my-accordion">
        <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
          <li><router-link to="/life/cost"> {{$t("menu.sb41")}}</router-link></li>
          <li><router-link to="/life/residence">{{$t("menu.sb42")}}</router-link></li>
          <li><router-link to="/life/insurance">{{$t("menu.sb43")}}</router-link></li>
          <li><router-link to="/life/study-residence"> {{$t("menu.sb44")}}</router-link></li>
          <li><router-link to="/life/support"> {{$t("menu.sb45")}}</router-link></li>
        </ul>
        </b-collapse>
      </li>
      <li class="is_crisis">
        <a class="l_global_parent_label js_globalnav" v-b-toggle="'collapse-5'" data-rel="child">
          <span class="l_global_parent_label_en">
            {{$t("menu.sb50")}}
          </span>
        </a>
        <b-collapse id="collapse-5" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-50'" data-rel="uncle"> {{$t("menu.sb51")}}</a>
              <b-collapse id="collapse-50">
               <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/crisis/earthquake/daily">{{$t("menu.sb52")}}</router-link></li>
                <li><router-link to="/crisis/earthquake/do">  {{$t("menu.sb53")}}</router-link></li>
                <li><router-link to="/crisis/earthquake/preparation">{{$t("menu.sb54")}}</router-link></li>
                <li><router-link to="/crisis/earthquake/phone">" {{$t("menu.sb55")}}"</router-link></li>
                <li><router-link to="/crisis/earthquake/evacuate">{{$t("menu.sb56")}}</router-link></li>
                <li><router-link to="/crisis/earthquake/strike"> {{$t("menu.sb57")}}</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-51'" data-rel="uncle">
                {{$t("menu.sb60")}}
              </a>
              <b-collapse id="collapse-51">
                <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                  <li><router-link to="/crisis/fire/handle">  {{$t("menu.sb61")}}</router-link></li>
                  <li><router-link to="/crisis/fire/case">{{$t("menu.sb62")}}</router-link></li>
                </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-52'" data-rel="uncle">{{$t("menu.sb63")}}</a>
              <b-collapse id="collapse-52">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/crisis/accident/safety"> {{$t("menu.sb64")}}</router-link></li>
                <li><router-link to="/crisis/accident/crime">{{$t("menu.sb65")}}</router-link></li>
                <li><router-link to="/crisis/accident/bicycles"> {{$t("menu.sb66")}}!</router-link></li>
                <li><router-link to="/crisis/accident/car">{{$t("menu.sb67")}}</router-link></li>
              </ul>
              </b-collapse>
            </li>
            <li>
              <a class="l_global_child_label js_globalnav" v-b-toggle="'collapse-53'" data-rel="uncle">
                {{$t("menu.sb70")}}
              </a>
              <b-collapse id="collapse-53">
              <ul class="l_global_uncle js_globalnav_wrapper" data-rel="uncle">
                <li><router-link to="/crisis/medical/cold">{{$t("menu.sb71")}}</router-link></li>
                <li><router-link to="/crisis/medical/sick">{{$t("menu.sb72")}}</router-link></li>
                <li><router-link to="/crisis/medical/emergency">{{$t("menu.sb73")}}</router-link></li>
                <li><router-link to="/crisis/medical/insurance">{{$t("menu.sb74")}}</router-link></li>
              </ul>
              </b-collapse>
            </li>
          </ul>
        </b-collapse>
      </li>
      <li class="is_job">
        <a class="l_global_parent_label js_globalnav" data-rel="child" v-b-toggle="'collapse-60'">
          <span class="l_global_parent_label_en">
            {{$t("menu.sb80")}}
          </span>
        </a>
        <b-collapse id="collapse-60" accordion="my-accordion">
          <ul class="l_global_child js_globalnav_wrapper" data-rel="child">
            <li><router-link to="/work/part-time" >{{$t("menu.sb81")}}</router-link></li>
            <li><router-link to="/work/intern-ship" >{{$t("menu.sb82")}}</router-link></li>
            <li><router-link to="/work/employment">{{$t("menu.sb83")}}</router-link></li>
            <li><router-link to="/work/change-status">{{$t("menu.sb84")}}</router-link></li>
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

</style>