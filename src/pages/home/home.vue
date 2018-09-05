<template>
  <div class="container">
    <home-header></home-header>
    <home-slider></home-slider>
    <home-list></home-list>
    <home-financial></home-financial>
    <home-product></home-product>
    <home-insurance></home-insurance>
    <home-money></home-money>
    <home-foot-list></home-foot-list>
    <home-contact></home-contact>
  </div>
</template>

<script>
import homeHeader from '../public/header'
import homeSlider from './components/slider'
import homeList from './components/list'
import homeFinancial from './components/financial'
import homeProduct from './components/product'
import homeInsurance from './components/insurance'
import homeMoney from './components/money'
import homeFootList from './components/footList'
import homeContact from './components/contact'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSlider,
    homeList,
    homeFinancial,
    homeProduct,
    homeInsurance,
    homeMoney,
    homeFootList,
    homeContact
  }
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
</style>
