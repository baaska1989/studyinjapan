<template>
  <main class="l_container_main_body">

    <h1 class="m_section_heading m_heading_lv1">{{$t("changingStatus.head_title")}}</h1>

    <div class="m_section wysiwyg">
      <h2>{{$t("changingStatus.big_title1")}}</h2>
      <p>{{$t("changingStatus.text1_1")}}</p>

      <h2>1) {{$t("changingStatus.big_title2")}}</h2>
      <p>{{$t("changingStatus.text2_1")}}</p>
      <h3>{{$t("changingStatus.title2_1")}}</h3>
      <h4>{{$t("changingStatus.bold2_1")}}</h4>
      <dl class="p_plan_list_define">
        <dt>ⅰ）{{$t("changingStatus.li1")}}</dt>
        <dd>
          <ul>
            <li>{{$t("changingStatus.li1_1")}}</li>
            <li>{{$t("changingStatus.li1_2")}}</li>
            <li>{{$t("changingStatus.li1_3")}}</li>
            <li>{{$t("changingStatus.li1_4")}}</li>
          </ul>
        </dd>
        <dt>ii) {{$t("changingStatus.li2")}}</dt>
        <dd>
          <ul>
            <li>{{$t("changingStatus.li2_1")}}</li>
            <li>{{$t("changingStatus.li2_2")}}</li>
            <li>{{$t("changingStatus.li2_3")}}</li>
          </ul>
        </dd>
        <dt>iii) {{$t("changingStatus.li3")}}</dt>
        <dd>
          <ul>
            <li>{{$t("changingStatus.li3_1")}}</li>
          </ul>
        </dd>
      </dl>
      <h3>{{$t("changingStatus.title2_2")}}</h3>
      <dl class="p_plan_list_define">
        <dt>i) {{$t("changingStatus.li4")}}</dt>
        <dd>
          <ul>
            <li>{{$t("changingStatus.li4_1")}}</li>
            <li>{{$t("changingStatus.li4_2")}}</li>
            <li>{{$t("changingStatus.li4_3")}}</li>
            <li>{{$t("changingStatus.li4_4")}}</li>
            <li>{{$t("changingStatus.li4_5")}}</li>
            <li>{{$t("changingStatus.li4_6")}}</li>
          </ul>
        </dd>
      </dl>
      <div class="m_box">
        <p>{{ $t("changingStatus.text2_21") }}</p>
        <ul class="m_list m_list_link">
          <li>
            {{ $t("changingStatus.text2_1") }}<br>
            <a href="https://www.moj.go.jp/EN/index.html" target="_blank">https://www.moj.go.jp/EN/index.html</a>
          </li>
        </ul>
      </div>

      <p><strong>{{ $t("changingStatus.li5") }}</strong></p>
      <ul class="m_list m_list_link">
        <li><a href="../../planning/immigration-procedures/index.html" target="_blank" data-blank>{{ $t("changingStatus.link5_1") }}</a></li>
        <li><a href="../../life/zairyuinjapan/index.html" target="_blank" data-blank>{{ $t("changingStatus.link5_2") }}</a></li>
      </ul>
    </div>
    <!-- /.m_section.wysiwyg -->

  </main>
</template>

<script>
export default {
  name: "ChangeStatus"

}
</script>