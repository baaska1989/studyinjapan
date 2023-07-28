<template>

  <main class="l_container_main_body">

    <h1 class="m_section_heading m_heading_lv1">{{$t("internship.head_title")}}</h1>

    <div class="m_section wysiwyg">
      <p>{{$t("internship.head_text1")}} <br>
        {{$t("internship.head_text2")}}</p>

      <h2>{{$t("internship.title1")}}</h2>
      <p><strong>{{$t("internship.text11_bold")}}</strong> {{$t("internship.text11")}} </p>
      <p><strong>{{$t("internship.text12_bold")}}</strong> {{$t("internship.text12")}}</p>

      <h2>{{$t("internship.title2")}}</h2>
      <p><strong>{{$t("internship.text21_bold")}}</strong> {{$t("internship.text21")}}</p>
      <p><strong>{{$t("internship.text32_bold")}}</strong> {{$t("internship.text32")}}<br></p>

      <h2>{{$t("internship.title3")}}</h2>
      <p>{{$t("internship.text31")}}</p>

      <div style="background: #1e90ff; border: 1px solid #1e90ff; padding-left: 30px; margin-top:30px; color: #fff;">{{$t("internship.frame1_title")}}</div>
      <div style="border: 1px solid #1e90ff; font-size: 100%; padding: 20px;">
        {{$t("internship.frame1_text1")}}<br>
        {{$t("internship.frame1_text2")}}<br>
        {{$t("internship.frame1_text3")}}</div>

      <div style="background: #1e90ff; border: 1px solid #1e90ff; padding-left: 30px; margin-top:30px; color: #fff;">{{$t("internship.frame2_title")}}</div>
      <div style="border: 1px solid #1e90ff; font-size: 100%; padding: 20px;">
        {{$t("internship.frame2_text1")}}<br>
        {{$t("internship.frame2_text2")}}<br>
        {{$t("internship.frame2_text3")}} <a href="https://jsite.mhlw.go.jp/tokyo-foreigner/" target="_blank">https://jsite.mhlw.go.jp/tokyo-foreigner/</a><br>
        {{$t("internship.frame2_text4")}} <a href="https://jsite.mhlw.go.jp/aichi-foreigner/" target="_blank">https://jsite.mhlw.go.jp/aichi-foreigner/</a><br>
        {{$t("internship.frame2_text5")}} <a href="https://jsite.mhlw.go.jp/osaka-foreigner/" target="_blank">https://jsite.mhlw.go.jp/osaka-foreigner/</a>
      </div>
    </div>
    <!-- /.m_section.wysiwyg -->

  </main>

</template>

<script>
export default {
  name: "internShip"
}
</script>