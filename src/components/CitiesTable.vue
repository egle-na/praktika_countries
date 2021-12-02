<template>
  <div>

    <Table :headers="sendHeaders" :list="list" :link="'cities'" />

  </div>
</template>

<script>
  import Table from "@/components/Table";

  export default {
    name: "CitiesTable",
    components: {
      Table,
    },
    props: [ "list" ],
    data() {
      return {
        sendHeaders: [
          {title: 'Užimamas Plotas', attr: 'area'},
          {title: 'Gyventojų Skaičius', attr: 'population'},
          {title: 'Miesto Pašto Kodas', attr: 'postal_code'},
        ]
      }
    },
  }
</script>

<style scoped>
</style>