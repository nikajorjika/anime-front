<template>
  <div class="movie-item" @click="openMovieInfo">
    <div class="movie-front">
      <div class="movie-poster">
        <img src="http://placekitten.com/500/300" alt="">
      </div>
      <div class="movie-info">
        <div class="info-container">
          <h3>Movie Title</h3>
          <p>S:2 | E:8</p>
        </div>
        <div class="control-container">
          <ul>
            <li @click.stop>
              <like-component icon="thumbs-up"/>
            </li>
            <li @click.stop>
              <like-component icon="thumbs-down"/>
            </li>
            <li @click.stop>
              <add-to-favourites/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LikeComponent from '../snippets/Like'
import AddToFavourites from '../snippets/AddToFavourites'

export default {
  name: 'movie-item-component',
  components: { AddToFavourites, LikeComponent },
  props: {
    movie: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    openMovieInfo: function () {
      console.log('open: ' + this.movie.src)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-item {
  cursor: pointer;
  transition: transform 450ms;
  &:hover {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: scale(1.1);
    z-index: 99;
  }
  .movie-front {
    position: relative;
    .movie-poster {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        display: block;
      }
    }
    .movie-info {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      padding: 12px;
      background-color: rgba(0, 0, 0, 0.3);
      .info-container {
        margin-top: auto;
        h3 {
          font-size: 17px;
          font-weight: normal;
          margin: 12px 0;
        }
        p {
          font-size: 17px;
          font-weight: normal;
          margin: 12px 0;
          color: #bbbbbb;
        }
      }
      .control-container {
        ul {
          padding: 0;
          display: flex;
          li {
            margin: auto 12px auto 0;
            &:last-of-type {
              margin-left: auto;
            }
          }
        }
      }
    }
  }
}
</style>
