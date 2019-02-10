<template>
  <div id="app">
    <navigation-component/>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background: #101419;
  margin:0;
}
a{
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
import NavigationComponent from './components/layouts/Navigation'
export default {
  components: { NavigationComponent }
}
</script>
