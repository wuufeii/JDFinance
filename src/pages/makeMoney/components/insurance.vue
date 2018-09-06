<template>
  <panel title="保险障碍" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.left">
        <div :class="$style.item">
          <p :class="$style.title">135万</p>
          <p :class="$style.detail">健康意外财产</p>
          <span :class="$style.btn">免费领取</span>
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
  name: 'moneyInsurance',
  components: {
    panel
  },
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
        title: '车险'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
        title: '人寿'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
        title: '意外'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
        title: '财产'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
        title: '健康'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
        title: '旅行'
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
      overflow:hidden;
      box-shadow: 0 0 6px 3px rgba(101,118,155,.15);
      text-align:center;
      .title{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 46px;
        color: #1bd5c7;
        height: 60px;
        line-height: 60px;
        padding-top:60px;
      }
      .detail{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 22px;
        height: 34px;
        line-height: 34px;
      }
      .btn{
        display:inline-block;
        font-size: 18px;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 164px;
        height: 50px;
        line-height: 50px;
        background: #1bd5c7;
        border-radius: 25px;
        margin-top:20px;
        margin-bottom:13px;
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
      min-height:241px;
      .list{
        float:left;
        width:calc(33.3333% - 20px);
        padding:18px 10px;
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
