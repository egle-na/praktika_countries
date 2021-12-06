<template>
  <form class="item-form" @submit="sendData" method="post" @submit.prevent >

    <slot>
      <form-item v-for="prop in names"
                 :key="prop.attr"
                 :attr="prop.attr"
                 :type="prop.type"
                 :label="prop.title"
                 :value="newItem[prop.attr]"
                 @inputValue="storeValue"
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
    props: {
      names: Array ,
      item: {
        type: Object,
        default() {
          return {
            empty: true
          }
        },
      },
      type: String,
    } ,
        // 'names',
    data() {
      return {
        newItem: {},
        itemId: "",
      }
    },
    created() {
        if(this.type === 'edit') { // if
          this.itemId = this.item.id;
          this.newItem = { ...this.item.attributes };
        }
    },
    methods: {
      storeValue( attr, value) {
        this.newItem[attr] = value;
        console.log(value)
      },
      sendData() {
        const itemData = {data: { attributes: { ...this.newItem } } } // bury it deeper for backend
        const baseUrl = "https://akademija.teltonika.lt/countries_api/api";
        // console.log(this.newItem);
        // console.log(JSON.stringify(this.newItem));

        if(this.type === 'edit') {
          const url = baseUrl + this.$route.path + "/" + this.itemId;

          this.$http.put(url, itemData)
              .then(response => {
                this.catchResponse(response)
                // console.log(response);
                // console.log(response.data.message);
                // message actions successful

              }).catch(error => {
            console.error(error)
          })

          console.log(url, itemData, 'put');
        }
        else {
          const url = baseUrl + this.$route.path;
          this.$http.post(url, itemData)
            .then(response => {
              this.catchResponse(response);
              // message actions successful

          }).catch(error => {
            console.error(error)
            console.log(JSON.stringify(error))
          })
          console.log(url, itemData, 'post');
        }


        // this.newItem.attributes
      },
      editItem() {
        //all edit actions
      },
      catchResponse(response) {
        console.log(response); //
        console.log(response.data.message); //
        // send data
        this.$emit('reloadTable');
        // close card
        // reload table
        // display message

        // message actions successful
      }
    }
  }
</script>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*max-height: 100%;*/
    /*height: 380px;*/
    max-height: 100%;
  }

  .item-form {
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

  form input {
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
    margin-top: 1em;
    width: fit-content;
    align-self: end;
  }

</style>