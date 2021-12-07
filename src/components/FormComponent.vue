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

    <div class="submit-btn-container">
      <select v-if="type === 'add' && itemType === 'cities'"
              v-model="countryId"
              class="select-country"
              required>
        <option selected disabled value="">Pasirinkti šalį</option>
        <option v-for="country in countriesList"
                :key="country.id"
                :value="country.id">{{ country.name }}</option>
      </select>

      <button type="submit" class="submit-btn shadow-container">Saugoti</button>
    </div>


<!--    <input type="hidden" name="id" value="">-->
<!--    <input v-if="type === 'edit'" type="hidden" name="country_id" :value="newItem">-->


  </form>
</template>

<script>
  import {EventBus} from "@/main";
  import FormItem from "@/components/FormItem";
  export default {
    name: "FormComponent",
    components: { FormItem },
    props: {
      names: Array ,
      item: {
        type: Object,
        default() {
          return {
            empty: true,
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
        itemType: '',
        countryId: '',
        countriesList: [],
      }
    },

    created() {
      if(this.type === 'edit') { // if edit form
        this.newItem = { ...this.item.attributes }; // assign item to new  var
        this.itemId = this.item.id; // store item id
        this.itemType = this.item.type; // city or country?
        if (this.itemType === "cities") { // if edit city
          this.countryId = this.item.relationships.country.data.id; // get related country id
        }
      } else {
        this.itemType = this.$route.name;
        console.log(this.itemType);
        if(this.itemType === 'cities'){
          this.getCountriesList();
        } else if(this.itemType === 'country') {
          this.countryId = this.$route.params.country_id;
          console.log(this.countryId)
        }
      }



      // console.log( this.itemType, this.countryId);
    },

    methods: {
      storeValue( attr, value) { // save input to item var
        this.newItem[attr] = value;
        // console.log(value)
      },

      sendData() {
        const itemData = {data: { attributes: { ...this.newItem } } } // bury it deeper for backend
        const baseUrl = "https://akademija.teltonika.lt/countries_api/api";
        let url;

        if(this.type === 'edit') { // edit item
          if (this.itemType === "countries"){
            url = baseUrl + "/countries/" + this.itemId;
          } else {
            url = baseUrl + "/countries/" + this.countryId + "/cities/" + this.itemId;
          }

          this.$http.put(url, itemData) // axios edit request
            .then(response => this.catchResponse(response))
            .catch(error => {
              console.error(error);
              console.log(JSON.stringify(error));
            })

          console.log(url, itemData, 'put'); //
        } else { // new item
          if (this.itemType === "countries"){
            url = baseUrl + "/countries";
          } else {
            url = baseUrl + "/countries/" + this.countryId + "/cities";
          }

          this.$http.post(url, itemData) // axios add request
            .then(response => this.catchResponse(response))
            .catch(error => {
              console.error(error);
              console.log(JSON.stringify(error));
            })

          // console.log(url, itemData, 'post');
        }
      },

      catchResponse(response) {
        console.log(response); //

        // reload table
        this.$emit('reloadTable');

        // close card

        // display message
        console.log(response.data.message); //

        // message actions successful
        EventBus.$emit('sendMessage', response.data.message)
      },

      getCountriesList() { // get list of countries
        console.log('elp')
        const url = "https://akademija.teltonika.lt/countries_api/api/countries?per_page=40";
        this.$http.get(url)
          .then(response => {
            let tempData = response.data.data;
            this.countriesList = tempData.map(country => {
              return {id :country.id, name: country.attributes["name"]}
            })
            // console.log(tempData, this.countriesList)

          }).catch(err => console.error(err))
      }
    },
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

  form input,
  select {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    padding: .9em;
    margin-bottom: 1.3em;
  }

  .submit-btn-container {
    margin-top: 1em;
    display: flex;
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
  }

  .submit-btn:hover,
  .submit-btn:focus {
    background: var(--clr-accent);
    color: var(--clr-light);
  }

  .select-country {
    background: transparent;
    width: 55%;

    margin: 0 2em 0 0;
  }

</style>