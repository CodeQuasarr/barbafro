import "bootstrap/dist/css/bootstrap.css";

import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Bootstrap5Pagination} from "laravel-vue-pagination";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Toaster from "@meforma/vue-toaster";

library.add(fas);

import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp({
    extends: App,
    beforeCreate() {
        store.commit("initializeStore");
    },
});

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $toast: Toaster;
        $store: typeof store;
    }
}
app.config.globalProperties.STRIPE_PUBLISHABLE_KEY =
    "pk_test_51MUYZQChGKmAiSAhkkbw2US2UjTQqJ3ASUTfeP80pYcCtW25RCEKvDFl2e8jr8GdgHOX9kbCtKEzctpFj3l3HXUU00yBskSgXS";
app
    .component("font-icon", FontAwesomeIcon)
    .component("Bootstrap5Pagination", Bootstrap5Pagination)
    .component("date_picker", Datepicker)
    .use(store)
    .use(router)
    .use(Toaster, {
        position: "top",
    })
    .mount("#app");
import "bootstrap/dist/js/bootstrap.js";