<template>
  <div class="icon">
    <svg>
      <use :xlink:href="iconSrc()"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'icon-component',
  props: {
    name: {
      type: String,
      default: ''
    },
    weight: {
      default: 'regular'
    }
  },
  methods: {
    iconSrc: function () {
      return require(`../../assets/icons/${this.weight}/${this.name}.svg`)
    }
  }
}
</script>
