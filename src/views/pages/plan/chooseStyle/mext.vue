<script>

</script>

<template>

    <main class="l_container_main_body">

    <h1 class="m_section_heading m_heading_lv1">{{$t("plan.choosestyle.m1")}}</h1>
        <div class="m_section wysiwyg">
            <div class="m_column m_column_col3">
                <router-link class="m_column_item m_card_link m_card_link_pink" to="/plan/style/government/type">
                    <span class="m_card_link_headline">Засгийн газраас санхүүжүүлдэг гадаад оюутны хөтөлбөрийн төрлүүд</span>
                    <span class="m_card_link_footer">Илүү</span>
                </router-link>
                <router-link class="m_column_item m_card_link m_card_link_orange" to="/plan/style/government/requirement">
                    <span class="m_card_link_headline">MEXT тэтгэлэгт оюутнуудад зориулсан өргөдлийн шаардлага</span>
                    <span class="m_card_link_footer">Илүү</span>
                </router-link>
                <router-link class="m_column_item m_card_link" to="/plan/style/government/application">
                    <span class="m_card_link_headline">Ажилд авах сонгон шалгаруулалтын урсгал</span>
                    <ul class="m_card_link_list">
                        <li>Элчин сайдын яамны зөвлөмж</li>
                        <li>их сургуулийн зөвлөмж</li>
                    </ul>
                    <span class="m_card_link_footer">Илүү</span>
                </router-link>
            </div> 
        </div>
    </main>

</template>

<style scoped>

</style>