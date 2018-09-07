<template>
  <div :class="$style.box">
    <div :class="$style.item" class="border-bottom" v-for="item of items" :key="item.src">
      <div :class="$style.left">
        <span :class="$style.img"><img :src="item.src" :alt="item.src"></span>
        <span :class="$style.title">{{item.title}}</span>
      </div>
      <div :class="$style.detail"><span class="iconfont">&#xe62d;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userItem',
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70',
        title: '实名认证'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70',
        title: '帮助中心'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.box{
  padding-bottom:120px;
}
  .item{
    width:100%;
    height:112px;
    overflow:hidden;
    margin-top:20px;
    background-color:#fff;
    .left{
      padding-left:30px;
      display:inline-block;
      .img{
        display:inline-block;
        width:48px;
        height:48px;
        margin-bottom:32px;
        overflow:hidden;
        img{
          width:100%;
        }
      }
      .title{
        font-size:36px;
        color: #333;
        line-height:112px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .title{
      display:inline-block;
      overflow:hidden;
    }
    .detail{
      float:right;
      font-size:28px;
      line-height:112px;
      color:#999;
      padding-right:32px;
      span{
        font-size:28px;
        padding-left:12px;
      }
    }
  }
</style>
