<template>
  <div :class="$style.box">
    <div :class="$style.left">
      <div :class="$style.content">
        <span :class="$style.percent">13.99%</span>
        <span :class="$style.detail" class="border-bottom">近一年来涨跌幅</span>
        <span :class="$style.buy">立即购买</span>
      </div>
    </div>
    <div :class="$style.right">
      <div :class="$style.item">
        <swiper :options="options" :not-next-tick="options.notNextTick">
          <swiper-slide v-for="item of items" :key="item.url">
            <router-link to="/" :class="$style.img">
              <img :src="item.src" alt="item.title">
              <span :class="$style.title">{{item.title}}</span>
              <span :class="$style.about">了解详情&gt;&gt;</span>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'moneySlider',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      options: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      },
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t25207/99/1104294713/6571/69cf0ca4/5b8905b4Nfba31901.jpg?width=160&height=160',
        title: '签到送豆'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24064/323/2369551871/31041/4ca7cef6/5b7cbd40N2fd795c5.jpg?width=160&height=160',
        title: '众筹立减400，全场景...'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t23854/78/2345368511/32416/5461a019/5b7cbd67Nfb18f49c.jpg?width=160&height=160',
        title: '5折首发，黑科技减肚子神器....'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  .box{
    width:100%;
    overflow:hidden;
    background-color:#fff;
  }
  .left{
    float:left;
    width:36%;
    overflow:hidden;
    .content{
      height:200px;
      margin:20px 0 20px 30px;
      box-sizing:border-box;
      background:linear-gradient(#ff6217, #ff4a1b);
      border-radius:10px;
      span{
        display:block;
        padding: 0 10px 0 20px;
        color:#fff;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      }
      .percent{
        font-size:46px;
        line-height:80px;
        font-weight:400;
      }
      .detail{
        font-size:22px;
        line-height:30px;
        padding-bottom:10px;
      }
      .buy{
        font-size:28px;
        line-height:50px;
      }
    }
  }
  .right{
    float:left;
    width:64%;
    .item{
      position:relative;
      height:200px;
      margin:20px 30px 20px 0;
      margin-left:20px;
      box-sizing:border-box;
      background:linear-gradient(#5075f9, #4464f5);
      .img{
        display:inline-block;
        width:160px;
        height:160px;
        overflow:hidden;
        padding:20px;
      }
      img{
        width:100%;
      }
      .title{
        position:absolute;
        height:140px;
        overflow:hidden;
        top:20px;
        left:200px;
        color:#fff;
        font-size:24px;
      }
      .about{
        position:absolute;
        top:140px;
        left:200px;
        color:#fff;
        font-size:24px;
      }
    }
  }
</style>
