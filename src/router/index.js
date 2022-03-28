import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import Details from "../views/Details"

Vue.use(VueRouter);

const routes = [
    {
        path:"/",component:Index
    },
    {
        path:"/details",component:Details
    }
    // {
    //     path: "/about",
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
