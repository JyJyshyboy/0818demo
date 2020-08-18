<template>
  <div class="editText" @click="editClick">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
export default {
  props:['left'],
  methods:{
    editClick(){
      this.$emit('editClick')
    }
  }
}
</script>

<style>
.editText{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
</style>
