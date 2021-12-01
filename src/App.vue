<template>
  <div id="app">

    <Header />

    <main-display class="container" :meta="meta">

<!--      <template v-slot:title></template>-->

      <display-data :list="list" />
      <display-data />

      <p>Some placeholder text</p>

    </main-display>


  </div>
</template>

<script>
  import Header from "@/components/Header";
  import DisplayData from "@/components/DisplayData";
  import MainDisplay from "@/components/MainDisplay";

  export default {
    name: 'App',
    components: {
      Header,
      DisplayData,
      MainDisplay
    },
    data() {
      return {
        list: {},
        meta: {},
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData(url) {
        // temp
        url = "https://akademija.teltonika.lt/countries_api/api/countries";

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

    --fw-bold: 600;
    --box-shadow: 0 0 10px #222222aa;
  }

 * { box-sizing: border-box; }

 body {
   margin: 0;
   font-family: 'Open Sans', sans-serif;
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
</style>
