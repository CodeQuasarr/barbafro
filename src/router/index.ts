import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundVew from "@/views/PageNotFoundView.vue";
import LayoutView from "@/views/template/LayoutView.vue";
import BarbershopView from "@/views/barbershop/BarbershopView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/",
        component: LayoutView,
        children: [
            {path: "/", name: "HOME", component: HomeView},
            { path: "/liste-des-styles-de-coupe", name: "HAIR_CUT_LIST", component: BarbershopView },
        ],
    },
    { path: "/:pathMatch(.*)*", name: "NOT_FOUND", component: PageNotFoundVew },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
