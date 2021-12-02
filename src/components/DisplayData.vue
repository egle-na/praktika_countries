<template>
  <div class="shadow-container">
    <p>{{list}}</p>
    <ul>
      <li v-for="item in list" :key="item.id" >{{item.attributes.name}}</li>
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