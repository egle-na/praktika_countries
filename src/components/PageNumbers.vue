<template>
  <div class="page-numbers">

    <button class="page-number"
            @click="prevPage"
    >&lt;</button>
    <button v-for="index in meta.last_page"
            :key="index"
            v-text="index"
            class="page-number"
            :class="{'current-page': meta.current_page === index}"
            @click="$emit('setParams', 'page', index)"
    ></button>
    <button class="page-number"
            @click="nextPage"
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
      prevPage() {
        if( this.meta.current_page !== 1){
        this.$emit('setParams', 'page', this.meta.current_page - 1)
        }
      },
      nextPage() {
        if( this.meta.current_page !== this.meta.last_page){
          this.$emit('setParams', 'page', this.meta.current_page + 1)
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
    margin: 2px;
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

</style>