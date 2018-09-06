<template>
  <swiper :cname="$style.slider" :items="items"></swiper>
</template>

<script>
import swiper from '@/pages/common/slider'
export default {
  name: 'HomeSlider',
  components: {
    swiper
  },
  data () {
    return {
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24952/162/1228570278/63421/bcc0349/5b8e7b38N86019cf6.jpg?width=750&height=320',
        title: '抢钢镚'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26512/34/326517325/50107/f56a8423/5b8e7b46Ndcd17730.jpg?width=750&height=320',
        title: '白条提额'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26446/57/332471646/34320/6e6dd305/5b8e7b4bN6423c3ac.jpg?width=750&height=320',
        title: '领福利'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26632/118/342320515/25298/36739ca5/5b8fa7b6N1179757a.png?width=750&height=320',
        title: '抢红包'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26470/243/353378516/49748/c2453678/5b8fa807Nf1213ecd.jpg?width=750&height=320',
        title: '投保'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.slider{
  margin-top:120px;
  img{
    width:100%;
  }
}
</style>
