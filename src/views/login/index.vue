<template>
  <div class="con">
    <img
      src="https://img2.woyaogexing.com/2020/02/29/f41e1c075ee04c8395c1251a872ca8d7!1242x9999.jpeg"
      class="image"
      alt="Image"
    />

    <div class="box">
      <el-form
        ref="ruleFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item
          label="用户名"
          prop="username"
          style="border-radius: 50px"
        >
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 300px">
          <el-input v-model="loginForm.code" />
          <!-- <el-button @click="handlanVerificationCode">获取验证码</el-button> -->
          <img
            :src="codeImage"
            class="image"
            alt=""
            @click="handelaimage"
            style="width: 100px; height: 50px"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="handlLogin"
            >登录</el-button
          >
          <el-button @click="VerificationCode" size="large">获取密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import user from '../../api/user'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const codeImage = ref()
const token = ref()
const ruleFormRef = ref()
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
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
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入验证码'
    }
  ]
})
//验证码
const handelaimage = async () => {
  const response = await user.captcha()
  //   alert(1)
  console.log(response)
  codeImage.value = response.data.data.captchaImg
  console.log(codeImage)
  token.value = response.data.data.token
}
handelaimage()

//登录
const handlLogin = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const response = await user.login(
        loginForm.username,
        loginForm.password,
        loginForm.code,
        token.value
      )
      console.log(response)
      if (response.data.msg == '操作成功') {
        store.commit('user/setToken',token.value)
        router.push('/')
      }
      // localStorage.setItem('token', response.token.token)
    }
  })
}

//获取密码
const VerificationCode = () => {
  ElMessage('请扫描左边的二维码，回复【VueAdmin】获取登录密码')
}
</script>

<style lang="scss" scoped>
.image {
  width: 10px;
  height: 10px;
}
.con {
  width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image {
  width: 300px;
  height: 300px;
}
.box {
  width: 600px;
  height: 300px;
  background-color: white;
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