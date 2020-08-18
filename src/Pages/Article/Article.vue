<template>
  <div>
    <Header />
    <video :src="model.content" controls height="200px" width="100%"></video>
    <div class="articleInfo">
      <span class="icon">{{model.category.title}}</span>
      <p>{{model.name}}</p>
    </div>
    <div class="userInfo">
      <van-icon name="contact" />
      <p>{{model.userinfo.name}}</p>
      <span>88万观看  1445弹幕</span>
      <p>{{model.date}}</p>
    </div>
    <div class="articleLike">
      <div>
        <van-icon name="like-o" />
        <span>点赞</span>
      </div>
      <div @click="starArticle">
        <van-icon name="star-o" color="black" v-show="!star"></van-icon>
        <van-icon name="star" color="pink" v-show="star"></van-icon>
        <span>收藏</span>
      </div>
      <div>
        <van-icon name="add-o" />
        <span>下载</span>
      </div>
    </div>
    <hr>
    <Comment />
  </div>
</template>

<script>
  import Comment from "../../components/Comment/Comment";
  import Header from "../../components/Header/Header";
    export default {
      data() {
        return {
          model: {},
          star:false
        }
      },
      components: {
        Header,
        Comment
      },
      methods: {
        async getDetail() {
          const res = await this.$ajax.get('/article/' + this.$route.params.id)
          this.model = res.data[0]
        },
        async starArticle(){
          const res = await this.$ajax.post('/collection/' + localStorage.getItem('id'),{article_id:this.$route.params.id})
          if(res.data.msg === '收藏成功'){
            this.star = true
          }else{
            this.star = false
          }
          this.$message.fail(res.data.msg)
        },
        async isStar(){
          if(localStorage.getItem('token')){
            const  res = await this.$ajax.get('/collection/' + localStorage.getItem('id'),{
              params:{
                article_id:this.$route.params.id
              }
            })
            this.star = res.data.success
          }
        }
      },
      watch:{
        $route(){
          this.getDetail()
          this.isStar()
        }
      },
      created() {
        this.getDetail()
        this.isStar()
      },
    }
</script>

<style>
.articleInfo{
  display: flex;
  align-items: center;
}
.icon{
  margin: 0 10px;
  padding: 5px;
  background-color: #eeeeee;
  color: pink;
  border-radius: 20px;
}
.userInfo{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.userInfo p{
  font-size: 10px;
  margin: 0;
  padding: 5px 10px;
  color: #aaaaaa;
}
.articleLike{
  display: flex;
  font-size: 15px;
  margin-left: 10px;
}
hr{
  margin-top: 20px;
}

</style>
