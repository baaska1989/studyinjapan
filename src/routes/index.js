import Vue from "vue";
import Router from 'vue-router';
import Layout from '../views/layouts/Layout.vue';
import Home from '../views/pages/Home.vue';
import Contact from "@/views/pages/Contact.vue";
import Attraction from "@/views/pages/whyJapan/attraction.vue";
import Feedback from "@/views/pages/whyJapan/feedback.vue";

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
                    path: "/plan/feedback",
                    name: "Feedback",
                    component: Feedback,
                },
            
            ]
        }

    ],
});

export default router;