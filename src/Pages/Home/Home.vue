<template>
  <div>
    <van-tabs v-model="active" color="pink" sticky swipeable>
      <van-tab v-for="(item,index) in itemList" :title="item.title" :key="index">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="底线"
          @load="onLoad"
          class="coverContainer"
          :immediate-check=true
        >
          <HomeCover v-for="(tabItem,tabIndex) in item.list" :tabItem="tabItem" :key="tabIndex" class="coverItem"/>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import HomeCover from "../../components/HomeCover/HomeCover";
    export default {
      data(){
        return{
          active:0,
          itemList:[]
        }
      },
      components:{
        HomeCover
      },
      activated() {
        if(localStorage.getItem('categoryArr')){
          let categoryArr = JSON.parse(localStorage.getItem('categoryArr'))
          this.itemList = this.changeData(categoryArr)
          this.getArtical()
        }
      },
      methods:{
        async getTabs(){
          if(localStorage.getItem('categoryArr')){
            return
          }
          const res = await this.$ajax.get('/category')
          this.itemList = this.changeData(res.data)
          this.getArtical()
        },
        changeData(data){
          const category = data.map((item,index) =>{
            item.list = []
            item.page = 0
            item.pagesize = 8
            item.finished = false
            item.loading = true
            return item
          });
          return category
        },
        getActive(){
          const itemActive = this.itemList[this.active]
          return itemActive
        },
        async getArtical(){
          const itemActive = this.getActive()
          //console.log(itemActive._id)
          const res = await this.$ajax.get('/detail/' + itemActive._id,{
            params:{
              page:itemActive.page,
              pagesize:itemActive.pagesize
            }
          });
          //console.log(res)
          itemActive.list.push(...res.data);
          itemActive.loading = false;
          if(res.data.length < itemActive.pagesize){
            itemActive.finished = true
          }
        },

        onLoad(){
          const itemActive = this.getActive()
          setTimeout(() =>{
            itemActive.page += 1;
            this.getArtical()
          },1000)
        }
      },
      watch:{
        active(){
          const itemActive = this.getActive();
          if(!itemActive.list.length){
            this.getArtical()
          }
        }
      },
      created() {
        this.getTabs()
      }
    }
</script>

<style>
.coverContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.coverItem{
  width: 45%;
}
</style>
