<template>
  <div>
    <div v-for="(item,index) in commentListChild" :key="index" class="commentListChild" v-if="!item.child">
      <img :src="item.userinfo.user_img"/>
      <div class="commentChildText">
        <div class="commentChildHead">
          <span>{{item.userinfo.name}}</span>
          <span>{{item.comment_date}}</span>
        </div>
        <div>
          <p>{{item.comment_content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:['commentListChild']
    }
</script>

<style>
.commentListChild{
  display: flex;
  padding: 5px 40px;
}
.commentChildText{
  display: flex;
  flex-direction: column;
}
.commentChildHead{
  display: flex;
  justify-content: space-between;
  flex: 1;
  font-size: 13px;
  color: #aaaaaa;
}
</style>
