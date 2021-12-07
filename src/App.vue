<template>
  <div id="app">

    <Header>{{pageTitle}}</Header>

    <router-view>

      <!-- Title and Add Item Btn -->
      <title-container>
        <template v-slot:title >{{ pageTitle }}</template>
        <template v-slot:btn >
          <add-item-btn @openItemCard="itemCardIsOpen = true"/>
        </template>


      </title-container>

      <!-- Search and Date Filter -->
      <search :query="params.search" @sendParams="setParams" />

      <!-- Display data table -->
      <router-view name="table" class="table-container shadow-container" :list="list" :listParams="listParams" @reloadTable="getData"/>

      <!-- Display page numbers -->
      <page-numbers :meta="meta" @setParams="setParams"/>

    </router-view>


      <!-- Add Item Card -->
      <item-card v-if="itemCardIsOpen"
                 :type="'add'"
                 :inputs="listParams"
                 @close="itemCardIsOpen = false"
                 @reloadTable="getData"
                 @sendData="displayMessage"
      />
<!--                 @actionComplete="showMessage"-->

    <message-card v-if="message" :message="message" />

  </div>
</template>

<script>
  import {EventBus} from "@/main";

  import Header from "@/components/Header";
  import AddItemBtn from "@/components/AddItemBtn";
  import TitleContainer from "@/components/TitleContainer";
  import Search from "@/components/Search";
  import PageNumbers from "@/components/PageNumbers";

  import ItemCard from "@/components/ItemCard";
  import MessageCard from "@/components/MessageCard";

  export default {
    name: 'App',
    components: {
      MessageCard,
      AddItemBtn,
      ItemCard,
      Header,
      TitleContainer,
      Search,
      PageNumbers,
    },

    data() {
      return {
        baseUrl: "https://akademija.teltonika.lt/countries_api/api",
        defaultParams: { page: 1, /*per_page: 10,*/ start_date: '', end_date: '', search: ''},
        params: { ...this.defaultParams },// --- query for filtering data initiated with default

        list: {}, // ----- data for the table
        meta: {}, // ----- metadata about page num, ect.

        pageTitle: '', // ----- decide title for the page
        listParams: [], // ---- current page data parameters

        allListParams: {
          cities: [
            {title: 'Pavadinimas', attr: 'name', type: 'text', link: false },
            {title: 'Užimamas Plotas', attr: 'area', type: 'number' },
            {title: 'Gyventojų Skaičius', attr: 'population', type: 'number' },
            {title: 'Miesto Pašto Kodas', attr: 'postal_code', type: 'text' },
          ],
          countries: [
            {title: 'Pavadinimas', attr: 'name', type: 'text', link: true },
            {title: 'Užimamas Plotas', attr: 'area', type: 'number' },
            {title: 'Gyventojų Skaičius', attr: 'population', type: 'number' },
            {title: 'Šalies Tel. Kodas', attr: 'phone_code', type: 'text' },
          ]
        },
        itemCardIsOpen: false,
        message: '',
      }
    },

    created() {
      this.getData(); // fetch data when page loads
      this.getPageTitle();
      EventBus.$on("sendMessage", msg => {
        console.log("elp");
        this.message = msg;

        setTimeout( () => {
          this.message = "";
        }, 6500 )
      });
    },

    watch: {
      $route() { // fetch new data when the route changes
        this.params = {...this.defaultParams};
        this.getData();
        this.getPageTitle();
        // window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },

    methods: {
      getData() {
        let url = this.baseUrl + this.$route.path;

        this.$http.get( url , { params: this.params})
          .then(response => {
            this.list = response.data.data;
            this.meta = response.data.meta;
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

      getPageTitle() {
        const route = this.$route.name;

        switch (route) { // --------- declare page title
          case "countries":
            this.pageTitle = "Šalys";
            this.listParams = this.allListParams.countries;
            break;
          case "cities":
            this.pageTitle = "Miestai";
            this.listParams = this.allListParams.cities;
            break;
          case "country":
            this.listParams = this.allListParams.cities;
            this.$http.get(this.baseUrl + "/countries/" + this.$route.params.country_id)
                .then(response => {
                  this.pageTitle = response.data.data.attributes.name;
                }).catch(error => console.error(error));
            break;
          default:
            break;
        }
      },
      displayMessage(msg) {
        console.log("elp");
        this.message = msg;
        setTimeout( () => {
          this.message = "";
        }, 8000 )
      }
    },
  }
</script>

<style>

  :root {
    --clr-light: #ffffff;
    --clr-accent: #0054A6;
    --clr-grey: rgba(92, 92, 92, 0.98);
    --clr-lightgrey: #c4c4c4;

    --ff-opensans:'Open Sans', sans-serif;
    --ff-oswald: 'Oswald', sans-serif;
    --fs-title: 4rem;
    --fw-bold: 600;
    --box-shadow: 0 0 10px #222222aa;
    --mobile-breakpoint: 750px;
  }

 * { box-sizing: border-box; }

 body {
   margin: 0;
   font-family: var(--ff-opensans);
 }

 .container {
   width: 96%;
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

  @media (min-width: 750px) { /* web */
    .container {
      width: 90%;
    }
    .table-container {
      min-width: 630px;
    }
  }

</style>

<style scoped>
</style>
