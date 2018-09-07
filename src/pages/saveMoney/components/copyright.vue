<template>
  <div>
    <div class="server">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="客服">
    </div>
    <div class="copyright">
      <p>-钱在手，天下随便走-</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'saveCopyright'
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
  .copyright{
    background:#eee;
    padding-bottom:50px;
    margin-bottom:100px;
    p{
      font-size:24px;
      color:#999;
      line-height:84px;
      text-align:center;
      border-top:.8px solid #ccc;
    }
  }
</style>
