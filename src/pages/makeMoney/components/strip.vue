<template>
  <panel title="白条" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.left">
        <div :class="$style.item">
          <div :class="$style.box">
            <span :class="$style.round">小白信用分</span>
          </div>
          <span :class="$style.btn">查看详情</span>
        </div>
      </div>
      <div :class="$style.right">
        <div :class="$style.item">
          <div :class="$style.list" v-for="item of items" :key="item.src">
            <span :class="$style.img"><img :src="item.src" :alt="item.title"></span>
            <span :class="$style.title">{{item.title}}</span>
          </div>
        </div>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '@/pages/common/moneyPanel'
export default {
  name: 'moneyStrip',
  components: {
    panel
  },
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
        title: '白条'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
        title: '还款'
      }, {
        href: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
        title: '一元抢券'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
        title: '小白卡'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
        title: '金条'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
        title: '校园'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.panel{
  .content{
    width:100%;
    overflow:hidden;
  }
  .left{
    float:left;
    width:40%;
    .item{
      margin:20px 8px 30px 30px;
      text-align:center;
      overflow:hidden;
      box-shadow: 0 0 6px 3px rgba(101,118,155,.15);
      .box{
        width: 184px;
        height: 160px;
        margin:0 auto;
        overflow:hidden;
        .round{
          width: 140px;
          height: 140px;
          display:inline-block;
          border:20px solid #eee;
          border-radius:50%;
          margin-top:20px;
          font-size:24px;
          color:#c4a36c;
          text-align:center;
          line-height:120px;
        }
      }
      .btn{
        display:inline-block;
        padding: 2px 24px;
        font-size: 20px;
        background: #d4b575;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        color:#fff;
        margin-top:20px;
        margin-bottom:20px;
      }
    }
  }
  .right{
    float:left;
    width:60%;
    .item{
      margin:20px 30px 30px 8px;
      box-shadow: 0 0 6px 3px rgba(101,118,155,.15);
      overflow:hidden;
      min-height:245px;
      .list{
        float:left;
        width:33.3333%;
        padding:18px 0;
        text-align:center;
        .img{
          display:inline-block;
          width:56px;
          height:56px;
          overflow:hidden;
          margin:0 auto;
          img{
            width: 100%;
          }
        }
        .title{
          display: block;
          font-size: 24px;
          vertical-align: super;
        }
      }
    }
  }
}
</style>
