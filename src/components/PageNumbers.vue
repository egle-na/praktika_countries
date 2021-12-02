<template>
  <div class="page-numbers">
    <button>&lt;</button>
    <button v-for="index in meta.last_page"
            :key="index"
            v-text="index"
            :class="{'current-page': meta.current_page === 1}"
    />
    <button>&gt;</button>
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
<style>
  .page-numbers {
    margin: 2em auto 0;
    width: fit-content;
  }

  button {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
  }

  .current-page {
    background: #5C5C5C88;
    color: var(--clr-light);
  }

</style>