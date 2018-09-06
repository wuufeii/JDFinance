<template>
  <panel title="白条服务" :class="$style.panel">
    <div :class="$style.left">
      <img src="@/assets/img/whiteCard.png" alt="小白卡">
    </div>
    <div :class="$style.right">
      <img src="@/assets/img/whiteCircle.png" alt="小白信用">
    </div>
  </panel>
</template>

<script>
import panel from '@/pages/common/panel'
export default {
  name: 'borrowStrip',
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
    padding:0 16px;
  }
  .left{
    width:64%;
  }
  .right{
    width:36%;
  }
  .left,.right{
    float:left;
    overflow:hidden;
    img{
      width:100%;
    }
  }
</style>
