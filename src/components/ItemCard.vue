<template>
  <div class="item-card--container">

    <div class="backdrop" @click="$emit('close')" />

    <div class="item-card shadow-container">
      <button id="close-btn" @click="$emit('close')">&times;</button>
      <div class="item-card--content">
        <h2 class="card-title">{{ cardTitle }}</h2>


        <form-component>

        </form-component>

          <!--            form item-->
          <!--            -->
          <!--            -->
          <!--            <label for="area">Užimamas plotas</label>-->
          <!--            <input id="area" name="area" type="number" value="" required>-->
          <!--            <label for="population">Gyventojų skaičius</label>-->
          <!--            <input id="population" name="population" type="number" value="" required>-->
          <!--            <label for="postcode">Miesto Pašto Kodas</label>-->
          <!--            <input id="postcode" name="postcode" type="text" value="" required>-->
          <!--            <input type="hidden" name="id" value="">-->
          <!--            <input type="hidden" name="country_id" value="">-->
<!--          <button type="submit" class="submit-btn shadow-container">Saugoti</button>-->

<!--        </form>-->

      </div>
    </div>

  <!--      <div v-if="item.id" class="form">-->
  <!--        <p>{{item.id}}</p>-->
  <!--        <p>{{item.attributes.name}}</p>-->
  <!--        <p>{{item.attributes.area}}</p>-->
  <!--        <p>{{item.attributes.population}}</p>-->
  <!--        <p>{{item.attributes.phone_code}}</p>-->
  <!--      </div>-->

  </div>
</template>

<script>
  // import FormItem from "@/components/FormItem";
  import FormComponent from "@/components/FormComponent";

  export default {
    name: 'ItemCard',
    props: [ "type", "item" ],
    components: {
      // FormItem,
      FormComponent,
    },
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
    /*position: relative;*/
    background: var(--clr-light);
    width: 500px;
    height: 500px;

    border-radius: 10px;
    padding: 1em;
    z-index: 2;
  }

  .item-card--content{
    padding: 1em;
    /*height: 100%;*/
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
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

</style>