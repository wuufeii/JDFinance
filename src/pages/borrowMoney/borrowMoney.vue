<template>
  <div class="container">
    <money-header title="借钱"></money-header>
    <money-subtitle></money-subtitle>
    <money-slider></money-slider>
    <money-car></money-car>
    <money-list></money-list>
    <money-strip></money-strip>
    <money-activity></money-activity>
    <money-footer></money-footer>
  </div>
</template>

<script>
import moneyHeader from '../public/header'
import moneySubtitle from '../public/subtitle'
import moneySlider from './components/slider'
import moneyCar from '../home/components/money'
import moneyList from './components/list'
import moneyStrip from './components/strip'
import moneyActivity from './components/activity'
import moneyFooter from '../public/footer'
export default{
  name: 'borrowMoney',
  components: {
    moneyHeader,
    moneySubtitle,
    moneySlider,
    moneyCar,
    moneyList,
    moneyStrip,
    moneyActivity,
    moneyFooter
  }
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
</style>
