<template>
  <div class="search-filter-container">

    <!-- Search Input -->
    <div class="search-container shadow-container">
      <input type="text" id="search" v-model="search" @keyup="sendSearch" @blur="sendSearch" title="Ieškoti">
      <button id="search-btn" @click="clearSearch" :tabindex="searchBtnFocus">
        <span v-show="search">&times;</span>
      </button>
      <img v-show="!search" src="../assets/icons/search.svg" alt="" class="search-icon">
    </div>

    <div class="filter-container">
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

    <!-- Items Per Page type number -->
<!--    <div>-->
<!--      <label for="per_page" class="date-label label-bottom">per psl.</label>-->
<!--      <input id="per_page" type="number" v-model="itemsPerPage" @input="sendPerPage"-->
<!--             class="shadow-container">-->
<!--    </div>-->

    <!-- Items Per Page -->
    <select class="shadow-container" id="per_page" v-model="itemsPerPage" @change="sendPerPage">
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="10" selected>10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="50">50</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: [ 'query', 'perPage' ],
    data() {
      return {
        search: '',
        maxStartDate: '',
        minEndDate: '',
        itemsPerPage: '',
      }
    },
    created() {
      this.itemsPerPage = this.perPage ? this.perPage : 10;
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

      sendPerPage(event) {
        let val = event.target.value;
        if(val === 0 || val === '0' || isNaN(val)) {
          this.itemsPerPage = 10;
          val = 10;
        }
        this.$emit('sendParams', 'per_page', val)
      },

      clearSearch(event) {
        this.search = '';
        this.sendSearch(event);
        event.target.parentNode.childNodes[0].focus();
      },
    },
    computed: {
      searchBtnFocus() {
        if (this.search) {
          return 0;
        }
        return -1;
      }
    },
  }
</script>

<style scoped>

  .search-filter-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .search-container {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  #search,
  #per_page {
    background: transparent;
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

  .search-icon {
    position: absolute;
    height: 100%;
    padding: .8rem .6rem;
    z-index: -1;
    right: 0;
  }

  .filter-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    /*margin-right: 0;*/
  }

  .date-filter {
    background: none;
    color: var(--clr-grey);
    border: none;
    padding: .9em 1em;
    max-width: 100%;
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

  #per_page {
    display: none;
    padding: 1em;
    text-align: center;
    width: 50px;
    max-width: max-content;
    margin: 1rem 0;
  }

  select#per_page {
    width: initial;
    max-width: initial;
    padding: .5em 0 .5em .5em;
  }

  .has-value {
    color: var(--clr-accent)
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  @media (min-width: 550px) { /* web */

    .search-filter-container div {
      margin-right: 1rem;
    }

    .search-filter-container div:last-child {
      margin-right: 0;
    }

    .search-filter-container {
      flex-direction: row;
    }

    #per_page {
      display: initial;
      margin: 0;
    }

    .search-container {
      margin-bottom: 0;
    }
  }

</style>