<template>
  <div class="message-container shadow-container">
    <p>
      {{ disMessage }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "MessageCard",
    props: [ 'message' ],
    computed: {
      disMessage() {
        switch (this.message) {
          case 'The country has been added.':
            return 'Šalis sėkmingai pridėta!';
          case "The country has been deleted.":
            return 'Šalis ištrinta!';
          case "The country has beed updated.":
            return 'Šalis sėkmingai atnaujinta!';
          case "The city has been added.":
            return 'Miestas sėkmingai pridėtas!';
          case "The city has been deleted.":
            return 'Miestas ištrintas!';
          case "The city has beed updated.":
            return 'Miestas sėkmingai atnaujintas!';
          default:
            return this.message;
        }
      }
    }
  }
</script>

<style scoped>

  .message-container {
    position: fixed;
    bottom: 60px;
    left: 60px;
    background: var(--clr-light);
    padding: 1em 2.5em;
  }

</style>