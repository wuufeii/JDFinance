<template>
  <panel title="理财精选">
    <div :class="$style.item" class="border-bottom">
      <div :class="$style.panel" class="border-right">
        <h4>长乐盈<span>180天可质押</span></h4>
        <p :class="$style.percent">5.80%</p>
        <p :class="$style.detail">近1年历史化投资回报率</p>
      </div>
      <div :class="$style.panel">
        <h4>京智0号<span>大数据赋能</span></h4>
        <p :class="$style.percent">6.00%</p>
        <p :class="$style.detail">近1月历史化投资回报率</p>
      </div>
    </div>
    <div :class="$style.item">
      <div :class="$style.panel" class="border-right">
        <h4>建信养老飞益鑫</h4>
        <p :class="$style.percent">4.75%</p>
        <p :class="$style.detail">近7日年化收益</p>
      </div>
      <div :class="$style.panel">
        <h4>小白基金<span>超短期</span></h4>
        <p :class="$style.percent">5.8%</p>
        <p :class="$style.detail">近7日年化收益</p>
      </div>
    </div>
  </panel>
</template>

<script>
import panel from '@/pages/common/panel'
export default {
  name: 'HomeFinancial',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import "styles/element.scss";
  .item{
    width:100%;
    overflow:hidden;
  }
  .panel{
    @include panel;
    width:50%;
    float:left;
    >h4{
      display:inline-block;
      height:60px;
      line-height:60px;
      >span{
        display:inline-block;
        border:1px solid #FF5155;
        color:#FF5155;
        height:30px;
        line-height:34px;
        padding:2px 8px 4px;
        font-size:22px;
        margin-left:8px;
      }
    }
    >.percent{
      font-weight: 700;
      font-size: 44px;
      height: 58px;
      line-height: 58px;
      color: #FF5155;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding:0 32px;
    }
    >.detail{
      font-size: 24px;
      height: 34px;
      line-height: 34px;
      color: #999;
      padding:0 32px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
</style>
