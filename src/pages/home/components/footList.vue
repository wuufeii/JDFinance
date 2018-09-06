<template>
  <div :class="$style.list">
    <div v-for="item of items" :key="item.src">
      <div :class="$style.item">
        <router-link :to="{path:item.href}" tag="div" :class="$style.img">
          <img :src="item.src" alt="item.title">
        </router-link>
        <router-link :to="{path:item.href}" tag="span" :class="$style.title">{{item.title}}</router-link>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
        title: '旅游'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
        title: '医美'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
        title: '房抵贷'
      }, {
        herf: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
        title: '驾校'
      }, {
        href: '/',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
        title: '分期用'
      }]
    }
  }
}

</script>

<style lang="scss" module>
  .list{
    width:100%;
    overflow:hidden;
    padding:20px 0;
    background-color:#fff;
    margin-bottom:20px;
    .item{
      float:left;
      width:calc(20% - 10px);
      padding:5px;
      text-align:center;
      .img{
        padding:.06% 15.1515%;
        img{
          width: 100%;
        }
      }
      .title{
        display: inline-block;
        font-size: 26px;
      }
    }
  }

</style>
