import Vue from "vue";
import VueRouter from "vue-router";

import CountriesTable from "@/components/CountriesTable";
import CitiesTable from "@/components/CitiesTable";
import PageNotFound from "@/components/PageNotFound";
import MainContent from "@/components/MainContent";

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
            components:{
                default: MainContent,
                table: CountriesTable,
            },
        },
        {
            path: '*/cities',
            name: 'cities',
            components: {
                default: MainContent,
                table: CitiesTable},
            children: [
                {
                    path: '/countries/:country_id/cities',
                    name: 'country',
                    component: CitiesTable,
                },
                // {
                //     path: 'countries/*',
                //     component: PageNotFound,
                // }         // ---- ši šalis dar neturi pridėtų miestų
            ]
        },
        {
            path: '/:catchAll(.*)*',
            name: 'not-found',
            component: PageNotFound,
        }
    ]
})

export default router;