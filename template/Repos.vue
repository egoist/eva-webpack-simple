<template>
  <div class="repos">
    <p v-if="fetching">Loading...</p>
    <div class="repo" v-for="repo in repos">
      <h3>{{ repo.name }}</h3>
      <p v-html="repo.description"></p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'eva.js'

  export default {
    name: 'repos',
    computed: {
      ...mapState(['repos', 'fetching'])
    },
    created() {
      this.$store.dispatch('fetchRepos')
    }
  }
</script>
