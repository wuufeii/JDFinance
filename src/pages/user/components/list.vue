<template>
  <div>
    <div :class="$style.item" class="border-bottom" v-for="item of items" :key="item.src">
      <div :class="$style.left">
        <span :class="$style.img"><img :src="item.src" :alt="item.src"></span>
        <span :class="$style.title">{{item.title}}</span>
      </div>
      <div :class="$style.detail">{{item.detail}}<span class="iconfont">&#xe62d;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      items: [{
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
        title: '我的资产',
        detail: '产看全部资产'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
        title: '我的优惠券',
        detail: '查看全部'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
        title: '我的金币',
        detail: '赚金币兑好物'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
        title: '我的金条',
        detail: '查看额度'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
        title: '我的借钱',
        detail: '查看全部产品'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
        title: '我的白条',
        detail: '去提额'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70',
        title: '我的众筹',
        detail: '查订单/物流'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
        title: '我的保障',
        detail: '全方位保障'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.item{
  width:100%;
  height:112px;
  overflow:hidden;
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
