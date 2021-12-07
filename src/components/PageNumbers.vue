<template>
  <div class="page-numbers">

    <button class="page-number"
            @click="prevPage"
            title="Ankstesnis Puslapis"

    >&lt;</button>
    <button v-for="index in meta.last_page"
            :key="index"
            v-text="index"
            class="page-number"
            :class="{'current-page': meta.current_page === index}"
            @click="goToPage(index)"
    ></button>
    <button class="page-number"
            @click="nextPage"
            title="Sekantis Puslapis"
    >&gt;</button>

  </div>
</template>

<script>
  export default {
    name: 'PageNumbers',
    props: {
      meta: {}
    },
    methods: {
      goToPage(page) {
        this.$emit('setParams', 'page', page);
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      },
      prevPage() {
        if( this.meta.current_page !== 1){
          this.goToPage( this.meta.current_page - 1);
        }
      },
      nextPage() {
        if( this.meta.current_page !== this.meta.last_page){
          this.goToPage(  this.meta.current_page + 1);
        }
      },
    }
  }
</script>

<style scoped>

  .page-numbers {
    margin: 1.5em auto 0;
    width: fit-content;
  }

  .page-number {
    margin: .5em;
    padding: .4em;
  }

  .page-number:hover {
    background: #eaeaea;
  }

  .current-page {
    background: var(--clr-grey);
    color: var(--clr-light);

  }
  .current-page:hover {
    background: var(--clr-grey);
    cursor: default;
  }

  .current-page:focus{
    outline: solid var(--clr-accent);
  }

  @media (min-width: 750px) { /* web */
    .page-number {
      margin: 2px;
      padding: .1em .3em;
    }
  }

</style>