<template>
  <div class="searchHead">
    <van-icon name="arrow-left" size="20px" @click="$router.go(-1)"/>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      class="searchText"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          value:''
        }
      },
      methods:{
        onSearch(){
          this.value = ''
        },
      }
    }
</script>

<style>
.searchHead{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px #eeeeee;
}
.searchText{
  margin-left: 30px;
}
</style>
