<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <Search />
      </v-flex>

      <v-flex mb-4>
        <v-data-table
          :headers="headers"
          :items="flights"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td><router-link :to="`/flights/${ props.item.id }`">{{ props.item.flightCode }}</router-link></td>
            <td>{{ props.item.departureAirport }}</td>
            <td>{{ props.item.departureDate | formatDate }}</td>
            <td>{{ props.item.arrivalAirport }}</td>
            <td>{{ props.item.arrivalDate | formatDate }}</td>
          </template>
        </v-data-table>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Search from './search'

  export default {
    components: {
      Search
    },
    computed: {
      ...mapGetters('flight', [ 'flights' ])
    },
    data() {
      return  {
        headers: [
          { align: 'center', sortable: false, text: 'Flight Code' },
          { align: 'center', sortable: false, text: 'Departure Airport' },
          { align: 'center', sortable: false, text: 'Departure Time' },
          { align: 'center', sortable: false, text: 'Arrival Airport' },
          { align: 'center', sortable: false, text: 'Scheduled Time' }
        ]
      }
    }
  }
</script>

<style>

</style>
