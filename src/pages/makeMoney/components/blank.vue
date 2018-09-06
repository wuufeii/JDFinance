<template>
  <panel title="银行精选" :class="$style.panel">
    <section :class="$style.content">
      <slider cname="insurance-slider" :options="options" :items="items"></slider>
    </section>
  </panel>
</template>

<script>
import panel from '@/pages/common/moneyPanel'
import slider from '@/pages/common/slider'
export default {
  name: 'moneyBlank',
  components: {
    panel,
    slider
  },
  data () {
    return {
      options: {
        slidesPerView: 2.6,
        spaceBetween: 30
      },
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t25234/62/727004676/6597/b4db9eca/5b7a216dN6de56fde.png?width=210&height=260',
        title: '随机存取'
      }, {
        herf: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t24826/239/218158021/6967/44cd20c2/5b69684cNfd713a4c.png?width=210&height=260',
        title: '30天期'
      }, {
        herf: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t24994/361/229423160/6672/40b69e82/5b696882N2ee57936.png?width=210&height=260',
        title: '半年期'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24550/302/1816063622/6876/146f6308/5b6a4dadNcdd576c3.png?width=210&height=260',
        title: '一年期'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24565/352/1791107580/8835/76358522/5b6a4dd2Nb30c5d84.jpg?width=210&height=260',
        title: '查看银行'
      }]
    }
  }
}
</script>

<style lang="scss">
.insurance-slider{
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
        height:258px;
        border:1px solid #eee;
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
