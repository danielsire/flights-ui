<template>
  <v-flex xs3>
    <v-text-field
      append-outer-icon="search"
      label="Search"
      v-model="searchTerm"
      @input="search"
      clearable
    >
    </v-text-field>
  </v-flex>
</template>

<script>

  export default {
    mounted() {
      this.search()
    },
    methods: {
      search() {
        this.$store.dispatch('flight/search', {searchTerm:  this.searchTerm } )
      }
    },
    data() {
      return {
        searchTerm: ''
      }
    }
  }
</script>

<style>

</style>
