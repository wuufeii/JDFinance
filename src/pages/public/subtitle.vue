<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <span>注册</span>|<span>登陆</span>
    </div>
    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from '../common/btn'
export default {
  name: 'subTitle',
  components: {
    btn
  }
}
</script>

<style lang="scss" module>
  .header{
    color:#666;
    font-size:32px;
    height:100px;
    line-height:100px;
    position: fixed;
    top:90px;
    left:0;
    right:0;
    background:#f9f9f9 url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size:auto 50%;
    z-index:100;
    overflow:hidden;
  }
  .left{
    display:inline-block;
    font-size:28px;
    height:100px;
    line-height:100px;
    margin-left:16px;
  }
  .btnDownload{
    float:right;
    font-size:24px;
    border-width:0;
    height:56px;
    line-height:56px;
    min-width:120px;
    padding:0;
    border-radius:4px;
    margin:24px 24px 0 0;
    color:#fff;
  }
</style>
