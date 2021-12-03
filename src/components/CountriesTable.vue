<template>
  <div>

    <Table :headers="listParams.countries" :list="list" :type="'countries'" />

  </div>
</template>

<script>
  import Table from "@/components/Table";

  export default {
    name: "CountriesTable",
    components: {
      Table,
    },
    props: [ "list", 'listParams' ],
    data() {
      return {
        sendHeaders: [
          {title: 'Užimamas Plotas', attr: 'area'},
          {title: 'Gyventojų Skaičius', attr: 'population'},
          {title: 'Šalies Tel. Kodas', attr: 'phone_code'},
        ]
      }
    },
  }
</script>

