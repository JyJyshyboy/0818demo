<template>
  <div class="headerContainer">
    <van-icon name="wap-home" size="25px" color="pink" class="flexItem1" @click="$router.push('/home')"/>
    <div class="flexItem2"><span class="searchBtn" @click="$router.push('/search')"><van-icon name="search" /></span></div>
    <van-icon name="contact" size="25px" color="pink" class="flexItem3" @click="$router.push('/user')"/>
  </div>
</template>

<script>
    export default {
    }
</script>

<style>
.headerContainer{
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
}
.flexItem1{
  flex: 1;
  margin-left: 10px;
}
.flexItem2{
  flex: 6;
  display: flex;
  justify-content: left;
  align-items: center;
}
.flexItem3{
  flex: 1;
  margin-right: 10px;
}
.searchBtn{
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  background-color: #eeeeee;
  border-radius: 12px;
}
</style>
