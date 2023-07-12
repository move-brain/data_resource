<template>
  <div class="w-full my-5">
    <span class="text-lg font-semibold">账号安全</span>
  </div>
  <div class="w-[90%] border-b-2 border-solid border-[#e1e3e6]">
    <div class="w-full flex justify-between">
      <div class="w-1/2 flex flex-col justify-start">
        <span>用户名</span>
        <span class="my-5 text-[#a5a9a9]"> {{ userinfo.name }} </span>
      </div>
      <div class="flex justify-end flex-col">
        <span class="text-use mb-5 cursor-pointer" @click="clickchange(1)"
          >修改</span
        >
      </div>
    </div>
  </div>
  <div class="w-[90%] border-b-2 mt-5 border-solid border-[#e1e3e6]">
    <div class="w-full flex justify-between">
      <div class="w-1/2 flex flex-col justify-start">
        <span>密码</span>
        <span class="my-5 text-[#a5a9a9]"> 当前密码强度: 中 </span>
      </div>
      <div class="flex justify-end flex-col">
        <span class="text-use mb-5 cursor-pointer" @click="clickchange(2)"
          >修改</span
        >
      </div>
    </div>
  </div>
  <div class="w-[90%] mt-5 border-b-2 border-solid border-[#e1e3e6]">
    <div class="w-full flex justify-between">
      <div class="w-1/2 flex flex-col justify-start">
        <span>邮箱</span>
        <span class="my-5 text-[#a5a9a9]"> {{ userinfo.email }} </span>
      </div>
      <div class="flex justify-end flex-col">
        <span class="text-use mb-5 cursor-pointer" @click="clickchange(3)"
          >修改</span
        >
      </div>
    </div>
  </div>
  <el-drawer class="relative" v-model="drawer1" direction="rtl">
    <template #header>
      <h1 style="color: black">修改用户名</h1>
    </template>
    <el-form label-position="top" :model="newusername" class="demo-form-inline">
      <el-form-item label="新用户名：">
        <el-input v-model="newusername.newusername" placeholder="请输入" />
      </el-form-item>
    </el-form>
    <div
      class="w-full absolute bottom-0 h-fit py-5 flex justify-end px-10 border-t-2 border-solid border-[#e1e3e6]"
    >
      <el-button type="primary">取消</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </el-drawer>
  <el-drawer class="relative" v-model="drawer2" direction="rtl">
    <template #header>
      <h1 style="color: black">修改密码</h1>
    </template>
    <el-form label-position="top" :model="newpass" class="demo-form-inline">
      <el-form-item label="原密码：">
        <el-input v-model="newpass.orpass" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="新密码：">
        <el-input v-model="newpass.newpass" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="确认新密码：">
        <el-input v-model="newpass.confirmpass" placeholder="请输入" />
      </el-form-item>
    </el-form>
    <div
      class="w-full absolute bottom-0 h-fit py-5 flex justify-end px-10 border-t-2 border-solid border-[#e1e3e6]"
    >
      <el-button type="primary">取消</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </el-drawer>
  <el-drawer class="relative" v-model="drawer3" direction="rtl">
    <template #header>
      <h1 style="color: black">修改邮箱</h1>
    </template>
    <el-form label-position="top" :model="newemail" class="demo-form-inline">
      <el-form-item label="新邮箱：">
        <el-input v-model="newpass.orpass" placeholder="请输入" />
      </el-form-item>
      <el-form-item class="flex justify-between" label="邮箱验证码：">
        <el-input class="b" v-model="newpass.newpass" placeholder="请输入" />
        <el-button plain class="ml-1">获取验证码</el-button>
      </el-form-item>
    </el-form>
    <div
      class="w-full absolute bottom-0 h-fit py-5 flex justify-end px-10 border-t-2 border-solid border-[#e1e3e6]"
    >
      <el-button type="primary">取消</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </el-drawer>
</template>

<script setup>
import { reactive, ref } from "vue";
let drawer1 = ref(false);
let drawer2 = ref(false);
let drawer3 = ref(false);
let userinfo = reactive({
  name: "ggbong",
  pass: "",
  email: "3259547378@qq.com",
});
let newusername = reactive({
  newusername: "",
});
let newpass = reactive({
  orpass: "",
  newpass: "",
  confirmpass: "",
});
let clickchange = (e) => {
  if (e == 1) {
    drawer1.value = true;
  } else {
    if (e == 2) {
      drawer2.value = true;
    } else {
      drawer3.value = true;
    }
  }
};
</script>

<style scoped>
.el-form-item ::v-deep .b {
  width: 60%;
}
</style>
