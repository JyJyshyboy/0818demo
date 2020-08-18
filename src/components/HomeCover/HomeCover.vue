<template>
  <div>
    <div class="cover" @click="pathTo()">
      <img :src="tabItem.img">
      <div class="spanContainer">
        <span>{{tabItem.commentlen?`${tabItem.commentlen}`:'0'}}</span>
        <span>22</span>
      </div>
    </div>
    <span>{{tabItem.name}}</span>
  </div>
</template>

<script>
    export default {
      props:['tabItem'],
      methods:{
        pathTo(){
          if(this.$route.path != `/article/${this.tabItem.id}`){
            this.$router.push(`/article/${this.tabItem.id}`)
          }
        }
      }
    }
</script>

<style scoped="less">
.cover{
  position: relative;
  display: flex;
}
.spanContainer{
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
}
img {
  height: 140px;
  width: 100%;
}
</style>
