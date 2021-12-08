<script>

  import AddItemBtn from "@/components/AddItemBtn";
  import Search from "@/components/Search";
  import Table from "@/components/Table";
  import PageNumbers from "@/components/PageNumbers";
  import FileUpload from "@/components/FileUpload";
  import ItemCard from "@/components/ItemCard";
  import FormComponent from "@/components/FormComponent";
  import {EventBus} from "@/main";

  export default {
    name: "dataMixin",
    components: {
      AddItemBtn,
      Search,
      Table,
      PageNumbers,
      FileUpload,
      ItemCard,
      FormComponent,
    },
    data() {
      return {
        baseUrl: "https://akademija.teltonika.lt/countries_api/api",
        defaultParams: { page: 1, per_page: 10, start_date: '', end_date: '', search: ''},
        // per_page: 10,

        // list: {}, // ----- data for the table
        // meta: {}, // ----- metadata about page num, ect.
      }
    },
    created() {
      this.getData(); // fetch data when page loads
      EventBus.$on('reloadTable', this.getData );
    },
    watch: {
      $route() { // fetch new data when the route changes
        const per_page = this.params.per_page
        this.params = {per_page, ...this.defaultParams};
        this.getData();
      },
    },
    methods: {
      getData() {
        let url = this.baseUrl + this.$route.path;

        this.$http.get( url , { params: this.params})
            .then(response => {
              this.list = response.data.data;
              this.meta = response.data.meta;
              this.checkIfPageAvailable(this.meta);
            })
            .catch(error => {
              console.error(error.response.data.message);
              this.$router.push('not-found')
            })
      },

      setParams(name, value) {
        this.params[name] = value;
        if(name !== 'page'){
          this.params['page'] = 1;
        }
        this.getData();
      },

      checkIfPageAvailable(meta) {
        if(meta.current_page > meta.last_page) {
          this.params.page = meta.last_page;
          this.getData();
        }
      }
    },

  }
</script>

<style scoped>

  .title-container {
    display: flex;
    align-items: center;
  }

  .title {
    text-transform: uppercase;
    color: var(--clr-grey);
    margin: 1.5rem 1.5rem 1.7rem 0;

    font-size: var(--fs-title);
    font-weight: 400;
    font-family: var(--ff-oswald);
  }

</style>