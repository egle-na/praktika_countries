<template>
  <div class="shadow-container">
    <p>{{list}}</p>
    <ul>
      <li v-for="item in list" :key="item.id" ><a :href="item.relationships.cities.links.related">{{item.attributes.name}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MainData",
    props: [ "list" ],
  }
</script>

<style scoped>
  .shadow-container {
    padding: 1em;
  }
</style>