<!--
 * @Description: 这是博客页面（组件）
 * @Date: 2019-11-12 20:57:42
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 14:29:52
 -->
<template>
    <div class="blog-container">
        <div class="add">
            <el-button type="primary" @click="addBlog">写博客</el-button>
        </div>
        <div class="item" v-for="(item,index) in blog" :key="index">
            <div class="item-title">
                <h1>标题:</h1>
                <h1>{{ item.title}}</h1>
            </div>
            <div class="item-content">
                <h3>内容:</h3>
                <h3>{{ item.content}}</h3>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "about",
    data() {
        return {
            blog: []
        };
    },
    created() {
        this.getBlog();
    },
    methods: {
        getBlog() {
            this.$http
                .get("http://localhost:3000/blogs")
                .then(res => {
                    this.blog = res.body;
                    this.blog = this.blog.reverse();
                })
                .catch(err => {});
        },
        addBlog() {
            this.$router.push({
                path: "WriteBlog"
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.blog-container {
    margin-top: 20px;
    height: 880px;
    overflow: auto;
}
.item {
    margin: 10px 0 5px 0;
    border: 1px solid #cccc;
    .item-title {
        display: flex;
    }
    .item-content {
        display: flex;
    }
}
</style>