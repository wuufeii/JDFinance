<template>
  <section :class="[panelClass,cname]">
    <h4>-{{title}}-</h4>
    <slot/>
  </section>
</template>

<script>
export default{
  name: 'Panel',
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style lang="scss">
  @import 'styles/element.scss';
  .panel{
    @include panel;
  }
</style>
