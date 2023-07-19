import Vue from "vue";
import Router from 'vue-router';
import Layout from '../views/layouts/Layout.vue';
import Home from '../views/pages/Home.vue';
import Contact from "@/views/pages/Contact.vue";
import Attraction from "@/views/pages/whyJapan/attraction.vue";
import Feedback from "@/views/pages/whyJapan/feedback.vue";
import Fees from "@/views/pages/planJapan/academicFees.vue";
import System from "@/views/pages/planJapan/educationalSystem.vue";
import Exams from "@/views/pages/planJapan/exams.vue";
import Chart from "@/views/pages/planJapan/flowChart.vue";
import Immigration from "@/views/pages/planJapan/immigration.vue";
import Scholarship from "@/views/pages/planJapan/scholarships.vue";
import MEXT from "@/views/pages/planJapan/chooseStyle/mext.vue";
import Private from "@/views/pages/planJapan/chooseStyle/privatelyFinanced.vue";
import EnglishPrograms from "@/views/pages/planJapan/chooseStyle/programsEnglish.vue";
import ShortPrograms from "@/views/pages/planJapan/chooseStyle/ShortPrograms.vue";
import TransferPrograms from "@/views/pages/planJapan/chooseStyle/TransferPrograms.vue";
import GraduateSchool from "@/views/pages/planJapan/knowSchools/graduateSchool.vue";
import LanguageInstitutes from "@/views/pages/planJapan/knowSchools/languageInstitutes.vue";
import TechnologyColleges from "@/views/pages/planJapan/knowSchools/technologyColleges.vue";
import TrainingColleges from "@/views/pages/planJapan/knowSchools/trainingColleges.vue";
import Universities from "@/views/pages/planJapan/knowSchools/universities.vue";
import Japanese from "@/views/pages/planJapan/searchSchool/japanese.vue";
import Schools from "@/views/pages/planJapan/searchSchool/schools.vue";
import Technology from "@/views/pages/planJapan/searchSchool/technologyColleges.vue";
import Training from "@/views/pages/planJapan/searchSchool/trainingColleges.vue";


Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: "menu-active",
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "",
                    name: "Home",
                    component: Home,
                },
                {
                    path: "contact",
                    name: "Contact",
                    component: Contact,
                },
                {
                    path: "/why/attraction",
                    name: "Attraction",
                    component: Attraction,
                },
                {
                    path: "/why/feedback",
                    name: "Feedback",
                    component: Feedback,
                },
                {
                    path: "/plan/fees",
                    name: "Fees",
                    component: Fees,
                },
                {
                    path: "/plan/system",
                    name: "System",
                    component: System,
                },
                {
                    path: "/plan/exams",
                    name: "Exams",
                    component: Exams,
                },
                {
                    path: "/plan/chart",
                    name: "Chart",
                    component: Chart,
                },
                {
                    path: "/plan/immigraion",
                    name: "Immigration",
                    component: Immigration,
                },
                {
                    path: "/plan/scholarship",
                    name: "Scholarship",
                    component: Scholarship,
                },
                {
                    path: "/plan/choose/mext",
                    name: "MEXT",
                    component: MEXT,
                },
                {
                    path: "/plan/choose/private",
                    name: "Private",
                    component: Private,
                },
                {
                    path: "/plan/choose/programs-english",
                    name: "EnglishPrograms",
                    component: EnglishPrograms,
                },
                {
                    path: "/plan/choose/short-programs",
                    name: "ShortPrograms",
                    component: ShortPrograms,
                },
                {
                    path: "/plan/choose/transfer-programs",
                    name: "TransferPrograms",
                    component: TransferPrograms,
                },
                {
                    path: "/plan/know/graduate-school",
                    name: "GraduateSchool",
                    component: GraduateSchool,
                },
                {
                    path: "/plan/know/language-institutes",
                    name: "LanguageInstitutes",
                    component: LanguageInstitutes,
                },
                {
                    path: "/plan/know/technology-colleges",
                    name: "TechnologyColleges",
                    component: TechnologyColleges,
                },
                {
                    path: "/plan/know/training-colleges",
                    name: "TrainingColleges",
                    component: TrainingColleges,
                },
                {
                    path: "/plan/know/universities",
                    name: "Universities",
                    component: Universities,
                },
                {
                    path: "/plan/search/japanese",
                    name: "Japanese",
                    component: Japanese,
                },
                {
                    path: "/plan/search/schools",
                    name: "Schools",
                    component: Schools,
                },
                {
                    path: "/plan/search/technology-colleges",
                    name: "Technology",
                    component: Technology,
                },
                {
                    path: "/plan/search/training-colleges",
                    name: "Training",
                    component: Training,
                },
            
            ]
        }

    ],
});

export default router;