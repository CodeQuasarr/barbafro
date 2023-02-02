import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import PageNotFoundVew from "@/views/PageNotFoundView.vue";
import LayoutView from "@/views/template/LayoutView.vue";
import BarbershopView from "@/views/barbershop/BarbershopView.vue";
import RegistrationView from "@/views/auth/RegistrationView.vue";
import ResetPasswordView from "@/views/auth/ResetPasswordView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView.vue";
import DashboardView from "@/views/afterLogin/dashboard/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
    {path: "/sign-up", name: "REGISTER", component: RegistrationView},
    {path: "/sign-in", name: "LOGIN", component: LoginView},
    {path: '/forgot-password', name: 'FORGOT_PASSWORD', component: ForgotPasswordView},
    {path: '/new-password', name: 'RESET_PASSWORD', component: ResetPasswordView },
    {
        path: "/",
        redirect: "/",
        component: LayoutView,
        children: [
            {path: "/dashboard", name: "DASHBOARD", component: DashboardView },
            {path: "/", name: "HOME", component: HomeView},
            { path: "/liste-des-styles-de-coupe", name: "HAIR_CUT_LIST", component: BarbershopView },
        ],
    },
    { path: "/:pathMatch(.*)*", name: "NOT_FOUND", component: PageNotFoundVew },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
})

router.beforeEach((to, from, next) => {
    // const publicPages = ["/", "/sign-in", "/inscription", "/mot-de-passe-oublie"];
    const notPublicPages = ["/dashboard"];
    // const authRequired = !publicPages.includes(to.path);
    const authRequired = notPublicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        return next("/sign-in");
    } else {
        if ((to.name === "LOGIN" || to.name === "REGISTER") && loggedIn) {
            console.log("redirect to dashboard");
            return next("/dashboard");
        }
        next();
    }
});


export default router
