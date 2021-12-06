<template>
  <div class="search-filter-container">

    <!-- Search Input -->
    <div class="search-container shadow-container">
      <input type="text" id="search" v-model="search" @keyup="sendSearch" @blur="sendSearch">
      <button id="search-btn" @click="clearSearch" @focus="selectAction">
        <img v-show="!search" src="../assets/icons/search.svg" alt="search button">
        <span v-show="search">&times;</span>
      </button>
    </div>

    <!-- Start Date Filter -->
    <div>
      <label class="date-label" :class="{'has-value' : minEndDate}">Nuo:</label>
      <input type="date"
             class="date-filter shadow-container"
             @input="setStartDate"
             :max="maxStartDate">
    </div>

    <!-- End Date Filter -->
    <div>
      <label class="date-label" :class="{'has-value' : maxStartDate}">Iki:</label>
      <input type="date"
             class="date-filter shadow-container"
             @input="setEndDate"
             :min="minEndDate">
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: [ 'query' ],
    data() {
      return {
        search: '',
        maxStartDate: '',
        minEndDate: '',
      }
    },
    watch: {
      $route() {
        this.search = '';
      }
    },
    methods: {
      sendSearch(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.$emit('sendParams', 'search' , event.target.value);
          // console.log(event.target.value);
        }, 400)
      },
      setStartDate(event) {
        const val = event.target.value;
        this.minEndDate = val;
        this.$emit('sendParams', 'start_date', val)
      },
      setEndDate(event) {
        const val = event.target.value;
        this.maxStartDate = val;
        this.$emit('sendParams', 'end_date', val)
      },
      selectAction(event) {
        if(this.search === '') {
          event.target.parentNode.childNodes[0].focus();
        }
      },
      clearSearch(event) {
        this.search = '';
        event.target.parentNode.childNodes[0].focus();
      }
    },
  }
</script>

<style scoped>

  .search-filter-container {
    display: flex;
    margin-bottom: 1rem;
  }

  .search-filter-container div {
    margin-right: 1rem;
  }

  .search-filter-container div:last-child {
    margin-right: 0;
  }

  .search-container {
    position: relative;
    display: flex;
    /*padding: 0 .6em 0 0;*/
    width: 100%;
    max-width: 100%;
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
    position: absolute;
    right: .5rem;
    height: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }

  #search-btn span {
    color: #a9a9a9;
    font-size: 2rem;
    margin: 0;
    transform: scale(1);
    transition: transform 200ms;
  }

  #search-btn:hover span {
    transform: scale(1.2);
  }

  .date-filter {
    background: none;
    color: var(--clr-grey);
    border: none;
    padding: 0 1em;
    min-width: fit-content;
    height: 100%;

    font: inherit;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }

  .date-label {
    color: var(--clr-grey);
    font-family: var(--ff-oswald);
    font-size: .6rem;
    text-transform: uppercase;
    text-shadow: 0 0 2px var(--clr-light);
    letter-spacing: .16em;
    border-radius: 3px;

    position: absolute;
    margin-top: -.7em;
    margin-left: 1rem;
    padding: .3em .4em;
    background: var(--clr-light);
  }

  .has-value {
    color: var(--clr-accent)
  }

</style>