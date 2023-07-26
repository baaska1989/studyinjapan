<template>
  <main class="l_container_main_body">

    <h1 class="m_section_heading m_heading_lv1">{{$t("partTime.head_title")}}</h1>

    <div class="m_section wysiwyg">
      <p>{{$t("partTime.text1")}}</p>
      <div style="border: #808000 double 6px; border-radius: 15px; padding: 15px;">
        <p style="font-size: 18px; font-weight: bold;">{{$t("partTime.frame1_text")}}</p>
        <ol>
          <li>{{$t("partTime.frame1_line1")}}</li>
          <li>{{$t("partTime.frame1_line2")}}</li>
          <li>{{$t("partTime.frame1_line3")}}</li>
          <li>{{$t("partTime.frame1_line4")}}</li>
          <li><strong>{{$t("partTime.frame1_line5_bold")}}</strong>{{$t("partTime.frame1_line5")}}</li>
          <li>{{$t("partTime.frame1_line6")}}</li>
        </ol>
      </div>
      <h2>{{$t("partTime.big_title")}}</h2>
      <p>{{$t("partTime.text2")}}</p>
      <h3>◎ {{$t("partTime.title1")}}</h3>
      <p>{{$t("partTime.text3")}}</p>
      <h3>◎ {{$t("partTime.title2")}}</h3>
      <p>{{$t("partTime.text4")}}</p>
      <h3>◎ {{$t("partTime.title3")}}</h3>
      <p>{{$t("partTime.text5")}}</p>
      <div style="display: inline-block; background: #000080; padding: 5px 10px; color: #ffffff; font-weight: bold;">{{$t("partTime.advice_title")}}</div>
      <div style="padding: 10px; border: 2px solid #000080;">{{$t("partTime.advice_text")}}</div>
      <h3>{{$t("partTime.table1_title")}}</h3>
      <table><colgroup> <col style="width: 10%;" /> <col style="width: 80%;" /> <col style="width: 10%;" /> </colgroup>
        <thead>
        <tr>
          <td></td>
          <th scope="col">{{$t("partTime.table1_row0_2")}}</th>
          <th scope="col">{{$t("partTime.table1_row0_3")}}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th class="u_text_center">1</th>
          <td>{{$t("partTime.table1_row1")}}</td>
          <td class="u_text_right">35.0%</td>
        </tr>
        <tr>
          <th class="u_text_center">2</th>
          <td>{{$t("partTime.table1_row2")}}</td>
          <td class="u_text_right">30.2%</td>
        </tr>
        <tr>
          <th class="u_text_center">3</th>
          <td>{{$t("partTime.table1_row3")}}</td>
          <td class="u_text_right">6.1%</td>
        </tr>
        <tr>
          <th class="u_text_center">4</th>
          <td>{{$t("partTime.table1_row4")}}</td>
          <td class="u_text_right">5.6%</td>
        </tr>
        <tr>
          <th class="u_text_center">5</th>
          <td>{{$t("partTime.table1_row5")}}</td>
          <td class="u_text_right">3.9%</td>
        </tr>
        <tr>
          <th class="u_text_center">6</th>
          <td>{{$t("partTime.table1_row6")}}</td>
          <td class="u_text_right">3.5%</td>
        </tr>
        <tr>
          <th class="u_text_center">7</th>
          <td>{{$t("partTime.table1_row7")}}</td>
          <td class="u_text_right">3.2％</td>
        </tr>
        <tr>
          <th class="u_text_center">8</th>
          <td>{{$t("partTime.table1_row8")}}</td>
          <td class="u_text_right">2.9%</td>
        </tr>
        <tr>
          <th class="u_text_center">8</th>
          <td>{{$t("partTime.table1_row9")}}</td>
          <td class="u_text_right">2.9%</td>
        </tr>
        </tbody>
      </table>
      <h3>{{$t("partTime.table2_title")}}</h3>
      <table><colgroup> <col style="width: 80%;" /> <col style="width: 20%;" /> </colgroup>
        <thead>
        <tr>
          <th scope="col">{{$t("partTime.table2_row0_1")}}</th>
          <th scope="col">{{$t("partTime.table2_row0_2")}}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{$t("partTime.table2_row1")}}</td>
          <td class="u_text_right">2.0%</td>
        </tr>
        <tr>
          <td>{{$t("partTime.table2_row2")}}</td>
          <td class="u_text_right">36.6%</td>
        </tr>
        <tr>
          <td>{{$t("partTime.table2_row3")}}</td>
          <td class="u_text_right">45.2%</td>
        </tr>
        <tr>
          <td>{{$t("partTime.table2_row4")}}</td>
          <td class="u_text_right">11.1%</td>
        </tr>
        <tr>
          <td>{{$t("partTime.table2_row5")}}</td>
          <td class="u_text_right">5.1%</td>
        </tr>
        </tbody>
      </table>
      <div style="border: #808000 double 6px; border-radius: 15px; font-size: 100%; padding: 15px;">
        <p style="color: #ff00ff; font-size: 24px; font-weight: bold; text-align: center;">{{$t("partTime.frame2_title1")}}</p>
        <p style="font-size: 18px; font-weight: bold; text-align: center;">{{$t("partTime.frame2_title2")}}</p>
        <p>{{$t("partTime.frame2_text1")}} ⇒ <span style="color: #ff0000; font-size: 24px; font-weight: bold;">×</span> {{$t("partTime.frame2_text1_1")}}</p>
        <p>{{$t("partTime.frame2_text2")}} ⇒ <span style="color: #ff0000; font-size: 24px; font-weight: bold;">× </span>{{$t("partTime.frame2_text2_1")}}</p>
        <p style="text-align: right;">{{$t("partTime.frame2_text4")}}</p>
        <p style="text-align: right;">{{$t("partTime.frame2_text5")}}</p>
      </div>
    </div>
    <!-- /.m_section.wysiwyg -->

  </main>
</template>
<script>

</script>