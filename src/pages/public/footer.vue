<template>
  <div :class="$style.footer">
    <router-link :to="item.href" tag="div" :class="$style.item" v-for="item of items" :key="item.src">
      <span :class="$style.img" class="dark"><img :src="item.src" :alt="item.title"></span>
      <span :class="$style.img" class="blue"><img :src="item.srcActive" :alt="item.title"></span>
      <span :class="$style.title">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60',
        srcActive: '//img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&height=60',
        title: '首页'
      }, {
        href: '/money',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60',
        srcActive: '//img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60',
        title: '赚钱'
      }, {
        href: '/borrow',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60',
        srcActive: '//img12.360buyimg.com/jrpmobile/jfs/t10717/7/1897882784/3005/9f66e191/59e9d826Nadb4e6db.png?width=60&height=60',
        title: '借钱'
      }, {
        href: '/save',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56',
        srcActive: '//img12.360buyimg.com/jrpmobile/jfs/t19663/262/787103169/1654/ffffd4b/5aaa44adN4d5e3560.png?width=56&height=56',
        title: '省钱'
      }, {
        href: '/user',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60',
        srcActive: 'https://img12.360buyimg.com/jrpmobile/jfs/t11191/356/198417818/3320/c18da9bd/59e9d86aN8d1daea3.png?width=60&height=60',
        title: '金融会员'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  .footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index:100;
    overflow:hidden;
    background-color:#fff;
    border-top:.018rem solid #ccc;
  }
  .item{
    float:left;
    width:20%;
    .img{
      display:block;
      width:40px;
      margin:12px auto 8px;
      img{
        display:block;
        width:100%;
      }
    }
    .title{
      display:block;
      font-size:22px;
      text-overflow:ellipsis;
      white-space:nowrap;
      overflow:hidden;
      text-align:center;
      color:#999;
      padding-bottom:16px;
    }
  }
</style>

<style lang="scss">
  .dark{
    display:block !important;
  }
  .blue{
    display:none !important;
  }
  .router-link-exact-active{
    .dark{
      display:none !important;
    }
    .blue{
      display:block !important;
    }
    span{
      color:#4668ff!important;
    }
  }
</style>
