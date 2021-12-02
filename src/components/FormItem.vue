<template>
  <div>

    <label for="name">Pavadinimas</label>
    <input id="name" name="name" type="text" value="" required>

    <label for="area">Užimamas plotas</label>
    <input id="area" name="area" type="number" value="" required>
    <label for="population">Gyventojų skaičius</label>
    <input id="population" name="population" type="number" value="" required>
    <label for="postcode">Miesto Pašto Kodas</label>
    <input id="postcode" name="postcode" type="text" value="" required>
    <input type="hidden" name="id" value="">
    <input type="hidden" name="country_id" value="">

  </div>
</template>

<script>
  export default {
    name: "FormItem"
  }
</script>

<style scoped>



</style>