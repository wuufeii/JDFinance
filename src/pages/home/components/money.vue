<template>
  <panel title="有车有钱" :class="$style.panel">
    <div :class="$style.item" class="left">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t26287/10/82496566/21137/c6e0d587/5b83ce0cNa7a89997.png?width=375&height=233" alt="汽车">
    </div>
    <div :class="$style.item" class="right">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="汽车">
    </div>
  </panel>
</template>

<script>
import panel from '@/pages/common/panel'
export default {
  name: 'HomeMoney',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import "styles/element.scss";
  .panel{
    @include panel;
    overflow:hidden;
  }
  .item{
    width:50%;
    float:left;
    overflow:hidden;
    img{
      width:100%;
    }
  }
</style>
