<template>
  <div>
    <table>
      <tr class="table-lables">
        <th>Pavadinimas</th>
        <th>Užimamas Plotas</th>
        <th>Gyventojų Skaičius</th>
        <th>Miesto Pašto Kodas</th>
        <th>Veiksmai</th>
      </tr>
      <tr v-for="city in list" :key="city.id">
        <td v-text="city.attributes.name">
<!--          <router-link :to="`/countries/${city.id}/cities`"  />-->
        </td>
        <td v-text="city.attributes.area" />
        <td v-text="city.attributes.population" />
        <td v-text="city.attributes.postal_code" />
        <actions :id="city.id" :type="city.type" />
      </tr>
    </table>
  </div>
</template>

<script>
  import Actions from "@/components/TableActions";
  export default {
    name: "CitiesTable",
    components: {
      Actions
    }
  }
</script>

<style scoped>

</style>