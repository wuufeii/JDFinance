<template>
  <div class="container">
    <user-header title="金融会员"></user-header>
    <user-weal></user-weal>
    <user-list></user-list>
    <user-item></user-item>
    <user-footer></user-footer>
  </div>
</template>

<script>
import userHeader from '../public/header'
import userWeal from './components/weal'
import userList from './components/list'
import userItem from './components/item'
import userFooter from '../public/footer'
export default {
  name: 'User',
  components: {
    userHeader,
    userWeal,
    userList,
    userItem,
    userFooter
  }
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
</style>
