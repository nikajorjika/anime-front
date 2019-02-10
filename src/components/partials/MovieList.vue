<template>
  <div class="movie-list">
    <div class="list-title">
      <h2>{{title}}</h2>
    </div>
    <ul :class="{slider: view === 'slider', list: view === 'list'}">
      <li v-for="(movie, index) in movies" :key="index">
        <movie-item-component :movie="movie"/>
      </li>
    </ul>
  </div>
</template>
<script>
import MovieItemComponent from './MovieItem'

export default {
  name: 'movie-list-component',
  props: {
    movies: {
      type: Array,
      default: () => []
    },
    view: {
      type: String,
      default: 'list'
    },
    title: {
      type: String,
      default: 'Movies'
    }
  },
  components: { MovieItemComponent }
}
</script>

<style lang="scss" scoped>
.movie-list {
  padding: 20px;
  .list-title{
    h2{
      margin:0 0 20px;
      font-size: 25px;
      font-weight: normal;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    &.slider{
      display: flex;
      overflow: hidden;
    }
    &.list{
      display: grid;
      grid-template-columns: repeat(auto-fit,  minmax(350px, 1fr) );
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
}
</style>
