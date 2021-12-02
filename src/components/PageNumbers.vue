<template>
  <div class="page-numbers">

    <button class="page-number">&lt;</button>
    <button v-for="index in meta.last_page"
            :key="index"
            v-text="index"
            class="page-number"
            :class="{'current-page': meta.current_page === 1}"
    ></button>
    <button class="page-number">&gt;</button>

  </div>
</template>
<script>
  export default {
    name: 'PageNumbers',
    props: {
      meta: {}
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
  }

</style>