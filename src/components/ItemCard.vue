<template>
  <div class="item-card--container">
    <div class="backdrop" @click="$emit('close')" />

    <div class="item-card shadow-container">
      <button id="close-btn" @click="$emit('close')">&times;</button>
      <div class="item-card--content">
        <h2 class="card-title">{{ cardTitle }}</h2>

        <slot />

      </div>
    </div>
  </div>
</template>

<script>
  // import FormComponent from "@/components/FormComponent";

  export default {
    name: 'ItemCard',
    props: [ "type"/*, "item", 'inputs'*/],
    components: {
      // FormComponent,
    },
    computed: {
      cardTitle() {
        let title = "";

        if (this.type === "edit") {
          title = "Koreguoti ";
        } else if (this.type === "add") {
          title = "Pridėti ";
        } else if (this.type === "upload") {
          title = "Įkelti ";
          if (this.$route.name === "cities" || this.$route.name === "country") {
            title += "Miestus";
          } else if (this.$route.name === "countries"){
            title += "Šalis";
          }
          return title;
        }

        if (this.$route.name === "cities" || this.$route.name === "country") {
          title += "Miestą";
        } else if (this.$route.name === "countries"){
          title += "Šalį";
        }

        return title;
      },
    },
    // methods: {
    //     dataSubmitted() {
    //       this.$emit('reloadTable');
    //       this.$emit('close');
    //     }
    // }
  }
</script>
<style scoped>

  .backdrop {
    position: fixed;
    background: #ffffffee;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .item-card--container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-card {
    background: var(--clr-light);
    max-width: 95%;
    width: 500px;
    /*height: 500px;*/

    border-radius: 10px;
    padding: 1em;
    z-index: 2;
  }

  .item-card--content{
    padding: 1em;
    height: 85%;
  }

  #close-btn {
    font-size: 2em;
    color: var(--clr-grey);
    line-height: .8;
    float: right;

    padding-top: 0;
    padding-bottom: 0;
  }

  .card-title {
    color: var(--clr-grey);
    font-family: var(--ff-oswald);
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: .5em ;
    margin-bottom: .5em ;
  }

</style>