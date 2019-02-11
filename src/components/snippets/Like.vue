<template>
  <div class="like-button" :class="{liked: isTrue}" @click="handleClick">
    <div class="like">
      <font-awesome-icon :icon="[ 'far',icon]"/>
    </div>
    <div class="unlike">
      <font-awesome-icon :icon="[ 'fas',icon]"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'like-component',
  props: {
    liked: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'thumbs-up'
    }
  },
  data: function () {
    return {
      isTrue: this.liked
    }
  },
  methods: {
    handleClick: function () {
      this.isTrue = !this.isTrue
      this.$emit('clicked', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.like-button {
  cursor: pointer;
  &.liked {
    .like {
      display: none;
    }
    .unlike {
      display: block;
    }
    &:hover {
      .like {
        display: block;
      }
      .unlike {
        display: none;
      }
    }
  }
  &:hover {
    .like {
      display: none;
    }
    .unlike {
      display: block;
    }
  }
  .like {
    display: block;
  }
  .unlike {
    display: none;
  }
}
</style>
