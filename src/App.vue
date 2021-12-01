<template>
  <div id="app">

    <Header />

    <main-display class="container" :meta="meta" :url="url">

      <router-view class="shadow-container" :list="list" />

    </main-display>

      <display-data :list="list" />
<!--      <display-data />-->

  </div>
</template>

<script>
  import Header from "@/components/Header";
  import DisplayData from "@/components/DisplayData";
  import MainDisplay from "@/components/MainDisplay";
  // import CountriesTable from "@/components/CountriesTable";

  export default {
    name: 'App',
    components: {
      Header,
      DisplayData,
      MainDisplay,
      // CountriesTable,
    },
    data() {
      return {
        list: {},
        meta: {},
        url: "https://akademija.teltonika.lt/countries_api/api/countries",
      }
    },
    created() {
      this.getData(this.url);
    },
    methods: {
      getData(url) {
        // temp
        this.$http.get( url )
          .then(response => {
            this.list = response.data.data;
            this.meta = response.data.meta;
            console.log(this.meta.current_page)
          })
          .catch(error => console.log(error))
      },
    },
  }
</script>

<style>
  :root {
    --clr-light: #ffffff;
    --clr-accent: #0054A6;
    --clr-grey: #5C5C5C;

    --ff-opensans:'Open Sans', sans-serif;
    --ff-oswald: 'Oswald', sans-serif;
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

 a:hover {
   color: black;
 }

</style>
