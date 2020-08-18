<template>
  <div>
    <div class="upContainer">
      <van-uploader :after-read="afterRead" preview-size="100px"/>
    </div>
    <edit-text left="头像">
      <div slot="right">
        <img src="../../img/untitled.jpg" v-if="!model.user_img" />
        <img :src="model.user_img" v-else />
      </div>
    </edit-text>
    <edit-text left="用户名" @editClick="nameShow=true">
      <span slot="right">{{model.name}}</span>
    </edit-text>
    <edit-text left="个性签名" @editClick="descShow=true">
      <span slot="right">{{model.user_desc}}</span>
    </edit-text>
    <van-dialog
      v-model="nameShow"
      title="用户名"
      show-cancel-button
      @confirm="confirmBtn"
    >
      <van-field v-model="nameText" autofocus/>
    </van-dialog>
    <van-dialog
      v-model="descShow"
      title="个性签名"
      show-cancel-button
      @confirm="confirmBtn"
    >
      <van-field v-model="descText" autofocus/>
    </van-dialog>
    <div class="editBtn">
      <van-button plain round type="primary" @click="$router.push('/user')">编辑完成</van-button>
    </div>
  </div>
</template>

<script>
  import EditText from "../../components/EditText/EditText";
    export default {
      data(){
        return{
          model:{},
          nameShow: false,
          descShow: false,
          nameText:'',
          descText:''
        }
      },
      components:{
        EditText
      },
      methods:{
        async getInfoDate(){
          const res = await this.$ajax.get('/user/' + localStorage.getItem('id'))
          this.model = res.data[0]
        },
        async afterRead(file){ //vant上传头像方法
          const formdata = new FormData()
          formdata.append('file',file.file)
          const res = await this.$ajax.post('/upload',formdata)
          this.model.user_img = res.data.url
          this.UserUpdate()
        },
        async UserUpdate(){
          const res = await this.$ajax.post('/update/' + localStorage.getItem('id'),this.model)
        },
        confirmBtn(){
          this.model.name = this.nameText
          this.model.user_desc = this.descText
          this.UserUpdate()
        }
      },
      created() {
        this.getInfoDate()
      }
    }
</script>

<style>
  .upContainer{
    position: absolute;
    width: 100%;
    height: 85px;
    overflow: hidden;
    opacity: 0;
  }
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.editBtn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.editBtn button{
  width: 70%;
}
</style>
