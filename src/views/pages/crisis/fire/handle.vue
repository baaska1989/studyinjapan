<template>
  <main style="padding: 30px;">
    <div id="MainTextCnt">

      <div class="lifeH3"><h3 class="llText">{{ $t("crisis.fire.handle.h1") }}</h3></div>

      <div class="w660 cenObj">
        <div class="padT20 marB20">
          <table cellspacing="5" cellpadding="0" border="0" class="lifeHeadMenu">
            <tbody><tr>
              <td><a href="#1">{{ $t("crisis.fire.handle.l1") }}</a></td>
              <td><a href="#2">{{ $t("crisis.fire.handle.l2") }}</a></td>
            </tr>
            </tbody></table>
        </div>
        <p>{{ $t("crisis.fire.handle.t1") }}</p>

        <div class="lifeH4 padT15"><h4><a id="1">{{ $t("crisis.fire.handle.t2") }}</a></h4></div>
        <p class="padT15">{{ $t("crisis.fire.handle.h1") }}<br>
          <br>
          {{ $t("crisis.fire.handle.t1_1") }}<br>
          {{ $t("crisis.fire.handle.t1_2") }}<br>
          {{ $t("crisis.fire.handle.t1_3") }}<br>
          {{ $t("crisis.fire.handle.t1_4") }}<br>
          {{ $t("crisis.fire.handle.t1_5") }}</p>

        <div class="lifeH4 padT15"><h4><a id="2">{{ $t("crisis.fire.handle.h2") }}</a></h4></div>
        <p class="padT15">{{ $t("crisis.fire.handle.t2_1") }}</p>

        <ol class="padT15 padL15">
          <li><p>1. {{ $t("crisis.fire.handle.li1_1") }}</p></li>
          <li><p>2. {{ $t("crisis.fire.handle.li1_2") }}</p></li>
          <li><p>3. {{ $t("crisis.fire.handle.li1_3") }}</p></li>
          <li><p>4. {{ $t("crisis.fire.handle.li1_4") }}</p></li>
          <li><p>5. {{ $t("crisis.fire.handle.li1_5") }}</p></li>
          <li><p>6. {{ $t("crisis.fire.handle.li1_6") }}</p></li>
        </ol>
        <p class="padT15">{{ $t("crisis.fire.handle.t2_2") }}</p>

      </div>
    </div>
  </main>
</template>