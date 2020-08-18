<template>
  <div>
    <LoginHead title="注册">
      <div slot="right" @click="$router.replace('/login')">登陆</div>
    </LoginHead>
    <div class="loginTitle">请注册</div>
    <login-text
      label="用户名"
      placeholder="请输入用户名"
      rule="^.{6,16}$"
      @inputChange="res => name = res"
      v-model="name"
      style="margin: 20px 0"
    />
    <login-text
      label="手机号"
      placeholder="请输入手机号"
      rule="^.{6,16}$"
      @inputChange="res => username = res"
      v-model="username"
    />
    <login-text
      label="密码"
      placeholder="请输入6到16位密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="res => password = res"
      v-model="password"
    />
    <LoginBtn text="注册" @loginSubmit="loginSubmit"/>
  </div>
</template>

<script>
  import LoginHead from "../../components/LoginHead/LoginHead";
  import LoginText from "../../components/LoginText/LoginText";
  import LoginBtn from "../../components/LoginText/LoginBtn";
  export default {
    data(){
      return{
        name:'',
        username:'',
        password:''
      }
    },
    components:{
      LoginHead,
      LoginText,
      LoginBtn
    },
    methods:{
      async loginSubmit(){
        let rule = /^.{6,16}$/
        if(rule.test(this.name)&&rule.test(this.username)&&rule.test(this.password)) {
          const res = await this.$ajax.post('/register', {
            name: this.name,
            username: this.username,
            password: this.password
          })
          if(res.data.code==200){
            this.$message.success(res.data.msg)
            localStorage.setItem('id',res.data.id)
            localStorage.setItem('token',res.data.objtoken)
            setTimeout(() =>{
              this.$router.push('/user')
            },1000)
          }else {
            this.$message.fail(res.data.msg)
          }
        }else{
          this.$message.fail('格式不正确')
        }
      }
    }
  }
</script>

<style>
  .loginTitle{
    text-align: center;
    font-size: 25px;
    color: forestgreen;
    font-weight: 500;
    margin-top: 20px;
  }

</style>
