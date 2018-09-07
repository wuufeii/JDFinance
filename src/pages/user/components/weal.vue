<template>
  <div :class="$style.item">
    <div :class="$style.img">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="头像">
    </div>
    <div :class="$style.detail">会员福利<span class="iconfont">&#xe62d;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Weal'
}
</script>

<style lang="scss" module>
.item{
  width:100%;
  height:140px;
  margin-top:90px;
  margin-bottom:20px;
  overflow:hidden;
  background-color:#fff;
  .img{
    display:inline-block;
    width:100px;
    height:100px;
    margin:20px;
    overflow:hidden;
    background:#eee;
    border-radius:50%;
    img{
      width:100%;
    }
  }
  .detail{
    float:right;
    font-size:28px;
    line-height:140px;
    color:#999;
    padding-right:32px;
    span{
      font-size:28px;
      padding-left:12px;
    }
  }
}
</style>
