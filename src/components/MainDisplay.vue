<template>
  <div>

    <div class="title-container">

      <h1 class="title">{{ routeName }}</h1>
      <add-item-btn />

    </div>

    <div class="search-filter-container">

      <div class="search-container shadow-container">
        <input type="text" id="search" name="search" v-model="searchQr">
        <button id="search-btn">
          <img src="../assets/icons/search.svg" alt="search button">
        </button>
      </div>

      <input type="date" id="date-filter" class="shadow-container">

    </div>

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

  export default {
    name: "MainDisplay",
    components: {AddItemBtn},
    props: [ "meta" ],
    data() {
      return {
        searchQr: '',
      }
    },
    computed: {
      routeName: function () {
        const route = this.$route.name;

        switch (route) {
          case "countries":
            return "Šalys";

          case "cities":
            return "Miestai";

          default:
            break;
        }

        return "Kita";
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
    font-family: 'Oswald', sans-serif;
  }

  .search-filter-container {
    display: flex;
    margin-bottom: 1rem;
  }

  .search-container {
    display: flex;
    padding: 0 .6em 0 0;
    width: 100%;
    margin-right: 1rem;
  }

  #search {
    background: var(--clr-light);
    color: var(--clr-grey);
    font: inherit;
    font-weight: 600;

    border: none;
    border-radius: 5px;
    width: 100%;
    margin: 0;
    padding: 1em 1.5em;
  }

  #search-btn {
    background: none;
    border: none;
    cursor: pointer;
    transform: scale(1);
    transition: transform 200ms;
  }

  #search-btn:hover {
    transform: scale(1.2);
  }

  #date-filter {
    background: none;
    color: var(--clr-grey);
    border: none;
    padding: 0 1em;

    font: inherit;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }

  .page-numbers {
    margin: 0 auto;
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
    background: var(--clr-grey);
    color: var(--clr-light);
  }

</style>