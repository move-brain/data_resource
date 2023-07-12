<template>
  <div class="w-[100%] h-[100%] bg-[#e4e6e9] flex justify-center">
    <div class="w-[60%] h-[75%] relative top-[5%] max-h-[450px] max-w-[920px]">
      <div class="h-[12vh] flex justify-center items-center text-2xl font-bold">
        <span>忘记账号</span>
      </div>
      <div
        v-if="!isgetname"
        class="bg-[#fff] w-[100%] h-fit rounded-xl flex flex-col justify-start items-center pb-[12%]"
      >
        <div class="w-1/2 mb-[2%] mt-[8%]">
          <span class="text-xs text-[#969b9c]"
            >您可以通过验证账号的邮箱找回账号</span
          >
        </div>
        <form size="small" :model="form" class="w-[50%] h-fit">
          <el-form-item>
            <el-input placeholder="请输入邮箱" v-model="form.email" />
          </el-form-item>
          <el-form-item class="w-[100%] flex justify-between items-center">
            <el-input
              placeholder="请输入邮箱验证码"
              v-model="form.emailcode"
              class="havebutton"
            />
            <el-button class="b1" plain>获取验证码</el-button>
          </el-form-item>
        </form>
        <div class="w-[50%] flex mt-[1%]">
          <el-button class="w-[100%]" color="#007f99">下一步</el-button>
        </div>
        <span
          @click="gologin"
          class="mt-[2.5%] text-xs text-[#158aa2] cursor-pointer"
          >返回登录</span
        >
      </div>
      <div
        v-else
        class="bg-[#fff] w-[100%] h-fit rounded-xl flex pt-[3%] justify-center items-center pb-[8%]"
      >
        <div class="w-[50%] flex flex-col justify-start items-center">
          <img class="w-[70%]" src="@/assets/searchname.png" />
          <div class="text-xs">
            <span class="text-[#959a9b]">您的用户名为：</span>
            <span> AAASD_122213 </span>
          </div>
          <div class="text-xs mt-[4%] text-[#007f99] cursor-pointer">
            <span @click="gologin">前往登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import et from "@/bus";
let form = reactive({
  username: "",
  email: "",
  emailcode: "",
  password: "",
  newpassword: "",
});
let isgetname = ref(false);
let gologin = () => {
  et.emit("gologin");
};
</script>
<style scoped>
.rounded-xl ::v-deep .el-form-item {
  margin-bottom: 3vh;
}
.rounded-xl ::v-deep .el-input.havebutton {
  width: 73%;
}
.rounded-xl ::v-deep .el-button.b1 {
  width: 24%;
}
.el-form-item ::v-deep .el-form-item__content {
  display: flex;
  justify-content: space-between;
}
</style>
