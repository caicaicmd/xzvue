import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",component:Index
    },
    {
        path: "/details",
        component: () =>
            import(/* webpackChunkName: "details" */ "../views/Details.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
