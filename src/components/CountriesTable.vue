<template>
  <div>
    <table>
      <tr class="table-lables">
        <th>Pavadinimas</th>
        <th>Užimamas Plotas</th>
        <th>Gyventojų Skaičius</th>
        <th>šalies Tel. Kodas</th>
        <th>Veiksmai</th>
      </tr>
      <tr v-for="country in list" :key="country.id">
        <td>
          <router-link :to="`/countries/${country.id}/cities`" v-text="country.attributes.name" />
        </td>
        <td v-text="country.attributes.area" />
        <td v-text="country.attributes.population" />
        <td v-text="country.attributes.phone_code" />
        <actions :id="country.id" :type="country.type" />
      </tr>
    </table>
  </div>
</template>

<script>
  import Actions from "@/components/TableActions";

  export default {
    name: "CountriesTable",
    props: [ "list" ],
    components: { Actions }
  }
</script>

<style>

  table {
    color: var(--clr-grey);
    text-align: left;
    border-spacing: 0;
    width: 100%;
    /*margin: 1em;*/
    padding: 1em;
    font-size: .875rem;
  }

  th, td {
    border-right: solid 2px #c4c4c4;
    border-bottom: solid 2px #c4c4c4;
    padding: 1em;
    /*white-space: nowrap;*/
  }

  th:last-child, td:last-child {
    border-right:none;
  }

  tr:last-child td {
    border-bottom: none;
  }

  th {
    font-family: var(--ff-oswald);
    font-weight: 400;
    font-size: 1.125rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem;
  }

  td {
  }

</style>