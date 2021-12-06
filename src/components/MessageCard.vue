<template>
  <div class="message-container shadow-container">
    <p>
      <slot>Veiksmas sėkmingai atliktas!</slot>
    </p>

  </div>
</template>

<script>
  export default {
    name: "MessageCard"
  }
</script>

<style scoped>

  .message-container {
    position: fixed;
    bottom: 60px;
    left: 60px;
    background: var(--clr-light);
    padding: 1em 2.5em;
  }

</style>