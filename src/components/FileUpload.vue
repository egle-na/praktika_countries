<template>
  <div>

    <input class="file-input" type="file" @change="handleFileUpload" accept=".csv">
    <button @click="uploadFile" class="submit-btn shadow-container" :disabled="file.length">Pateikti</button>

  </div>
</template>
<script>
  import {EventBus} from "@/main";

  export default {
    name: 'FileUpload',
    props: [ 'baseUrl' ],
    data() {
      return {
        file: '',
      }
    },
    methods: {
      uploadFile() {

        const formData = new FormData();
        if (this.$route.name === "countries"){
          formData.append(this.$route.name, this.file)

        } else if (this.$route.name === "country"){
          formData.append("cities", this.file)
        }

        const url = this.baseUrl + this.$route.path + '/upload';
        this.$http.post(url,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
        ).then(response => {
          EventBus.$emit('sendMessage', response.data.message); // EVENT BUS
          EventBus.$emit('reloadTable');
          this.$emit('close');

          }).catch(error => console.error(error))
      },

      handleFileUpload(event){
        this.file = event.target.files[0];
      }

    }
  }
</script>
<style scoped>
  .file-input {
    /*background: lightblue;*/
    padding: 1.5em 0 2.5em;
    width: 100%;
  }

  .submit-btn {
    color: var(--clr-grey);
    font-family: var(--ff-oswald);
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    padding: .6em 1em;
    width: fit-content;
    margin-left: auto;

    transition: background-color 200ms, color 200ms;
  }

  .submit-btn:hover,
  .submit-btn:focus {
    background: var(--clr-accent);
    color: var(--clr-light);
  }

  .submit-btn:disabled {
    background: var(--clr-light);
    color: var(--clr-lightgrey);
    cursor: default;
  }

</style>
