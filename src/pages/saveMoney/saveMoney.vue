<template>
  <div class="container">
    <save-header title="省钱"></save-header>
    <save-subtitle></save-subtitle>
    <save-slider></save-slider>
    <save-list></save-list>
    <save-copyright></save-copyright>
    <save-footer></save-footer>
  </div>
</template>

<script>
import saveHeader from '../public/header'
import saveSubtitle from '../public/subtitle'
import saveSlider from './components/slider'
import saveList from './components/list'
import saveCopyright from './components/copyright'
import saveFooter from '../public/footer'
export default {
  name: 'saveMoney',
  components: {
    saveHeader,
    saveSubtitle,
    saveSlider,
    saveList,
    saveCopyright,
    saveFooter
  }
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
</style>
