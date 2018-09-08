<template>
  <panel title="众筹新品" :class="$style.panel">
    <section :class="$style.content">
      <slider cname="product-slider" :options="options" :items="items"></slider>
    </section>
  </panel>
</template>

<script>
import panel from '@/pages/common/panel'
import slider from '@/pages/common/slider'
export default {
  name: 'HomeProduct',
  components: {
    panel,
    slider
  },
  data () {
    return {
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30
      },
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24034/237/2596944199/36633/ee35259c/5b89084dN104f748b.jpg?width=335&height=421',
        title: '抢钢镚'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27823/115/186566632/43730/5981d84c/5b89085eN86237342.jpg?width=335&height=421',
        title: '白条提额'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27763/129/181005507/38624/7fd58e9c/5b89086cN16631b6e.jpg?width=335&height=421',
        title: '领福利'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24034/237/2596944199/36633/ee35259c/5b89084dN104f748b.jpg?width=335&height=421',
        title: '抢钢镚'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27823/115/186566632/43730/5981d84c/5b89085eN86237342.jpg?width=335&height=421',
        title: '白条提额'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27763/129/181005507/38624/7fd58e9c/5b89086cN16631b6e.jpg?width=335&height=421',
        title: '领福利'
      }]
    }
  }
}
</script>

<style lang="scss">
.product-slider{
  .swiper-container{
    box-sizing:border-box;
    padding:0 24px;
    .swiper-slide{
      a{
        display:inline-block;
        width:100%;
      }
      img{
        width:100%;
        display:block;
        border:1px solid #fafafa;
      }
    }
  }
}
</style>

<style lang="scss" module>
@import 'styles/element.scss';
.panel{
  @include panel;
  .content{
    padding-bottom:40px;
  }
}
</style>
