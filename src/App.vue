<template>
  <div id="app">

    <Header />

    <!-- Main Content -->
    <router-view />

    <!-- Feedback About Successful Action -->
    <message-card v-if="message" :message="message" />

  </div>
</template>

<script>
  import {EventBus} from "@/main";
  import Header from "@/components/Header";
  import MessageCard from "@/components/MessageCard";

  export default {
    name: 'App',
    components: {
      Header,
      MessageCard,
    },
    data() {
      return {
        message: '',
      }
    },
    created() {
        EventBus.$on("sendMessage", msg => {
          this.message = msg;
          setTimeout( () => {
            this.message = "";
          }, 6500 )
        });
    },
  }
</script>

<style>

  :root {
    --clr-light: #ffffff;
    --clr-accent: #0054A6;
    --clr-grey: rgba(92, 92, 92, 0.98);
    --clr-lightgrey: #c4c4c4;

    --ff-opensans:'Open Sans', sans-serif;
    --ff-oswald: 'Oswald', sans-serif;
    --fs-title: 4rem;
    --fw-bold: 600;
    --box-shadow: 0 0 10px #222222aa;
    --mobile-breakpoint: 750px;
  }

 * { box-sizing: border-box; }

 body {
   margin: 0;
   font-family: var(--ff-opensans);
 }

 .container {
   width: 96%;
   max-width: 1200px;
   margin: 0 auto 2em;
   padding: 1em;
 }


 .shadow-container {
   box-shadow: 0 0 8px #22222233;
   /*padding: .8em;*/
   border-radius: 5px;
 }

 a {
   text-decoration: none;
   color: inherit;
 }

 a:hover,
 a:focus {
   color: black;
 }

  button {
    background: none;
    border:none;
    font:inherit;
    cursor: pointer;
    border-radius: 4px;
  }

  @media (min-width: 750px) { /* web */
    .container {
      width: 90%;
    }
    .table-container {
      min-width: 630px;
    }
  }

</style>

