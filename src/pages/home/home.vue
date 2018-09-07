<template>
  <div class="container">
    <home-header title="京东金融"></home-header>
    <home-subtitle></home-subtitle>
    <home-slider></home-slider>
    <home-list></home-list>
    <home-financial></home-financial>
    <home-product></home-product>
    <home-insurance></home-insurance>
    <home-money></home-money>
    <home-foot-list></home-foot-list>
    <home-contact></home-contact>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from '../public/header'
import homeSubtitle from '../public/subtitle'
import homeSlider from './components/slider'
import homeList from './components/list'
import homeFinancial from './components/financial'
import homeProduct from './components/product'
import homeInsurance from './components/insurance'
import homeMoney from './components/money'
import homeFootList from './components/footList'
import homeContact from './components/contact'
import homeFooter from '../public/footer'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSubtitle,
    homeSlider,
    homeList,
    homeFinancial,
    homeProduct,
    homeInsurance,
    homeMoney,
    homeFootList,
    homeContact,
    homeFooter
  }
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
</style>
