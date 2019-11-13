<!--
 * @Description: 这是客户页面（组件）
 * @Date: 2019-11-07 20:42:17
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 14:11:36
 -->
<template>
    <div class="detail-container">
        <el-button class="goback" type="primary" @click="goback">
            <!-- <router-link class="btn" to="/Customer">返回</router-link> -->
            返回
        </el-button>

        <el-table :data="customer" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="phone" label="电话" width="180"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
            <el-table-column label="操作">
                <el-button type="primary">
                    <router-link class="btn" v-bind:to="'/edit/'+customer.id">编辑</router-link>
                </el-button>
                <el-button type="primary" @click="deleteCustomer(customer.id)">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>
    
<script>
export default {
    name: "detail",
    data() {
        return {
            customer: []
        };
    },
    methods: {
        getCustomer(id) {
            this.$http
                .get("http://localhost:3000/users/" + id)
                .then(function(response) {
                    this.customer.push(response.body);
                })
                .catch(function(error) {});
        },
        deleteCustomer(id) {
            this.$http.delete("http://localhost:3000/users/" + id).then(res => {
                this.$router.push({
                    path: "/Customer"
                });
            });
        },
        goback() {
            this.$router.go(-1);
        }
    },
    created() {
        this.getCustomer(this.$route.params.id);
    }
};
</script>
<style lang="scss" scoped>
.goback {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.item {
    margin-bottom: 10px;
    margin-right: 10px;
}
.btn {
    width: 100px;
    height: 40px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
</style>