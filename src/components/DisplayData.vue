<template>
  <div class="shadow-container" v-if="!errors" >
    <p>{{list}}</p>
    <ul>
      <li v-for="item in list" :key="item.id" >{{item.attributes.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DisplayData",
    props: [ "list" ],
    computed: {
      errors() {
        return this.list.error;
      }
    }
  }
</script>

<style scoped>
  .shadow-container {
    padding: 1em;
  }
</style>