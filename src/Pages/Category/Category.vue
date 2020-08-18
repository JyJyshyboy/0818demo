<template>
  <div>
    <van-divider dashed :style="{ color: '#1a73e8', borderColor: '#1a73e8', padding: '0 16px' }">现有栏目</van-divider>
      <div class="myCategory">
        <div v-for="(item,index) in categoryArr" class="myCategoryItem" @click="delCategory(index)">{{item.title}}</div>
      </div>
    <van-divider dashed :style="{ color: '#ee0a24', borderColor: '#ee0a24', padding: '0 16px' }">已删除栏目</van-divider>
      <div class="myCategory">
        <div v-for="(item,index) in delArr" class="myCategoryItem" @click="addCategory(index)">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          categoryArr:[],
          delArr:[]
        }
      },
      methods:{
        async getCategory(){
          const res = await this.$ajax.get('/category')
          this.categoryArr = res.data
          //console.log(this.categoryArr)
        },
        delCategory(index){
          if(this.categoryArr.length < 4){
            this.$message.fail('至少3个分类')
            return
          }
          this.delArr.push(this.categoryArr[index])
          this.categoryArr.splice(index,1)
        },
        addCategory(index){
          this.categoryArr.push(this.delArr[index])
          this.delArr.splice(index,1)
        }
      },
      watch:{
        categoryArr(){
          localStorage.setItem('categoryArr',JSON.stringify(this.categoryArr))
          localStorage.setItem('delArr',JSON.stringify(this.delArr))
        }
      },
      created() {
        if(localStorage.getItem('categoryArr')&&localStorage.getItem('delArr')){
          this.categoryArr = JSON.parse(localStorage.getItem('categoryArr'))
          this.delArr = JSON.parse(localStorage.getItem('delArr'))
          return
        }
        this.getCategory()
      }
    }
</script>

<style>
.myCategory{
  display: flex;
  flex-wrap: wrap;
}
.myCategoryItem{
  width: 20%;
  text-align: center;
  border: 1px solid #1a73e8;
  padding: 5px;
  margin: 4px 0 4px 4px;
}
</style>
