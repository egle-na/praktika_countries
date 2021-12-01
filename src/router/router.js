import Vue from "vue";
import VueRouter from "vue-router";

import Countries from "@/components/Countries";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/countries',
            name: 'countries',
            component: Countries,
            children: [
                {
                    path: 'countries/:country_id/cities',
                    // component: Country,

                }
            ]
        },
        {
            path: '/cities',
            name: 'cities',
        }
    ]
})

export default router;