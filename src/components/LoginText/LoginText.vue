<template>
  <div>
    <van-field :rule="rule"
               :type="type"
               :label="label"
               :placeholder=placeholder
               v-model="text"
                />
  </div>
</template>

<script>
    export default {
      data(){
        return{
          text:''
        }
      },
      props:['label','type','rule','placeholder'],
      methods:{
        handlerulg(){
          const rule = new RegExp(this.rule)
          if(rule.test(this.text)){
            this.$emit('inputChange',this.text)
          }
        }
      },
      watch:{
        text(){
          this.handlerulg()
        }
      }
    }
</script>

<style>

</style>
