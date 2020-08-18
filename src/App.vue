<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import Footer from "./components/Footer/Footer";
  import Header from "./components/Header/Header";
export default {
  components:{
    Footer,
    Header
  }
}
</script>

<style>

</style>
