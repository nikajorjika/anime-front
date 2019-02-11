<template>
  <div class="home">
    <movie-list-component :movies="$store.getters.movies"/>
  </div>
</template>

<script>

import MovieListComponent from '../components/partials/MovieList'

export default {
  name: 'home',
  components: { MovieListComponent }
}
</script>
