<template>
  <main class="l_container_main_body">

    <h1 class="m_section_heading m_heading_lv1">{{$t("employmentJapan.head_title")}}</h1>

    <div class="m_section wysiwyg">
      <ul class="m_list m_list_anchor">
        <li><a href="#001">1. {{$t("employmentJapan.title_line1")}}</a></li>
        <li><a href="#002">2. {{$t("employmentJapan.title_line2")}}</a></li>
        <li><a href="#003">3. {{$t("employmentJapan.title_line3")}}</a></li>
        <li><a href="#004">4. {{$t("employmentJapan.title_line4")}}</a></li>
      </ul>

      <h2 id="001">1. {{$t("employmentJapan.big_title1")}}</h2>
      <p>{{$t("employmentJapan.text1")}}</p>

      <div class="tableA">
        <div class="tableSub">
          <p><strong><a href="general-info/injapan.html">{{$t("employmentJapan.link1")}}</a></strong></p>
          <p><strong><a href="general-info/recruit.html">{{$t("employmentJapan.link2")}}</a></strong></p>
          <p><strong><a href="general-info/schedule.html">{{$t("employmentJapan.link3")}}</a></strong></p>
          <p><strong><a href="general-info/examinations.html">{{$t("employmentJapan.link4")}}</a></strong></p>
          <p><strong><a href="general-info/status.html">{{$t("employmentJapan.link5")}}</a></strong></p>
        </div>
        <div class="tableSub"><img width="220" height="165" class="mt-image-none" alt="syukatu01.png" src="public/_mt/2021/01/syukatu01.png"></div>
      </div>

      <h2 id="002">2. {{$t("employmentJapan.big_title2")}}</h2>
      <h3>1) {{$t("employmentJapan.title2_1")}}</h3>
      <p>{{$t("employmentJapan.text2_1")}}</p>
      <ul class="m_list m_list_link">
        <li><a href="https://www.jasso.go.jp/en/ryugaku/after_study_j/job/guide.html" target="_blank">{{$t("employmentJapan.link2_1")}}</a></li>
      </ul>
      <h3>2) {{$t("employmentJapan.title2_2")}}</h3>
      <p>{{$t("employmentJapan.text2_2")}}</p>
      <h4>{{$t("employmentJapan.text_bold")}}</h4>
      <ol>
        <li>{{$t("employmentJapan.li1")}}</li>
        <li>{{$t("employmentJapan.li2")}}</li>
        <li>{{$t("employmentJapan.li3")}}</li>
        <li>{{$t("employmentJapan.li4")}}</li>
        <li>{{$t("employmentJapan.li5")}}</li>
      </ol>
      <div class="m_box">
        <ul class="m_list m_list_link">
          <li><a href="https://jsite.mhlw.go.jp/tokyo-foreigner/english.html" target="_blank">{{$t("employmentJapan.link2_21")}}</a></li>
          <li><a href="https://jsite.mhlw.go.jp/aichi-foreigner/english.html" target="_blank">{{$t("employmentJapan.link2_22")}}</a></li>
          <li><a href="https://jsite.mhlw.go.jp/osaka-foreigner/e-toppage.html" target="_blank">{{$t("employmentJapan.link2_23")}}</a></li>
          <li><a href="https://jsite.mhlw.go.jp/fukuoka-young/center_oshirase/news_topics/_112077_00009.html" target="_blank">{{$t("employmentJapan.link2_24")}}</a></li>
        </ul>
      </div>

      <h3>3) {{$t("employmentJapan.title2_3")}}</h3>
      <p>{{$t("employmentJapan.text2_31")}}</p>
      <div class="m_box">
        <p>{{$t("employmentJapan.text2_32")}}</p>
      </div>
      <h3>4) {{$t("employmentJapan.title2_4")}}</h3>
      <p>{{$t("employmentJapan.text2_41")}}</p>
      <div class="m_box">
        <p>{{$t("employmentJapan.text2_42")}}</p>
      </div>

      <h2 id="003">3. {{$t("employmentJapan.big_title3")}}</h2>
      <p>{{$t("employmentJapan.text3_1")}}</p>
      <ul class="m_list m_list_link">
        <li><a href="https://www.check-roudou.mhlw.go.jp/soudan/foreigner_eng.html" target="_blank">{{$t("employmentJapan.link3_1")}}</a></li>
      </ul>

      <h2 id="004">4. {{$t("employmentJapan.big_title4")}}</h2>
      <p>Японы Их, дээд сургууль<span class="u_font_xsm">※1</span> {{$t("employmentJapan.text4_1")}}</p>
      <ul class="m_list m_list_notice_num">
        <li>{{$t("employmentJapan.li4_1")}}</li>
        <li>{{$t("employmentJapan.li4_2")}}</li>
        <li>{{$t("employmentJapan.li4_3")}}</li>
      </ul>
    </div>
    <!-- /.m_section.wysiwyg -->

  </main>
</template>

<script>
export default {
  name: "Employment"
}
</script>