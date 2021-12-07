<template>
  <div class="title-container">

    <h1 class="title">
      <slot name="title" />
    </h1>  <!--  Title -->

    <slot name="btn" /> <!--  Add New Item Button -->

  </div>
</template>

<script>

  export default {
    name: 'TitleContainer',
  }
</script>

<style scoped>
  .title-container {
    display: flex;
    align-items: center;
  }

  .title {
    text-transform: uppercase;
    color: var(--clr-grey);
    margin: 1.5rem 1.5rem 1.7rem 0;

    font-size: var(--fs-title);
    font-weight: 400;
    font-family: var(--ff-oswald);
  }

</style>