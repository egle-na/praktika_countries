<template>
  <div class="search-filter-container"> <!-- create a Container -->
    <div class="search-container shadow-container">
      <input type="text" id="search" name="search" v-model="searchQr">
      <button id="search-btn">
        <img src="../assets/icons/search.svg" alt="search button">
      </button>
    </div>

    <input type="date" id="date-filter" class="shadow-container">
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      searchQr: {}
    }
  }
</script>

<style>

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

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
  }

</style>