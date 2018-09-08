<template>
  <div class="list">
    <div v-for="item of items" :key="item.src">
      <div class="item">
        <router-link :to="{path:item.href}" tag="div" class="img-box">
          <img :src="item.src" alt="item.title">
        </router-link>
        <router-link :to="{path:item.href}" tag="span" class="item-title">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeList',
  data () {
    return {
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领福利'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }]
    }
  }
}

</script>

<style lang="scss">
  .list{
    width:100%;
    overflow:hidden;
    padding:20px 0;
    background-color:#fff;
    margin-bottom:20px;
    .item{
      float:left;
      width:calc(25% - 10px);
      padding:5px;
      text-align:center;
      .img-box{
        width:90px;
        height:90px;
        oberflow:hidden;
        margin:0 auto;
        img{
          width: 100%;
        }
      }
      .item-title{
        display: inline-block;
        font-size: 26px;
      }
    }
  }

</style>
