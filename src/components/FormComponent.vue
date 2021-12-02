<template>
  <form class="item-form" action="#" method="post" @submit.prevent >

<!--    <form-item >-->
      <!--            <template v-slot:label>Pavadinimas</template>-->
      <!--            <template :is="'input'" :name="'name'"></template>-->

<!--      <label for="name">Pavadinimas</label>-->
<!--      <input id="name" name="name" type="text" value="" required>-->

<!--    </form-item>-->

    <label for="name">Pavadinimas</label>
    <input id="name" name="name" type="text" value="" required>

    <label for="area">Užimamas plotas</label>
    <input id="area" name="area" type="number" value="" required>

    <label for="population">Gyventojų skaičius</label>
    <input id="population" name="population" type="number" value="" required>

    <label for="postcode">Miesto Pašto Kodas</label>
    <input id="postcode" name="postcode" type="text" value="" required>

<!--    <input type="hidden" name="id" value="">-->
<!--    <input type="hidden" name="country_id" value="">-->

    <button type="submit" class="submit-btn shadow-container">Saugoti</button>

  </form>
</template>

<script>
  export default {
    name: "FormComponent"
  }
</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*max-height: 100%;*/
    /*height: 380px;*/
    height: 100%;
  }

  form label {
    position:relative;
    letter-spacing: .04em;
    font-size: .7rem;
    background: #fff;
    width: fit-content;
    margin: 0 2em -1em;
    padding: .3em;
    z-index: 1;
  }

  form input,
  #country-select {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: .9em;
    margin-bottom: 1.3em;
  }

  .submit-btn {
    color: var(--clr-grey);
    font-family: var(--ff-oswald);
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    padding: .6em 1em;
    margin-top: .45em;
    width: fit-content;
    align-self: end;
  }

</style>