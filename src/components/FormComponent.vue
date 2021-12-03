<template>
  <form class="item-form" method="post" @submit.prevent >

    <slot>
      <form-item v-for="prop in names"
                 :key="prop.attr"
                 :attr="prop.attr"
                 :type="prop.type"
                 :label="prop.title"
                 :value="''"
      />
    </slot>

<!--    <input type="hidden" name="id" value="">-->
<!--    <input type="hidden" name="country_id" value="">-->

    <button type="submit" class="submit-btn shadow-container">Saugoti</button>

  </form>
</template>

<script>
  import FormItem from "@/components/FormItem";
  export default {
    name: "FormComponent",
    components: {FormItem},
    props: [ 'names', 'item' ]
  }
</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*max-height: 100%;*/
    /*height: 380px;*/
    height: 100%;
  }

  form label {
    position:relative;
    letter-spacing: .04em;
    font-size: .7rem;
    background: #fff;
    width: fit-content;
    margin: 0 2em -1em;
    padding: .3em;
    z-index: 1;
  }

  form input,
  #country-select {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: .9em;
    margin-bottom: 1.3em;
  }

  .submit-btn {
    color: var(--clr-grey);
    font-family: var(--ff-oswald);
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    padding: .6em 1em;
    margin-top: .45em;
    width: fit-content;
    align-self: end;
  }

</style>