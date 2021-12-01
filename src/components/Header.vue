<template>
  <header>
    <div class="container">

    <img src="../assets/teltonika_logo.png" alt="">

    <router-link to="/countries" class="tab">Šalys</router-link>
    <router-link to="/cities" class="tab">Miestai</router-link>

    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  header {
    /*position: sticky;*/
    /*top: 0;*/
    background: var(--clr-accent);
    margin-bottom: 2em;
  }

  header .container {
    /*display: inline-block;*/
    /*width: fit-content;*/
    padding: 0;
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    height: 30px;
    margin: 1em 2em 1em 0;
  }

  .tab {
    background: #ffffffbb;
    padding: .8em 1.5em .3em;
    /*margin-bottom: 0;*/
    border-radius: 10px 10px 0 0;

    text-decoration: none;
    color: var(--clr-grey);
    font-weight: 600;
    bottom: .3em;
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

</style>