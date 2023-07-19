import Vue from "vue";
import Router from 'vue-router';
import Layout from '../views/layouts/Layout.vue';
import Home from '../views/pages/Home.vue';
import Contact from "@/views/pages/Contact.vue";


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
                }
            ]
        }

    ],
});

export default router;