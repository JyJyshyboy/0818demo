import axios from 'axios'
import router from '../../src/router'
import Vue from 'vue'

const ajax =axios.create({
  baseURL:'http://112.74.99.5:3000/web/api'
})

ajax.interceptors.request.use(function (config) {
  if(localStorage.getItem('token')&&localStorage.getItem('id')){
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  router.beforeEach((to,from,next) =>{
    if((!localStorage.getItem('id')||!localStorage.getItem('token'))&&to.meta.istoken==true){
      router.push('/login')
      Vue.prototype.$message.fail('请重新登陆')
      return
    }
    next()
  })
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default ajax
