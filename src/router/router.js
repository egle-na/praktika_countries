import Vue from "vue";
import VueRouter from "vue-router";

import CountriesTable from "@/components/CountriesTable";
import CitiesTable from "@/components/CitiesTable";

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
            component: CountriesTable,
            children: [
                {
                    path: 'countries/:country_id/cities',
                    component: CitiesTable,

                }
            ]
        },
        {
            path: '*/cities',
            name: 'cities',
            component: CitiesTable,

        }
    ]
})

export default router;