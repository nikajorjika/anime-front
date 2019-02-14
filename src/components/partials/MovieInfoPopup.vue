<template>
  <div id="movie-info" v-if="movie">
    <div class="movie-info">
      <div class="close-popup" @click="close">
        <font-awesome-icon :icon="['fas','times']"/>
      </div>
      <div class="poster">
        <img :src="movie.poster" :alt="movie.name">
      </div>
      <div class="info-block">
        <h2>{{movie.name}}</h2>
        <h4>{{movie.genre.join(', ')}}</h4>
        <p>{{movie.plot}}</p>
        <p>{{movie.starring.join(', ')}}</p>
        <div class="watch-button">
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'movie-info-component',
  computed: {
    movie: function () {
      return this.$store.getters.movie
    }
  },
  methods: {
    close: function () {
      this.$store.commit('SET_MOVIE', null)
    }
  }
}
</script>
<style lang="scss">
#movie-info {
  display: flex;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .8);
  .movie-info {
    margin: auto;
    background: #101419;
    max-width: 980px;
    padding: 15px;
    position: relative;
    display: flex;
    .close-popup{
      display: block;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .poster{
      max-height: 470px;
      flex: 1;
      img{
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .info-block{
      display: flex;
      flex-direction: column;
      margin-left: 12px;
      width: 60%;
      h2{
        margin:0;
      }
      .watch-button{
        margin-top: auto;
        button{
          border:none;
          background: #469146;
          color: #fff;
          padding: 10px 20px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
