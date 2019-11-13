<!--
 * @Description: 这是客户页面（组件）
 * @Date: 2019-11-07 20:42:17
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 14:26:22
 -->
<template>
    <div class="customer-container">
        <div class="add">
            <el-button type="primary" @click="addCustomer">添加</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="phone" label="电话" width="180"></el-table-column>
            <el-table-column prop="email" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div>
                        <router-link class="btn" v-bind:to="'/Detail/'+scope.row.id">详情</router-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
    
<script>
export default {
    name: "customer",
    data() {
        return {
            tableData: [],
            keyword: ""
        };
    },
    created() {
        this.getCustomer();
    },
    methods: {
        getCustomer() {
            this.$http
                .get("http://localhost:3000/users")
                .then(function(response) {
                    this.tableData = response.body;
                    this.tableData = this.tableData.reverse();
                })
                .catch(function(error) {});
        },
        addCustomer() {
            this.$router.push({
                path: "/Add"
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.add {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>