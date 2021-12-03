<template>
  <div>

    <label :for="attr">{{ label }}</label>
    <input :id="attr" :name="attr" :type="type" :value="value" required>

  </div>
</template>

<script>
  export default {
    name: "FormItem",
    props: [ 'attr', 'type', 'label', 'value' ]
  }
</script>

<style scoped>

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

  form input,
  #country-select {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: .9em;
    margin-bottom: 1.3em;
    width: 100%;
  }


</style>