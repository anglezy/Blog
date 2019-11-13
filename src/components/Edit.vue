<!--
 * @Description: 这是添加用户的页面（组件）
 * @Date: 2019-11-11 10:30:53
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-13 13:49:31
 -->
<template>
    <div class="edit-container">
        <div>编辑用户</div>
        <form @submit="editCustomer">
            <!-- <div>用户信息</div> -->
            <div class="form-item">
                <label>姓名</label>
                <el-input v-model="customer.name"></el-input>
            </div>
            <div class="form-item">
                <label>电子邮箱</label>
                <el-input v-model="customer.email"></el-input>
            </div>
            <div class="form-item">
                <label>联系电话</label>
                <el-input v-model="customer.phone"></el-input>
            </div>
        </form>
        <el-button type="primary" @click="editCustomer">保存</el-button>
        <el-alert title="添加成功" type="success" show-icon v-if="show"></el-alert>
    </div>
</template>
    
<script>
export default {
    name: "edit",
    data() {
        return {
            name: "",
            age: "",
            sex: "",
            email: "",
            phone: "",
            show: false,
            customer: {}
        };
    },
    created() {
        this.getCustomer(this.$route.params.id);
    },

    methods: {
        getCustomer(id) {
            this.$http
                .get("http://localhost:3000/users/" + id)
                .then(function(response) {
                    this.customer = response.body;
                })
                .catch(function(error) {});
        },
        editCustomer(e) {
            if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                console.log("请填写信息");
                return;
            } else {
                let newCustomer = {
                    name: this.customer.name,
                    email: this.customer.email,
                    phone: this.customer.phone
                };
                this.$http.put("http://localhost:3000/users/" + this.$route.params.id, newCustomer).then(res => {
                    this.$router.push({
                        path: "/Customer"
                    });
                });
                this.show = true;
            }
            e.preventDefault();
        }
    }
};
</script>
<style lang="scss" scoped>
.add-container {
    width: 50%;
    // display: flex;
    // align-items: center;
    justify-content: center;
}
.form-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    label {
        flex-shrink: 0;
        width: 70px;
    }
    margin-bottom: 10px;
}
</style>