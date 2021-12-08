<template>
  <header>
    <div class="container">

      <router-link to="/" >
        <img src="../assets/teltonika_logo.png" alt=""> <!-- Teltonika logo -->
      </router-link>

    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--clr-accent);
  }

  header .container {
    padding: 0;
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    height: 30px;
    margin: 1em 2em 1em 0;
  }

  @media (min-width: 750px) { /* web */
    header {
      margin-bottom: 2em;
    }
  }

</style>