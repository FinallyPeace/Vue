import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Contact from "../views/Contact.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        // 子路由
        children: [
            {
                path: "info",
                name: "about-info",
                component: () =>
                    import(/* webpackChunkName: "info" */ "../views/Info.vue"),
            },
            {
                path: "youtube",
                name: "about-youtube",
                component: () =>
                    import(
                        /* webpackChunkName: "youtube" */ "../views/YouTube.vue"
                    ),
            },
        ],
    },
    {
        path: "/contact",
        name: "Contact",
        /* 兩種不同的 router component 設定方法
        1. component: Contact 
        上面要先 import Contact from "../views/Contact.vue"

        2. component: () => import("")
        */
        component: () =>
            import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
