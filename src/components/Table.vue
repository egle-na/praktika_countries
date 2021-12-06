<template>
  <div>

    <table>
      <!-- Table Header -->
      <tr class="table-labels">
<!--        <th>Pavadinimas</th>-->
        <th v-for="(label, index) in headers" :key="index" v-text="label.title" />
        <th>Veiksmai</th>
      </tr>

      <!-- Table Body -->
      <tr v-for="item in list" :key="item.id">

        <!-- name column -->
        <td v-if="linkNeeded">
          <router-link :to="`/countries/${item.id}/cities`" v-text="item.attributes.name" />
        </td>

        <!-- custom columns -->
        <td v-for="({attr}, index) in thisHeaders" :key="index" v-text="item.attributes[attr]" />

        <!-- actions column -->
        <actions :id="item.id"
                 :type="item.type"
                 :item="item"
                 @editItem="editItem"
                 @reloadTable="$emit('reloadTable')"
        />

      </tr>
    </table>

    <ItemCard :type="'edit'"
              :item="itemToEdit"
              :inputs="headers"
              v-if="editIsOpen"
              @close="editIsOpen = false"
              @reloadTable="$emit('reloadTable')"
    />

  </div>
</template>

<script>
  import ItemCard from "@/components/ItemCard";
  import Actions from "@/components/TableActions";

  export default {
    name: "Table",
    props:[ 'headers', 'list', 'type'],
    components: {
      ItemCard,
      Actions,
    },
    data() {
      return {
        editIsOpen: false,
        itemToEdit: {},
        thisHeaders: [...this.headers],
        linkNeeded: false,
      }
    },
    created() {
        if (this.thisHeaders[0].link) {
          this.thisHeaders.shift();
          this.linkNeeded = true;
        }
        else {
          this.linkNeeded = false;
        }
    },
    methods: {
      editItem( data ) {
        console.log("elp",data);
        this.itemToEdit = this.list.find(item => item.id === data.id);
        this.editIsOpen = true;
      }
    }
  }
</script>

<style>

  table {
    color: var(--clr-grey);
    text-align: left;
    border-spacing: 0;
    width: 100%;
    /*margin: 1em;*/
    padding: 2em;
    font-size: .875rem;
  }

  /*tr {*/
  /*  display: flex;*/
  /*  width: 100%;*/
  /*  flex-direction: column;*/
  /*}*/

  th, td {
    border-right: solid 2px #c4c4c4;
    border-bottom: solid 2px #c4c4c4;
    padding: 1em;
    /*white-space: nowrap;*/
  }

  th:first-child, td:first-child {
    padding-left: 0;
  }

  th:last-child, td:last-child {
    border-right:none;
  }

  tr:last-child td {
    border-bottom: none;
  }

  th {
    font-family: var(--ff-oswald);
    font-weight: 400;
    font-size: 1.125rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem;
  }


</style>