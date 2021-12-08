<template>
  <div id="app">

    <main class="container">
      <div class="title-container">

        <!--  Title -->
        <h1 class="title">{{ pageTitle }}</h1>

        <!-- Add Item Btn -->
        <add-item-btn :type="'add'" @addItem="itemCardIsOpen = true">&plus;</add-item-btn>

        <!-- Upload Items Btn -->
        <add-item-btn v-if="pageTitle !== 'Miestai'" :type="'upload'" @uploadItem="uploadCardIsOpen = true">
          <img src="../assets/icons/upArrow-87.svg" alt="">
        </add-item-btn>

      </div>

      <!-- Search and Date Filter -->
      <search :query="params.search" :perPage="params.per_page" @sendParams="setParams" />

      <!-- Table -->
      <Table :headers="listParams" :list="list" />

      <!-- Display page numbers -->
      <page-numbers :meta="meta" @setParams="setParams"/>

    </main>

    <!-- Add Item Card -->
    <item-card v-if="itemCardIsOpen"
               @close="itemCardIsOpen = false">
      <template v-slot:title>Pridėti Miestą</template> <!-- Card Title -->
      <form-component :names="listParams" :type="'add'" @close="itemCardIsOpen = false"/> <!-- Card Body -->
    </item-card>

    <!-- Upload Item Card -->
    <item-card v-if="uploadCardIsOpen"
               @close="uploadCardIsOpen = false" >
      <template v-slot:title>Įkelti Miestus</template> <!-- Card Title -->
      <FileUpload :baseUrl="baseUrl" @close="uploadCardIsOpen = false" /> <!-- Card Body -->
    </item-card>

  </div>
</template>

<script>
  import dataMixin from "@/components/mixins/dataMixin";

  export default {
    name: "Cities",
    mixins: [ dataMixin ],
    data() {
      return {
        params: { ...this.defaultParams },// --- set to default

        list: {}, // ----- data for the table
        meta: {}, // ----- metadata about page num, ect.

        listParams: [
          {title: 'Pavadinimas', attr: 'name', type: 'text', link: false },
          {title: 'Užimamas Plotas', attr: 'area', type: 'number' },
          {title: 'Gyventojų Skaičius', attr: 'population', type: 'number' },
          {title: 'Miesto Pašto Kodas', attr: 'postal_code', type: 'text' },
        ], // ---- current page data parameters

        pageTitle: 'Miestai',
        itemCardIsOpen: false,
        uploadCardIsOpen:false,
      }
    },

    created() {
      this.getPageTitle(); // fetch country name
      this.getData(); // fetch data when page loads // mixin
      // EventBus.$on('reloadTable', this.getData ); // mixin
    },

    methods: {
      getPageTitle() {
        if(this.$route.name === 'country'){
          this.$http.get(this.baseUrl + "/countries/" + this.$route.params.country_id)
            .then(response => {
              this.pageTitle = response.data.data.attributes.name;
            }).catch(error => console.error(error));
        }
      },
    },
  }
</script>
