<template>
  <div :class="$style.list">
    <div :class="$style.item" v-for="item of items" :key="item.src">
      <div :class="$style.img">
        <img :src="item.src" :alt="item.title">
      </div>
      <p :class="$style.title">{{item.title}}</p>
      <p :class="$style.detail"><span :class="$style.code">￥</span>{{item.money}}<span :class="$style.text">起</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'saveList',
  data () {
    return {
      items: [{
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t23707/44/2644226664/64505/599639a6/5b88dffdNa10a1360.jpg!q70.dpg',
        title: '爱拍智能笔-“能拍照会修图”',
        money: '119.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t27295/357/323191038/21273/bcdcb1d0/5b8e415eNd41c906f.jpg!q70.dpg',
        title: '智能蒸煮一体辅食料理机 ',
        money: '68.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t25354/278/1231667615/81869/b834e699/5b8e2500Nce369a49.jpg!q70.dpg',
        title: '一双好靴 陪伴十年',
        money: '198.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t26800/302/322535046/25873/5b8de628/5b8e2c48N3549cdb9.jpg!q70.dpg',
        title: '酷博士儿童智能教育机器人',
        money: '495.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t26359/277/262773964/14968/316e8a44/5b8cd05fN98d8c182.jpg!q70.dpg',
        title: '匠心传承——纳瓢紫砂壶',
        money: '899.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t27802/157/269350975/80891/19d115b/5b8cf032N9e572351.jpg!q70.dpg',
        title: '硅胶蜂巢坐垫套装 暴晒无味',
        money: '78.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t26641/67/385255424/64144/bb52fb4a/5b906e2fN384807eb.jpg!q70.dpg',
        title: '天地遊侠电喷摩托车D3',
        money: '1999.00'
      }, {
        href: '/',
        src: '//img30.360buyimg.com/cf/jfs/t25582/83/1252904358/58310/84030ff5/5b8f4a0aN5abbbe38.jpg!q70.dpg',
        title: '因爱成器——景德镇中式餐具',
        money: '29.00'
      }]
    }
  }
}
</script>

<style lang="scss" module>
.list{
  width:100%;
  background-color:#fff;
  overflow:hidden;
  margin-top:20px;
  margin-bottom:20px;
  padding:0 0 20px 20px;
  .item{
    float:left;
    margin:20px 20px 0 0;
    width:calc(50% - 30px);
    background-color:#f1f1f1;
    .img{
      width:180px;
      height:141px;
      overflow:hidden;
      margin:20px auto;
        img{
          width:100%;
        }
      }
    .title{
      font-size:26px;
      font-weight:bold;
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
      padding:10px 30px;
      color:#444;
      text-align:center;
    }
    .detail{
      font-size:36px;
      font-weight:700;
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
      padding:10px 30px;
      color:#FF3232;
      text-align:center;
      .code{
        font-size:26px;
      }
      .text{
        padding-left:6px;
        font-size:20px;
        color:#666;
      }
    }
  }
}
</style>
