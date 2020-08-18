<template>
  <div class="footContainer">
    <van-tabbar
      v-model="active"
      active-color="#07c160"
    >
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar,TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>

<style scoped="less">

</style>
