<template>
  <div id="movie-info">
  </div>
</template>
<script>
export default {
  name: 'movie-info-component',
  props: {
    movie: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
#movie-info{
  display: block;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
}
</style>
