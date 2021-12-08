<template>
  <div>
    <main class="container">
      <div class="title-container">

        <!--  Title -->
        <h1 class="title">Šalys</h1>

        <!-- Add Item Btn -->
        <add-item-btn :type="'add'" @addItem="itemCardIsOpen = true">&plus;</add-item-btn>

        <!-- Upload Items Btn -->
        <add-item-btn :type="'upload'" @uploadItem="uploadCardIsOpen = true">
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
      <template v-slot:title>Pridėti Šalį</template> <!-- Card Title -->
      <form-component :names="listParams"
                      :type="'add'"
                      :baseUrl="baseUrl"
                      @close="itemCardIsOpen = false"/> <!-- Card Body -->
    </item-card>

    <!-- Upload Item Card -->
    <item-card v-if="uploadCardIsOpen"
               @close="uploadCardIsOpen = false" >
      <template v-slot:title>Įkelti Šalis</template> <!-- Card Title -->
      <FileUpload :baseUrl="baseUrl" @close="uploadCardIsOpen = false" /> <!-- Card Body -->
    </item-card>

  </div>
</template>

<script>
  import dataMixin from "@/components/mixins/dataMixin";

  export default {
    name: "Countries",
    mixins: [ dataMixin ],
    data() {
      return {
        params: { ...this.defaultParams },// --- query for filtering data initiated with default
        // per_page: 10,

        list: {}, // ----- data for the table
        meta: {}, // ----- metadata about page num, ect.

        listParams: [
          {title: 'Pavadinimas', attr: 'name', type: 'text', link: true },
          {title: 'Užimamas Plotas', attr: 'area', type: 'number' },
          {title: 'Gyventojų Skaičius', attr: 'population', type: 'number' },
          {title: 'Šalies Tel. Kodas', attr: 'phone_code', type: 'text' },
        ], // ---- current page data parameters

        itemCardIsOpen: false,
        uploadCardIsOpen:false,
      }
    },

  }
</script>
