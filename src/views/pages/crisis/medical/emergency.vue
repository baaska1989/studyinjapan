<template>
  <main style="padding: 30px">
    <div id="MainTextCnt">

      <div class="lifeH3"><h3 class="llText">{{$t("emergency.head_title")}}</h3></div>

      <div class="w660 cenObj">
        <div class="padT20 marB20">
          <table cellspacing="5" cellpadding="0" border="0" class="lifeHeadMenu">
            <tbody><tr>
              <td><a href="#1">{{$t("emergency.link1")}}</a></td>
              <td><a href="#2">{{$t("emergency.link2")}}</a></td>
            </tr>
            </tbody></table>
        </div>

        <p>{{$t("emergency.text1")}}<br>
          <br>
          {{$t("emergency.text2")}}</p>

        <div class="lifeH4 padT15"><h4><a id="1">{{$t("emergency.title1")}}e</a></h4></div>
        <p class="padT15">{{$t("emergency.text1_1")}}</p>

        <ul class="padT15 padL15">
          <li>1. {{$t("emergency.li1_1")}}</li>
          <li>2. {{$t("emergency.li1_2")}}</li>
          <li>3. {{$t("emergency.li1_3")}}</li>
          <li>4. {{$t("emergency.li1_4")}}</li>
          <li>5. {{$t("emergency.li1_5")}}</li>
          <li>6. {{$t("emergency.li1_6")}}</li>
          <li>7. {{$t("emergency.li1_7")}}</li>
        </ul>
        <p class="padT15">{{$t("emergency.text1_2")}}</p>

        <div class="padT15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.tfd.metro.tokyo.jp/lfe/kyuu-adv/tksei01.html" target="_blank">{{$t("emergency.text1_link1")}}</a></li>
          </ul>
        </div>

        <p class="padT10">{{$t("emergency.text1_3")}}<br>
          <br>
          {{$t("emergency.text1_4")}}<br>
          <br>
          {{$t("emergency.text1_5")}}<br>
          <br>
          {{$t("emergency.text1_6")}}</p>

        <div class="padT15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.tfd.metro.tokyo.jp/kb/sho.htm" target="_blank">{{$t("emergency.text1_link2")}}</a></li>
          </ul>
        </div>

        <p class="padT15">{{$t("emergency.text1_7")}}</p>
        <ul class="padT15 padL15">
          <li>1. {{$t("emergency.li2_1")}}</li>
          <li>2. {{$t("emergency.li2_2")}}</li>
          <li>3. {{$t("emergency.li2_3")}}</li>
          <li>4. {{$t("emergency.li2_4")}}</li>
        </ul>

        <div class="lifeH4 padT15"><h4><a id="2">{{$t("emergency.title2")}}</a></h4></div>
        <p class="padT15">{{$t("emergency.text2_1")}}<br>
          <br>
          {{$t("emergency.text2_2")}}</p>

        <div class="padT15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.tfd.metro.tokyo.jp/kb/index.htm" target="_blank">{{$t("emergency.text2_link1")}}</a></li>
          </ul>
        </div>

        <p class="padT15">{{$t("emergency.text2_3")}}<br>
          {{$t("emergency.text2_4")}}</p>

        <div class="padT15">
          <ul class="helpSite helpbgimgEn">
            <li><a href="http://www.himawari.metro.tokyo.jp/qq/qq13tomnlt.asp" target="_blank">{{$t("emergency.text2_link2")}}</a></li>
          </ul>
        </div>

        <p class="padT15">{{$t("emergency.text2_5")}}<br>
          <br>
          {{$t("emergency.text2_6")}}<br>
          <br>
          {{$t("emergency.text2_7")}}<br>
          <br>
          {{$t("emergency.text2_8")}}</p>
      </div>
    </div>
  </main>
</template>