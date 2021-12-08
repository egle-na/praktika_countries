<template>
  <header>
    <div class="container">

    <img src="../assets/teltonika_logo.png" alt=""> <!-- Teltonika logo -->

      <div v-if="false"> <!-- remove to see tabs -->
        <router-link :to="{ name: 'countries'}" exact class="tab" title="Šalys">Šalys</router-link>
      <router-link to="/countries/cities" class="tab" title="Miestai">Miestai</router-link>
      <router-link v-show="$route.params.country_id"
                   to="/"
                   title="Šalis"
                   class="tab router-link-active">
        <slot>Šalis</slot>
      </router-link>
    </div>


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
    margin: 1em 2em 2.3em 0;
  }

  .tab {
    background: #ffffffbb;
    padding: .8em 1.5em .3em;
    margin-right: .1em;
    border-radius: 10px 10px 0 0;

    color: var(--clr-grey);
    font-weight: 600;
    bottom: .3em;
  }

  .tab:focus {
    color: var(--clr-accent);
    outline: none;
  }

  .router-link-active {
    background: var(--clr-light);
    box-shadow: 0 0 9px #222222aa;
    padding: .9em 1.6em .4em;
    position: relative;
  }

  header:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 15px;
    background: var(--clr-light);
  }

  @media (min-width: 750px) { /* web */
    header {
      margin-bottom: 2em;
    }
    img {
      margin-bottom: 1em;
    }
  }

</style>