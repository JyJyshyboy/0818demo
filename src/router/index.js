import Vue from 'vue'
import Router from 'vue-router'
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import Regi from "../Pages/Regi/Regi";
import Edit from "../Pages/Edit/Edit";
import Search from "../Pages/Search/Search";
import Article from "../Pages/Article/Article";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooter:true,
        showHeader:true,
        keepAlive:true
      }
    },
    {
      path: '/user',
      component: User,
      meta:{
        showFooter:true,
        istoken: true,
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regi',
      component: Regi
    },
    {
      path: '/edit',
      component: Edit,
      meta: {
        istoken:true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
})




