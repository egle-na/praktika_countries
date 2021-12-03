<template>
  <div>

    <Table :headers="listParams.cities" :list="list" :link="'cities'" v-if="!errors"/>

    <div v-else class="error">
      <p>Error: {{ errors }}</p>
    </div>

  </div>
</template>

<script>
  import Table from "@/components/Table";

  export default {
    name: "CitiesTable",
    components: {
      Table,
    },
    props: [ 'list', 'listParams' ],
    data() {
      return {
        sendHeaders: [
          {title: 'Užimamas Plotas', attr: 'area'},
          {title: 'Gyventojų Skaičius', attr: 'population'},
          {title: 'Miesto Pašto Kodas', attr: 'postal_code'},
        ]
      }
    },
    // watch: {
    //   list: { immediate: true, deep: true,},
    // },
    computed: {
      errors() {
        return this.list.error;
      }
    }
  }
</script>

<style scoped>
</style>