<template>
  <div>
    <div class="userBgd">
      <img src="../../img/userbackground.jpg">
    </div>
    <div class="userImg">
      <img :src="model.user_img" v-if="model.user_img"/>
      <img src="../../img/untitled.jpg" v-else/>
      <van-button size="normal" to="/edit" v-if="model.id">编辑资料</van-button>
    </div>
    <user-info :value="model.name" title="用户名"/>
    <user-info :value="model.user_desc" title="个性签名"/>
    <div class="logBtn">
      <van-button type="primary" @click="goTo('/login')" v-if="!model.id">去登陆</van-button>
      <van-button plain round type="danger" @click="logout" v-else>退出登陆</van-button>
    </div>
  </div>
</template>

<script>
  import UserInfo from "../../components/UserInfo/UserInfo";
    export default {
      data(){
        return{
          model:{
            user_desc:'',
            user_img:'',
            name:'',
            id:''
          }
        }
      },
      components:{
        UserInfo
      },
      methods:{
        goTo(path){
          this.$router.push(path)
        },
        logout(){
          this.$dialog.confirm({
            title:'确认登出吗？'
          }).then(() =>{
            localStorage.clear()
            this.$nextTick(() =>{
              this.getInfoDate()
            })
          })
        },
        async getInfoDate(){
          const res = await this.$ajax.get('/user/' + localStorage.getItem('id'))
          this.model = res.data[0]
        }
      },
      created() {
        this.getInfoDate()
      }
    }
</script>

<style>
.userBgd{
  width: 100%;
  height: 120px;
  overflow: hidden;
}
.userImg{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.userImg img{
  width: 85px;
  height: 85px;
  border-radius: 50%;
}
.logBtn{
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logBtn button{
  width: 70%;
}
</style>
