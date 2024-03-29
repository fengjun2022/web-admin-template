// import { readdir } from "fs";

const LAYOUT = () => import("@/layouts/index.vue");
export default [
    {
        path: "/",
        name: "Home",
        component: LAYOUT,
        redirect: "/index",
        meta: {
            title: "首页",
            icon: "HomeFilled",
        },
        children: [
            {
                path: "/index",
                name: "Index",
                component: () => import("@/views/Home/index.vue"),
                meta: {
                    title: "首页",
                    icon: "HomeFilled",
                    affix: true,
                    activeMenu: "/index",
                },
            },
        ],
    },





];


