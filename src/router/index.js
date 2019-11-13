/*
 * @Description: 这是路由设置页面（组件）
 * @Date: 2019-08-05 18:38:15
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 11:44:35
 */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Test from "@/components/Test";
import Customer from "@/components/Customer.vue";
import Detail from "@/components/Detail.vue";
import About from "@/components/About.vue";
import Add from "@/components/Add.vue";
import Edit from "@/components/Edit.vue";
import WriteBlog from "@/components/writeBlog.vue";
import Bbs from "@/components/Bbs.vue";
import Blog from "@/components/Blog.vue";
import Login from "@/components/Login.vue";

import { isAbsolute } from "path";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      children: [
        {
          path: "/Customer",
          name: "customer",
          component: Customer
        },
        // {
        //   path: "/Test",
        //   name: "Test",
        //   component: Test
        // },
        {
          path: "/About",
          name: "about",
          component: About
        },
        {
          path: "/Add",
          name: "add",
          component: Add
        },
        {
          path: "/Detail/:id",
          name: "detai",
          component: Detail
        },
        {
          path: "/Edit/:id",
          name: "edit",
          component: Edit
        },
        {
          path: "/writeBlog",
          name: "WriteBlog",
          component: WriteBlog
        },
        {
          path: "/Bbs",
          name: "bbs",
          component: Bbs
        },
        {
          path: "/Blog",
          name: "blog",
          component: Blog
        },
        {
          path: "/Login",
          name: "login",
          component: Login
        }
      ]
    }
  ]
});
