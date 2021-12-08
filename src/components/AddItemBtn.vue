<template>
  <div>

    <button id="add-item-btn"
            class="shadow-container"
            @click="buttonClicked"
            title="Pridėti naują"
    ><slot>&plus;</slot></button>

  </div>
</template>
<script>

  export default {
    name: 'AddItemBtn',
    props: [ 'type' ],
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      buttonClicked() {
        let eventName = this.type + 'Item'
        this.$emit(eventName)
      }
    }
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
    margin-right: 1.5rem;

    cursor: pointer;
    transform: scale(1);
    transition: transform 300ms, color 250ms, background-color 250ms;
  }

  #add-item-btn:hover {
    transform: scale(1.1);
  }

</style>
