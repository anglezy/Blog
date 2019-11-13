<!--
 * @Description: 这是添加用户的页面（组件）
 * @Date: 2019-11-11 10:30:53
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-12 21:18:00
 -->
<template>
    <div class="add-container">
        <form @submit="addCustomer">
            <!-- <div>用户信息</div> -->
            <div class="form-item">
                <label>姓名</label>
                <el-input v-model="name"></el-input>
            </div>
            <div class="form-item">
                <label>年龄</label>
                <el-input v-model="age"></el-input>
            </div>
            <div class="form-item">
                <label>性别</label>
                <el-input v-model="sex"></el-input>
            </div>
            <div class="form-item">
                <label>电子邮箱</label>
                <el-input v-model="email"></el-input>
            </div>
            <div class="form-item">
                <label>联系电话</label>
                <el-input v-model="phone"></el-input>
            </div>
        </form>
        <el-button type="primary" @click="addCustomer">添加</el-button>
        <el-alert title="添加成功" type="success" show-icon v-if="show"></el-alert>
    </div>
</template>
    
<script>
export default {
    name: "add",
    data() {
        return {
            name: "",
            age: "",
            sex: "",
            email: "",
            phone: "",
            show: false
        };
    },
    methods: {
        addCustomer(e) {
            if (!this.name || !this.phone || !this.email) {
                console.log("请填写信息");
                return;
            } else {
                let newCustomer = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                };
                this.$http.post("http://localhost:3000/users", newCustomer).then(res => {
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
    margin-top: 10px;
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