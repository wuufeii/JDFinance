<template>
  <section :class="[panelClass,cname]">
    <h4>{{title}}</h4>
    <slot/>
  </section>
</template>

<script>
export default{
  name: 'moneyPanel',
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
    >h4{
      text-align:left;
      font-size:36px;
      font-weight:bold;
      height:86px;
      line-height:86px;
    }
  }
</style>
