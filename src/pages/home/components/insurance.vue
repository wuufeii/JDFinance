<template>
  <panel title="保险障碍" :class="$style.panel">
    <section :class="$style.content">
      <slider cname="insurance-slider" :options="options" :items="items"></slider>
    </section>
  </panel>
</template>

<script>
import panel from '@/pages/common/panel'
import slider from '@/pages/common/slider'
export default {
  name: 'HomeInsurance',
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
        title: '碎屏保险'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
        title: '医疗险'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
        title: '日常小病险'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
        title: '意外险'
      }, {
        herf: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
        title: '抗癌险'
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
        height:314px;
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
