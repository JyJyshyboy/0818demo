<template>
  <div>
    <div class="commentHead" v-if="userInfo.user_img">
      <img :src="userInfo.user_img" />
      <van-cell-group class="commentText">
        <van-field
          v-model="commentPost.comment_content"
          center
          clearable
          placeholder="请文明讨论"
          type="textarea"
          rows="1"
        >
          <van-button slot="button" size="small" type="primary" @click="postComment()">发表</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="commentLogin" @click="$router.push('/login')" v-else>
      <p>请登录</p>
    </div>
    <CommentList />
  </div>
</template>

<script>
  import CommentList from "./CommentList";
    export default {
      data(){
        return{
          userInfo:{},
          commentPost: {
            comment_content:'',
            comment_date:'',
            parent_id:null,
            article_id:null
          },
        }
      },
      components:{
        CommentList
      },
      methods:{
        async getUserInfo(){
          const res = await this.$ajax.get('/user/' + localStorage.getItem('id'))
          //console.log(res)
          this.userInfo = res.data[0]
        },
        async postComment(){
          const date = new Date()
          let month = date.getMonth() + 1
          let day = date.getDate()
          if(month < 10){
            month = '0' + month
          }
          if(day < 10){
            day = '0' + day
          }
          let commentDate = `${month}-${day}`
          this.commentPost.comment_date = commentDate
          this.commentPost.article_id = this.$route.params.id
          if(this.commentPost.comment_content){
            const res = await this.$ajax.post('/comment_post/' + localStorage.getItem('id'),this.commentPost)
            if(res.status===200){
              this.$message.fail('发表成功')
            }
          }else {
            this.$message.fail('请输入内容')
          }
          this.commentPost.comment_content = ''
        }
      },
      created() {
        this.getUserInfo()
      }
    }
</script>

<style>
  .commentHead{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .commentHead img{
    width: 60px;
    height: 60px;
    margin-left: 10px;
    border-radius: 50%;
  }
  .commentText{
    margin-right: 10px;
    width: 70%;
  }
  .commentLogin{
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    color: #aaaaaa;
    font-size: 30px;
  }
.commentItem{
  display: flex;
  align-items: center;
}
.commentItem p{

}
.commentItem span{
  font-size: 10px;
  color: #aaaaaa;
}
.commentItem img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
