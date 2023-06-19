<template>
<div class="w-[100%] h-[100%] bg-[#e4e6e9] flex justify-center items-center " >
<div class="w-[38%] h-[55vh] bg-white rounded-lg flex justify-center items-center min-w-min min-h-min max-w-[420px] max-h-[420px]" >
<div  class="w-[75%] h-[75%] flex-col ">
<div class="w-[100%] h-fit flex justify-between items-center" >
    <span class="font-[900] text-xl"  >登录</span>
    <div class="text-[#54a9ba] h-auto flex justify-start items-center"   >
    <span  @click="goperRegister" class="text-xs"  style="cursor: pointer;">个人注册</span>
    <div class="inline-block bg-[#c8cbcc] h-[12px] w-[1px] mx-3" ></div>
    <span @click="goorRegister"  class="text-xs"  style="cursor: pointer;" >机构注册</span>
</div>
</div>
<el-form  class="w-[100%]" :model="form" ref="loginForm"  :rules="loginRules" >
<div class="w-[100%]" >
    <el-form-item prop="username">
    <el-input
    v-model="form.username"
    class="w-[100%]  mt-[3vh]"
    size="large"
    placeholder="用户名"
    :prefix-icon="User"
    />
</el-form-item> <el-form-item  prop="password" >
    <el-input
    v-model="form.password"
    type="password"
    class="w-[100%]"
    size="large"
    placeholder="密码"
    :prefix-icon="SetUp"
    /></el-form-item>
</div><el-form-item class="w-[100%]" prop="isautologin" >
<div class="flex justify-between items-center text-[#565b5c]  w-[100%]" >
      <el-checkbox v-model="form.isautologin" label="自动登录" class="text-xs"   />
    <div class="text-[#565b5c]" >
        <span class="text-xs" @click="forgetpassword"  style="cursor: pointer;">忘记密码</span>
        <div class="inline-block bg-[#c8cbcc] h-[12px] w-[1px] mx-3"  ></div>
        <span class="text-xs"  @click="forgetname" style="cursor: pointer;" >忘记账号</span>
    </div>
</div></el-form-item></el-form>
<div class="w-[100%]">
    <el-button class="w-[100%] mb-5vh" color="#007f99"  @click="submitform" type="primary">登录</el-button>
</div>
</div>
</div>
</div>
</template>
<script setup >
import { User ,SetUp} from '@element-plus/icons-vue'
import {reactive,ref} from 'vue'
import {useuserinfoStore} from '@/store/userinfo.js'
import et from '@/bus'
let loginForm=ref('')
let userinfostore=useuserinfoStore()
let loginRules={
    username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min:6, message: '用户名长度最少6位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
}
let form=reactive({
    username:'',
    password:'',
    isautologin:false
})
let submitform=()=>{
    console.log(loginForm);
    console.log(loginForm.value.validate);
    loginForm.value.validate((valid)=>{
        if(valid){
   userinfostore.Userlogin(form).then((res)=>{
   //登陆成功后  做的一些动作   比如跳转路由   loading关闭等
   })
        }
    })
}
//个人注册
let goperRegister=()=>{
    et.emit("goperRegister")
}
//机构注册
let goorRegister=()=>{
    et.emit("goorRegister")
}
//忘记密码
let forgetpassword=()=>{
    et.emit("goforgetpass")
}
//忘记账号
let forgetname=()=>{
    et.emit("goforgetname")
}
</script  >
<style scoped sass >
.el-checkbox ::v-deep span{
font-size: 16px !important;
}
.el-input ::v-deep span{
    font-size: small;
}
</style>