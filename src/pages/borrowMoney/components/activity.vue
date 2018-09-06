<template>
  <panel title="精品活动" :class="$style.panel">
    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t23137/151/2551779670/18585/904d7443/5b86cabeN3263779b.png?width=376&height=264" alt="家装节">
    </div>
    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t22264/337/1504407440/65624/b7d95603/5b2afbeaN7987d0b2.png?width=376&height=264" alt="奢品大牌">
    </div>
    <div :class="$style.list">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="零钢蹦">
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
  .list{
    padding:0 8px;
    overflow:hidden;
    margin-bottom:110px;
    img{
      width:100%;
    }
  }
</style>
