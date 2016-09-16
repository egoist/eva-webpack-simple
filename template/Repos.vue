<template>
  <div class="repos">
    <div class="repo" v-for="repo in repos">
      <h3>{{ repo.name }}</h3>
      <p v-html="repo.description"></p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'eva.js'

  export default {
    computed: {
      ...mapState(['repos', 'fetching'])
    },
    created() {
      this.$store.dispatch('fetchRepos')
    }
  }
</script>
