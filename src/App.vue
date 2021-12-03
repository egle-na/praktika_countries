<template>
  <div id="app">

    <Header />

      <router-view>

        <!-- Title and Add Item Btn -->
        <title-container>{{ pageTitle }}</title-container>

        <!-- Search and Date Filter -->
        <search :query="params.search" @sendParams="setParams" />

        <!-- Display data table -->
        <router-view name="table" class="shadow-container" :list="list" />

        <!-- Display page numbers -->
        <page-numbers :meta="meta"/>

      </router-view>


    <!-- Temp display data -->
    <display-data :list="list" class="container"/>

  </div>
</template>

<script>
  // import MainContent from "@/components/MainContent";

  import Header from "@/components/Header";
  import TitleContainer from "@/components/TitleContainer";
  import Search from "@/components/Search";
  import PageNumbers from "@/components/PageNumbers";

  import DisplayData from "@/components/DisplayData";
  // import CountriesTable from "@/components/CountriesTable";

  export default {
    name: 'App',
    components: {
      Header,
      TitleContainer,
      Search,
      PageNumbers,
      // CountriesTable,
      // MainContent,
      DisplayData,
    },

    data() {
      return {
        baseUrl: "https://akademija.teltonika.lt/countries_api/api",
        list: {}, // ----- data for the table
        meta: {}, // ----- metadata about page num and ect.
        // url: "",
        pageTitle: '', // ----- decide title for the page
        defaultParams: { page: 1, /*per_page: 10,*/ start_date: '', end_date: '', search: ''},
        params: { ...this.defaultParams },// --- query for filtering data initiated with default
      }
    },

    created() {
      this.getData(); // fetch data when page loads
      this.getPageTitle();
    },

    watch: {
      $route() { // fetch data again when the route changes
        this.params = {...this.defaultParams};
        this.getData();
        this.getPageTitle();
      },
    },

    methods: {
      getData() {
        let url = this.baseUrl + this.$route.path;

        this.$http.get( url , { params: this.params})
          .then(response => {
            this.list = response.data.data;
            this.meta = response.data.meta;
            // this.errors = '';
            // console.log(this.meta.current_page)
          })
          .catch(error => {
            console.error(error.response.data.message);
            this.list = {};
            this.list.error = error.response.data.message;
          })
      },

      setParams(name, value) {
        this.params[name] = value;
        this.getData();
      },

      getPageTitle(){
        const route = this.$route.name;

        switch (route) { // --------- declare page title
          case "countries":
            this.pageTitle = "Šalys";
            break;
          case "cities":
            this.pageTitle = "Miestai";
            break;
          case "country":
            this.$http.get(this.baseUrl + "/countries/" + this.$route.params.country_id)
                .then(response => {
                  this.pageTitle = response.data.data.attributes.name;
                }).catch(error => console.error(error));
            break;
          default:
            break;
        }
      },
    },
  }
</script>

<style>

  :root {
    --clr-light: #ffffff;
    --clr-accent: #0054A6;
    --clr-grey: rgba(92, 92, 92, 0.98);

    --ff-opensans:'Open Sans', sans-serif;
    --ff-oswald: 'Oswald', sans-serif;
    --fs-title: 4rem;
    --fw-bold: 600;
    --box-shadow: 0 0 10px #222222aa;
  }

 * { box-sizing: border-box; }

 body {
   margin: 0;
   font-family: var(--ff-opensans);
 }

 .container {
   width: 90%;
   max-width: 1200px;
   margin: 0 auto 2em;
   padding: 1em;
 }

 .shadow-container {
   box-shadow: 0 0 8px #22222233;
   /*padding: .8em;*/
   border-radius: 5px;
 }

 a {
   text-decoration: none;
   color: inherit;
 }

 a:hover,
 a:focus {
   color: black;
 }

 a:focus {
   outline: solid;
 }

  button {
    background: none;
    border:none;
    font:inherit;
    cursor: pointer;
    border-radius: 4px;
  }

  button:focus {
    outline: solid 2px;
  }

</style>
