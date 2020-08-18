<template>
  <div class="loginHead">
    <div class="headItem item1" @click="$router.replace('/home')"><van-icon name="arrow-left" /></div>
    <div class="headItem item2">手机{{title}}</div>
    <div class="headItem item3"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
       props:['title']
    }
</script>

<style>
.loginHead{
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: darkgray;
}
.headItem{
  display: flex;
  justify-content: center;
  align-items: center;
}
.item1{
  flex: 1;
}
.item2{
 flex: 6;
  margin-right: 10px;

}
.item3{
  flex: 1;
  margin-right: 10px;
  font-size: 15px;
  color: black;
}

</style>
