<template>
  <div>
    <div class="server">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="客服">
    </div>
    <div class="version">
      <div class="item" v-for="item of items" :key="item.src">
        <span class="img">
          <img :src="item.src" :alt="item.title">
        </span>
        <span class="title">{{item.title}}</span>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
      <p>投资有风险，购买需谨慎</p>
      <p>京东金融平台服务协议</p>
      <p>京东金融隐私政策</p>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      items: [{
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
        title: '客户端'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
        title: '触屏版'
      }, {
        herf: '/',
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
        title: '电脑板'
      }]
    }
  }
}
</script>

<style lang="scss">
  .server{
    width:100%;
    overflow:hidden;
    img{
      display:block;
      width:100%;
    }
  }
  .version{
    width:100%;
    padding-top:40px;
    padding-bottom:30px;
    overflow:hidden;
    .item{
      float:left;
      width:33.3333%;
      text-align:center;
      .img{
        display:inline-block;
        width:90px;
        height:90px;
        overflow:hidden;
        img{
          display:inline-block;
          width:100%;
        }
      }
      .title{
        display:block;
        font-size:26px;
        color:#999;
        padding-top:10px;
      }
    }
  }
  .copyright{
    background:#eee;
    p{
      font-size:24px;
      color:#999;
      line-height:84px;
      text-align:center;
      border-top:.8px solid #ccc;
    }
  }
</style>
