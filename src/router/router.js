import Vue from "vue";
import VueRouter from "vue-router";

import PageNotFound from "@/components/PageNotFound";
import Countries from "@/views/Countries";
import Cities from "@/views/Cities";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/countries'
        },
        {
            path: '/countries',
            name: 'countries',
            component: Countries,
        },
        {
            path: '/cities',
            name: 'cities',
            component: Cities,
            children: [
                {
                    path: '/countries/:country_id/cities',
                    name: 'country',
                },
            ]
        },
        {
            path: '/countries/:country_id',
            redirect: '/countries/:country_id/cities'
        },
        {
            path: '/:catchAll(.*)*',
            name: 'not-found',
            component: PageNotFound,
        }
    ],
    scrollBehavior() {
        return {x: 0, y: 0, behavior: 'smooth'}
    }
})

export default router;