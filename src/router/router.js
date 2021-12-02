import Vue from "vue";
import VueRouter from "vue-router";

import CountriesTable from "@/components/CountriesTable";
import CitiesTable from "@/components/CitiesTable";
import PageNotFound from "@/components/PageNotFound";

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
                    path: ':country_id/cities',
                    name: 'country',
                    component: CitiesTable,
                },
                // {
                //     path: 'countries/*',
                //     component: PageNotFound,
                // } // --------------------------------- ši šalis dar neturi pridėtų miestų
            ]
        },
        {
            path: '/cities',
            name: 'cities',
            component: CitiesTable,

        },
        {
            path: '/*',
            name: 'not-found',
            component: PageNotFound,
        }
    ]
})

export default router;