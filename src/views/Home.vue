<template>
  <div class="home">
    <movie-list-component :movies="movies"/>
  </div>
</template>

<script>

import MovieListComponent from '../components/partials/MovieList'

export default {
  name: 'home',
  components: { MovieListComponent },
  data: () => {
    return {
      movies: [ { name: 'Kill La Kill' }, { name: 'Kill La Kill' }, { name: 'Kill La Kill' }, { name: 'Kill La Kill' }, { name: 'Kill La Kill' }, { name: 'Kill La Kill' }, { name: 'Kill La Kill' } ]
    }
  }
}
</script>
