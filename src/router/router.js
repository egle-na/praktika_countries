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
            path: '/countries/cities',
            name: 'cities',
            components: {
                default: MainContent,
                table: CitiesTable
            },
            children: [
                {
                    path: '/countries/:country_id/cities',
                    name: 'country',
                    components: {
                        default: MainContent,
                        table: CitiesTable
                    },
                },
            ]
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