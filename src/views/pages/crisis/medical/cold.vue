<template>
  <main style="padding: 30px">
    <div id="MainTextCnt">

      <div class="lifeH3"><h3>{{$t("catchingCold.title1")}}</h3></div>

      <div class="w660 cenObj">
        <div class="padT20 marB20">
          <table cellspacing="5" cellpadding="0" border="0" class="lifeHeadMenu">
            <tbody><tr>
              <td><a href="#1">{{$t("catchingCold.link1")}}</a></td>
              <td><a href="#2">{{$t("catchingCold.link2")}}</a></td>
            </tr>
            <tr>
              <td><a href="#3">{{$t("catchingCold.link3")}}</a></td>
              <td><a href="#4">{{$t("catchingCold.link4")}}</a></td>
            </tr>
            </tbody></table>
        </div>

        <p>{{$t("catchingCold.text1_1")}}<br>
          <br>
          {{$t("catchingCold.text1_2")}}</p>

        <div class="lifeH4 padT15"><h4><a id="1">{{$t("catchingCold.title2")}}</a></h4></div>
        <p class="padT15">{{$t("catchingCold.text2_1")}}</p>

        <div class="boxed marT10">
          <p class="padT5">1. {{$t("catchingCold.li1_title")}}</p>
          <p class="padT10">{{$t("catchingCold.li1_text")}}</p>
        </div>
        <div class="boxed marT10">
          <p class="padT5">2. {{$t("catchingCold.li2_title")}}</p>
          <p class="padT10">{{$t("catchingCold.li2_text")}}</p>
        </div>
        <div class="boxed marT10">
          <p class="padT5">3. {{$t("catchingCold.li3_title")}}</p>
          <p class="padT10">{{$t("catchingCold.li3_text")}}</p>
        </div>
        <div class="boxed marT10">
          <p class="padT5">4. {{$t("catchingCold.li4_title")}}</p>
          <p class="padT10">{{$t("catchingCold.li4_text1")}}<br>
            <br>
            {{$t("catchingCold.li4_text2")}}</p>
        </div>


        <div class="lifeH4"><h4><a id="2">{{$t("catchingCold.title3")}}</a></h4></div>
        <p class="padT15">{{$t("catchingCold.text3")}}</p>

        <div class="lifeH4"><h4><a id="3">{{$t("catchingCold.title4")}}</a></h4></div>
        <p class="padT15">{{$t("catchingCold.text4_1")}}</p>

        <div class="lifeH5 padT10 padB5"><h5>{{$t("catchingCold.title4_title1")}}</h5></div>
        <ul class="padL15 padB20">
          <li>1-1. {{$t("catchingCold.li4_1")}}</li>
          <li>1-2. {{$t("catchingCold.li4_2")}}</li>
          <li>1-3. {{$t("catchingCold.li4_3")}}</li>
          <li>1-4. {{$t("catchingCold.li4_4")}}</li>
        </ul>

        <p class="padT15">{{$t("catchingCold.text4_2")}}</p>

        <div class="padT10 marB15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/infulenza/index.html" target="_blank">{{$t("catchingCold.text4_link")}}</a></li>
          </ul>
        </div>

        <div class="lifeH4"><h4><a id="4">{{$t("catchingCold.title5")}}</a></h4></div>
        <p class="padT15">{{$t("catchingCold.text5_1")}}<br>
          <br>
          {{$t("catchingCold.text5_2")}}</p>

        <div class="padT10 marB15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou01/inful_consult.html" target="_blank">{{$t("catchingCold.text5_link")}}</a></li>
          </ul>
        </div>

        <p class="padT15">{{$t("catchingCold.text5_3")}}</p>

      </div>
    </div>
  </main>
</template>