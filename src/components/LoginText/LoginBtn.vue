<template>
  <div class="btnContainer">
    <div class="loginBtn" :text="text" @click="loginClick">
      {{text}}
    </div>
  </div>
</template>

<script>
    export default {
      props:['text'],
      methods:{
        loginClick(){
          this.$emit('loginSubmit')
        }
      }
    }
</script>

<style>
.btnContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBtn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: deeppink;
  height: 40px;
  padding: 5px 0;
  margin-top: 20px;
  border-radius: 20px;
  color: white;
}
</style>
