<!--
 * @Description: 这是客户页面（组件）
 * @Date: 2019-11-07 20:42:17
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 09:37:58
 -->
<template>
    <div class="blog-container">
        <!-- <h1>欢迎来到个人博客</h1> -->
        <div class="blog-content">
            <div class="title">
                <span class="label">主题</span>
                <el-input placeholder="请输入标题" v-model="title"></el-input>
            </div>
            <div class="content">
                <span class="label">内容</span>
                <el-input
                    type="textarea"
                    placeholder="请输入博客内容"
                    :row="6"
                    maxlength="200"
                    show-word-limit
                    v-model="content"
                ></el-input>
            </div>
        </div>
        <el-button type="primary" @click="addBlog" class="btn">添加</el-button>
    </div>
</template>
    
<script>
export default {
    name: "about",
    data() {
        return {
            title: "学习",
            content: "我今天真的又学习到很多了希望每天都可以自己多学习一点"
        };
    },
    created() {
        this.title = "";
        this.content = "";
    },
    methods: {
        addBlog() {
            let newBlog = {
                title: this.title,
                content: this.content
            };
            this.$http.post("http://localhost:3000/blogs", newBlog).then(res => {
                console.log(1111);
                this.$router.push({
                    path: "/Blog"
                });
            });
        }
    }
};
</script>
<style lang="scss" scoped>
%flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.blog-container {
    width: 100%;
}
// .blog-content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
.title {
    // width: 50%;
    margin: 10px 10px;
    @extend %flex;
    white-space: nowrap;
}
.content {
    margin: 0 10px;
    // width: 50%;
    @extend %flex;
    white-space: nowrap;
}
.label {
    margin-right: 10px;
}
.btn {
    margin-top: 10px;
}
</style>