<template>

  <div class="item-card-container">
    <div class="item-card shadow-container">
      <button id="close-btn" @click="$emit('close')">&times;</button>
      <h2>{{cardTitle}}</h2>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'ItemCard',
    props: [ "type" ],
    computed: {
      cardTitle() {
        let title = "";

        if (this.type === "edit") {
          title = "Koreguoti ";
        } else if (this.type === "add") {
          title = "Pridėti ";
        }

        if (this.$route.name === "cities") {
          title += "Miestą";
        } else if (this.$route.name === "countries"){
          title += "Šalį";
        }

        return title;
      }
    }
  }
</script>
<style>

  .item-card-container {
    position: fixed;
    background: #ffffffee;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-card {
    background: var(--clr-light);
    width: 500px;
    height: 500px;

    border-radius: 10px;
    padding: 1em;
  }

  #close-btn {
    font-size: 2em;
    color: var(--clr-grey);
    line-height: 1;
    float: right;
    padding-top: 0;
    padding-bottom: 0;
  }



</style>