<template>
  <div>
      <div v-for="(item,index) in commentGet" :key="index" class="commentContainer">
        <img :src="item.userinfo.user_img"/>
        <div class="commentText">
          <div class="commentHead">
            <span>{{item.userinfo.name}}</span>
            <span>{{item.comment_date}}</span>
          </div>
          <div>
            <p>{{item.comment_content}}</p>
          </div>
        </div>
        <comment-list-child :commentListChild="item.child"/>
      </div>
  </div>
</template>

<script>
  import commentListChild from "./commentListChild";
    export default {
      name:'commentChild',
      data(){
        return{
          commentGet:[],
        }
      },
      components:{
        commentListChild
      },
      methods:{
        async commentData(){
          const res = await this.$ajax.get('/comment/' + this.$route.params.id)
          //const commentList = this.changeCommentList(res.data)

          this.commentGet = this.changeCommentData(res.data)
        },
        changeCommentData(data){
          function fn(temp) {
            let arr1 = []
            for(let i = 0;i<data.length;i++){
              if(data[i].parent_id === temp){
                arr1.push(data[i]);
                data[i].child = fn(data[i].comment_id)
              }
            }
            return arr1
          }
          return fn(null)
        },
        changeCommentList(data){
          const res = data
          const arr = []
          let minArr = []
          res.forEach(d =>{
            if(minArr.length===10){
              minArr = []
            }
            if(minArr.length===0){
              arr.push(minArr)
            }
            minArr.push(d)
          })
          return arr
        }
      },
      created() {
        this.commentData()
      }
    }
</script>

<style>
.commentContainer{
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
}
.commentContainer img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
}
.commentText{
  display: flex;
  flex-direction: column;
}
.commentHead{
  display: flex;
  justify-content: space-between;
  flex: 1;
  font-size: 13px;
  color: #aaaaaa;
}
</style>
