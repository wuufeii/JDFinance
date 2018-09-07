<template>
  <div>
    <div :class="$style.img">
      <img src="@/assets/img/goldCard.png" alt="金卡">
      <p :class="$style.title">最高可借</p>
      <p :class="$style.detail"><span>￥</span>3000,000</p>
      <p :class="$style.btn">立即登陆</p>
    </div>
    <div class="slider">
      <swiper :cname="$style.slider" :items="items"></swiper>
    </div>
  </div>
</template>

<script>
import swiper from '@/pages/common/slider'
export default{
  name: 'borrowSlider',
  components: {
    swiper
  },
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27586/329/371471228/15080/a421d31b/5b90a0abNad381578.png?width=690&height=154',
        title: '返200'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26182/258/316938203/20992/507599ef/5b8de296Nd180b997.png?width=690&height=154',
        title: '低利息'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27019/237/299023620/20678/8c71f6af/5b8de299N1d3d46ae.png?width=690&height=154',
        title: '一成首付'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26674/114/313537946/14656/a0d8c9ad/5b8de28aNc3741365.png?width=690&height=154',
        title: '送券'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.img{
  position:relative;
  overflow:hidden;
  margin-top:190px;
  padding:50px 30px 0;
  background-color:#fbfbfb;
  img{
    width:100%;
  }
  p{
    position:absolute;
    color:#fff;
    left:12%;
    z-index:1px;
  }
  .title{
    font-size:26px;
    top:25%;
  }
  .detail{
    font-size:66px;
    top:35%;
    span{
      font-size:40px;
    }
  }
  .btn{
    position: absolute;
    top: 55%;
    font-size: 25px;
    font-weight: 500;
    width: 180px;
    height: 55px;
    line-height: 50px;
    text-align: center;
    background: url(@/assets/img/btnBj.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
}
.slider{
  background-color:#fbfbfb;
  img{
    display:block;
    width:95%;
    margin:0 auto;
  }
}
</style>
