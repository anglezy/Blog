<!--
 * @Description: 这是测试页面（组件）
 * @Date: 2019-08-05 18:38:15
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 10:55:29
 -->
<template>
    <div id="app">
        <!-- <img src="./assets/logo.png" /> -->
        <router-view />
        <!-- <router-link to="/Test">Test</router-link>
        <router-view></router-view>-->
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
html,
body {
    height: 100%;
    font-size: 14px;
    /* background-color: rgb(38, 38, 38); */
    overflow: hidden;
}
#app {
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width: 1200px;
    overflow: hidden;
}
</style>
