<template>
  <div class="w-[100%] h-[100%] bg-[#e4e6e9] flex justify-center">
    <div class="w-[70%] h-[75%] relative top-[5%] max-h-[400px] max-w-[1100px]">
      <div class="h-[12vh] flex justify-center items-center text-2xl font-bold">
        <span>忘记密码</span>
      </div>
      <div
        class="bg-[#fff] w-[100%] h-fit rounded-xl flex flex-col justify-start items-center pb-[3%]"
      >
        <form size="small" :model="form" class="w-[45%] h-fit mt-[6%]">
          <el-form-item>
            <el-input placeholder="请输入账号" v-model="form.username" />
          </el-form-item>
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
          <el-form-item>
            <el-tooltip
              effect="light"
              placement="right-start"
              :visible="visible"
            >
              <template #content>
                <div
                  class="w-fit h-fit flex justify-start flex-col items-center"
                >
                  <div class="w-[100%] text-[#989d9e]">
                    <span>安全强度：{{ safe_strength }}</span>
                  </div>
                  <div class="w-[100%] text-[#989d9e] my-2">
                    <el-progress
                      stroke-width="8"
                      :percentage="progress"
                      show-text="false"
                      text-inside="true"
                    />
                  </div>
                  <div
                    class="allgo w-[100%] flex justify-start flex-col items-start text-[#989d9e]"
                  >
                    <div>
                      <svgicon
                        iconName="icon-kongxinduigou"
                        color="#989d9e"
                      ></svgicon
                      >最少8个字符
                    </div>
                    <div>
                      <svgicon
                        iconName="icon-kongxinduigou"
                        color="#989d9e"
                      ></svgicon
                      >不能全为数字、字母或特殊符号
                    </div>
                    <div>
                      <svgicon
                        iconName="icon-kongxinduigou"
                        color="#989d9e"
                      ></svgicon
                      >数字、字母、特殊字符任意组合
                    </div>
                  </div>
                </div>
              </template>
              <el-input
                @blur="isblur"
                @focus="isfocus"
                placeholder="请输入新密码"
                @input="inpass"
                v-model="form.password"
                show-password
              />
            </el-tooltip> </el-form-item
          ><el-form-item>
            <el-input
              placeholder="请确认新密码"
              v-model="form.newpassword"
              show-password
            />
          </el-form-item>
        </form>
        <div class="w-[45%] flex mt-[1%]">
          <el-button class="w-[100%]" color="#007f99">确认</el-button>
        </div>
        <span
          @click="gologin"
          class="mt-[2.5%] text-xs text-[#158aa2] cursor-pointer"
          >返回登录</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import et from "@/bus";
import { CircleCheckFilled, SetUp } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
let form = reactive({
  username: "",
  email: "",
  emailcode: "",
  password: "",
  newpassword: "",
});

let visible = ref(false);
let safe_strength = ref("");
let progress = ref(0);
let inpass = () => {
  console.log(form.password);
  let i = 0;
  let pattern_all = /^[a-zA-Z0-9!@#$%^&*\.]{8,}$/;
  let pattern_1 = /(?=.*[a-zA-Z0-9])/;
  let pattern_2 = /(?=.*[!@#$%^&*\.])/;
  console.log(pattern_all.test(form.password));
  if (pattern_all.test(form.password)) {
    if (pattern_1.test(form.password)) {
      i++;
    }
    if (pattern_2.test(form.password)) {
      i++;
    }
  }
  progress.value = i * 50;
};
let isfocus = () => {
  visible.value = true;
};
let isblur = () => {
  visible.value = false;
};

let gologin = () => {
  et.emit("gologin");
};
</script>
<style scoped>
.allgo div {
  display: flex;
  align-items: center;
}
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
