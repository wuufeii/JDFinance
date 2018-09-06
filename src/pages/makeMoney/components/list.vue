<template>
  <div :class="$style.list">
    <div v-for="item of items" :key="item.src">
      <div :class="$style.item">
        <router-link :to="{path:item.href}" tag="div" :class="$style.img">
          <img :src="item.src" alt="item.title">
        </router-link>
        <router-link :to="{path:item.href}" tag="span" :class="$style.title">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'moneyList',
  data () {
    return {
      items: [{
        herf: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t19825/175/2716312753/5076/dfe2d74f/5b7cc241N65ff1885.png?width=90&height=90',
        title: '领红包'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24682/140/813231673/5159/f8133cd6/5b7cc24fNb15a2746.png?width=90&height=90',
        title: '领福利'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t25789/23/702574804/4169/de69ccb0/5b7cc25bN4bcd4087.png?width=90&height=90',
        title: '领券'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24289/19/2403404444/4856/13f8bcb9/5b7cc264Nb9e090f2.png?width=90&height=90',
        title: '支付抽奖'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t22759/360/2331671780/3943/bed46aef/5b7cc26fN8d6ccb0d.png?width=90&height=90',
        title: '全部'
      }]
    }
  }
}

</script>

<style lang="scss" module>
  .list{
    width:100%;
    overflow:hidden;
    padding:20px 0;
    background-color:#fff;
    margin-bottom:20px;
    .item{
      float:left;
      width:calc(20% - 10px);
      padding:5px;
      text-align:center;
      .img{
        padding:.06% 15.1515%;
        img{
          width: 100%;
        }
      }
      .title{
        display: inline-block;
        font-size: 26px;
      }
    }
  }

</style>
