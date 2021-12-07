<template>
  <div>

    <label :for="attr" :class="{'selected': isFocused}">{{ label }} </label>
    <input :name="attr"
           :id="attr"
           :type="type"
           v-model="newValue"
           required
           :pattern="patternValid(attr)"
           :step="patternValid(attr)"
           @focus="isFocused = true"
           @input="$emit('inputValue', attr, newValue )"
           @blur="isFocused = false">
  </div>
</template>

<script>
  export default {
    name: "FormItem",
    props: [ 'attr', 'type', 'label', 'value' ],
    data() {
      return {
        isFocused: false,
        newValue: '',
      }
    },
    created() {
      this.newValue = this.value;
    },
    methods: {
      patternValid(attr) {
        if( attr === 'name') {
          return `[,\\s\\p{L}]+`
        } else if(attr === 'area'){
          return '.1'
        }
      }
    }
  }
</script>

<style scoped>

  div {
    height: fit-content;
  }

  form label {
    position:relative;
    bottom: -.6em;
    letter-spacing: .04em;
    font-size: .7rem;
    background: #fff;
    width: fit-content;
    margin: 0 2em;
    padding: .3em;
    z-index: 1;
  }

  form input {
    color: var(--clr-grey);
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: .9em;
    width: 100%;
  }

  .selected {
    color: var(--clr-accent);
  }

</style>