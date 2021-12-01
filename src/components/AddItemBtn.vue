<template>
  <div>

    <button id="add-item-btn" class="shadow-container" @click="isOpen = true" >&plus;</button>
    <ItemCard :type="'add'" v-show="isOpen" @close="isOpen = false"/>

  </div>
</template>
<script>
  import ItemCard from "@/components/ItemCard";

  export default {
    name: 'AddItemBtn',
    components: {ItemCard},
    params: [ "type" ],
    data() {
      return {
        isOpen: false
      }
    },
  }
</script>

<style>

  #add-item-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--clr-grey);
    background: var(--clr-light);
    font-size: 2rem;
    border: none;
    border-radius: 22px;

    width: 44px;
    height: 44px;
    padding: 0;

    cursor: pointer;
    transform: scale(1);
    transition: transform 300ms, color 250ms, background-color 250ms;
  }

  #add-item-btn:hover {
    /*background: #e8f0fa;*/
    /*color: var(--clr-light);*/
    transform: scale(1.1);
    /*box-shadow: 0 0 10px #333;*/
  }


</style>
