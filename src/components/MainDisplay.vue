<template>
  <div>

    <div class="title-container">
      <h1 class="title">{{ title }}</h1>  <!--  Title -->
      <add-item-btn :type="'add'" />          <!--  Add Item Button -->
    </div>

    <search :search-qr="searchQr" />          <!--  Search and Date Filter -->

    <slot class="shadow-container"></slot>

    <div class="page-numbers">
      <button>&lt;</button>
      <button v-for="index in meta.last_page"
              :key="index"
              v-text="index"
              :class="{'current-page': meta.current_page === 1}"
      />
      <button>&gt;</button>
    </div>


    <!--    <Title/> <add-item />-->
    <!--    -->
    <!--    <search/> <date-filter/>-->
    <!--    -->
    <!--    <data-table />-->
    <!--    <page-numbers />-->

  </div>
</template>

<script>
  import AddItemBtn from "@/components/AddItemBtn";
  import Search from "@/components/Search";
  // import ItemCard from "@/components/ItemCard";

  export default {
    name: "MainDisplay",
    components: {
      Search,
      AddItemBtn
    },
    props: [ "meta" ],
    data() {
      return {
        searchQr: '',
        title: ''
      }
    },
    created() {
      this.title = this.routeName;
    },
    computed: {
      routeName() {
        const route = this.$route.name;

        switch (route) {
          case "countries":
            return "Šalys";

          case "cities":
            return "Miestai";

          case "country":
            // console.log(this.countryName);
            return this.countryName;

          default:
            break;
        }

        return "Kita";
      },
      countryName() {
        // console.log(this.$parent.baseUrl);
        let url = this.$parent.baseUrl + "/countries";
        return this.getCountryName(url, this.$route.params.country_id);
      },
    },
    methods: {
      editItem(type, id) {
        console.log(type,id);
      },
      getCountryName(url, id) {
        this.$http.get(url)
            .then(response => {
              // console.log(id, response.data.data.find(item => item.id === parseInt(id)).attributes.name);
              return response.data.data.find(item => item.id === parseInt(id)).attributes.name;
            }).catch(error => console.error(error));
      }
    }
  }
</script>

<style>
  .title-container {
    display: flex;
    align-items: center;
  }

  .title {
    text-transform: uppercase;
    color: var(--clr-grey);
    margin: 1.5rem 1.5rem 1.7rem 0;

    font-size: 4rem;
    font-weight: 400;
    font-family: var(--ff-oswald);
  }

  .page-numbers {
    margin: 2em auto 0;
    width: fit-content;
  }

  button {
    background: none;
    border:none;
    font:inherit;
    cursor: pointer;
    border-radius: 4px;
  }

  .current-page {
    background: #5C5C5C88;
    color: var(--clr-light);
  }

</style>