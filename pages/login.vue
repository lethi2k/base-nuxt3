<template>
  <div class="background-login">
    <div class="container-400">
      <h1 class="text-center title-login">ログイン</h1>
      <div class="box-content w-100">
        <div class="sub-title my-2 text-sm text-gray-700">メールアドレス</div>
        <el-input v-model="user_name" class="inline-input w-100" />
      </div>

      <div class="box-content w-100">
        <div class="sub-title my-2 text-sm text-gray-700">パスワード</div>
        <el-input v-model="password" class="inline-input w-100" />
      </div>

      <el-row class="mb-1">
        <el-button type="info" class="w-100 btn-form-login">ログイン</el-button>
      </el-row>

      <div class="text-center mb-1">
        <a class="text-large text-gray-700 text-center"
          >パスワードを忘れた場合</a
        >
      </div>

      <el-row class="mb-1">
        <el-button type="info" class="w-100 btn-form-login btn-google" plain
          >Googleアカウントでログイン</el-button
        >
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const user_name = ref('')
const password = ref('')
</script>

<style scoped>
.title-login{
  font-weight: 700;
  font-size: 20px;
}
.btn-form-login {
  justify-content: center;
  align-items: center;
  padding: 13px 16px;
  height: 56px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

h1{
  margin-top: 0px !important;
}

.container-400 {
  margin-top: 200px !important;
  width: 400px;
  margin: 0px auto;
  padding: 40px 32px;
  background: #ffffff;
  border-radius: 4px;
}

.inline-input {
  height: 40px;
  border-radius: 4px;
}

.text-gray-700 {
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 12px;
}

.w-100 {
  width: 100%;
}

.box-content {
  margin-bottom: 1rem;
  width: 100%;
}

.mb-1 {
  margin-bottom: 1rem;
}

.text-center {
  text-align: center;
}
</style>
