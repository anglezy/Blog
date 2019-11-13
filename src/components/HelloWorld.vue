<!--
 * @Description: 这是***页面（组件）
 * @Date: 2019-08-05 18:38:15
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 14:31:27
 -->
<template>
    <div class="hello">
        <!-- <h1>{{ msg }}</h1> -->
        <!-- <div>个人博客管理系统</div> -->
        <div class="nav">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1">
                    <router-link to="/Customer">用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/Blog">博客</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/Bbs">论坛</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/About">关于</router-link>
                </el-menu-item>

                <el-menu-item index="5"></el-menu-item>
            </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            picValue: "./assets/logo.png",
            photo: [],
            errorImg: "图片加载失败",
            activeIndex: "1",
            activeIndex2: "1"
        };
    },
    created() {
        this.photo = [
            require("../assets/logo.png"),
            require("../assets/images/account_approved.png"),
            require("../assets/images/icon_file.png")
        ];
    },
    methods: {
        handleSelect(key, keyPath) {}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .nav {
    width: 100%;
    height: 40px;
    background-color: #545c64;
    color: "#fff";
} */
.hello {
    height: 100%;
    overflow: hidden;
}
</style>
