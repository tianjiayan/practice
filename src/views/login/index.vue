<template>
  <div class="box">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="用户名" prop="username" style="border-radius: 50px">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-form-item label="验证码" style="width: 300px">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button>获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// const loginForm = ref()

const loginForm = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码'
    }
  ]
})
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 300px;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 30px 50px;
}
.el-form-item {
  width: 400px;
  //   border-radius: 20px;
}
</style>