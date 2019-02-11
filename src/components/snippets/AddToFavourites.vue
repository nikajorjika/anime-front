<template>
  <div class="add-to-favourites">
    <div class="add-to-favs">
      <font-awesome-icon icon="ellipsis-h"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-to-favourites'
}
</script>
<style lang="scss" scoped>
.add-to-favourites{
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0);
  padding: 2px 5px;
  &:hover{
    border: 1px solid rgba(0,0,0,0.3)
  }
}
</style>
