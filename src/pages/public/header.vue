<template>
  <div :class="$style.header">
    <div :class="$style.left"><span class="iconfont">&#xe624;</span></div>
    <div :class="$style.center">{{title}}</div>
    <div :class="$style.right"><span class="iconfont">&#xe637;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style lang="scss" module>
.header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:90px;
  background-color:#fff;
  overflow:hidden;
  z-index:100;
  .left{
    float:left;
    margin-left:20px;
    span{
      font-size:34px;
      font-weight:bold;
      line-height:100px;
      cursor:pointer;
    }
  }
  .center{
    text-align:center;
    line-height:90px;
    font-size:30px;
    position: absolute;
    left: calc(50% - 30px);
  }
  .right{
    float:right;
    margin-right:20px;
    span{
      font-size:40px;
      font-weight:bold;
      line-height:100px;
      cursor:pointer;
    }
  }
}
</style>
