<template>
  <div>

    <table>
      <!-- Table Headers -->
      <tr class="table-labels">
        <th v-for="(label, index) in headers" :key="index" v-text="label.title" />
        <th>Veiksmai</th>
      </tr>

      <!-- Table Body -->
      <tr v-for="item in list" :key="item.id">

        <!-- column name -->
        <td v-if="linkNeeded">
          <router-link :to="`/countries/${item.id}/cities`" v-text="item.attributes.name" />
        </td>

        <!-- fill columns -->
        <td v-for="({attr}, index) in thisHeaders" :key="index">
          <span class="mobile-headers">
            {{ thisHeaders[index].title }}
          </span>
          <span>
            {{ item.attributes[attr] }}

          </span>
        </td>

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
        this.itemToEdit = this.list.find(item => item.id === data.id);
        this.editIsOpen = true;
      }
    }
  }
</script>

<style>

  table {
    color: var(--clr-grey);
    border-spacing: 0;
    width: 100%;
    padding: 2em;
    font-size: .875rem;
    text-align: center;
  }

  tr {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  th {
    display: none;
    text-align: left;
    font-weight: 400;
  }

  th, td {
    border-bottom: solid 2px #c4c4c4;
    padding: 1em;
  }

  th,
  td:first-child{
    font-family: var(--ff-oswald);
    font-size: 1.125rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  td:not(:last-child):not(:first-child){
    display: flex;
    justify-content: center;
  }

  td:not(:last-child):not(:first-child) span:not(.mobile-headers) {
    width: 100%;
    max-width: 100%;
  }

  td a{
    border-bottom: solid;
  }

  .mobile-headers {
    white-space: nowrap;
    color: var(--clr-lightgrey);
    align-self: start;
  }

  .mobile-headers:after {
    content: ':\00a0';
    margin-left: -3px;
  }

  td:first-child .mobile-headers {
    display:none;
  }

  @media (min-width: 750px) { /* web */
    table {
      text-align: left;
    }

    tr {
      display: table-row;
    }

    th, td {
      border-left: none;
      border-top: none;
      border-right: solid 2px #c4c4c4;
      border-bottom: solid 2px #c4c4c4;
      padding: 1em;
    }

    th:first-child, td:first-child {
      padding-left: 0;
    }

    td:not(:last-child):not(:first-child){
      display: table-cell;
      justify-content: start;
    }

    td a {
      font-weight: var(--fw-bold);
      border-bottom: none;
    }

    th:last-child, td:last-child {
      border-right:none;
    }

    tr:last-child td {
      border-bottom: none;
    }

    th, td {
      display: table-cell;
    }

    td:first-child {
      font-family: var(--ff-opensans);
      font-size: inherit;
      letter-spacing: initial;
      text-transform: initial;
    }

    .mobile-headers {
      display: none;
    }
  }

  @media (min-width: 550px) {
    td:not(:last-child):not(:first-child) span:not(.mobile-headers) {
      width: fit-content;
    }

    .mobile-headers {
      white-space: nowrap;
      color: var(--clr-lightgrey);
    }
  }

</style>