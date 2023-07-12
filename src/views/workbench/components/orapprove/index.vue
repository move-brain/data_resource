<template>
  <div class="w-full h-full flex flex-col bg-[#f0f2f5]">
    <div class="w-full bg-white h-[50px] flex items-center pl-5">
      <span class="text-lg 2xl:text-xl font-semibold">审批中心</span>
    </div>
    <div class="flex-1 flex justify-start m-5">
      <div ref="scrollhei" class="w-[35%] bg-w"><orscroll /></div>
      <div class="flex-1 bg-w ml-3 pl-5 pt-5">
        <div>
          <span class="font-bold text-lg 2xl:text-xl">申请信息</span>
        </div>
        <div>
          <div class="mt-3">
            <span
              class="border-l-4 border-solid border-use pl-2 text-sm 2xl:text-base font-bold"
              >个人信息</span
            >
          </div>
          <div class="w-full mt-3 text-xs 2xl:text-sm">
            <el-row>
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">真实姓名</span>
                  <span>{{ message.perms.name }}</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">性别</span>
                  <span>{{ message.perms.sex }}</span>
                </div></el-col
              >
            </el-row>
            <el-row class="mt-3">
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">证件类型</span>
                  <span>{{ message.perms.certificatetype }}</span>
                </div></el-col
              >
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">证件号码</span>
                  <span>{{ message.perms.certificatecode }}</span>
                </div></el-col
              >
            </el-row>
            <el-row class="mt-3">
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">学历</span>
                  <span>{{ message.perms.education }}</span>
                </div></el-col
              >
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">职称</span>
                  <span>{{ message.perms.professional }}</span>
                </div></el-col
              >
            </el-row>
            <el-row class="mt-3">
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">手机号</span>
                  <span>{{ message.perms.phonenumber }}</span>
                </div></el-col
              >
            </el-row>
          </div>
        </div>
        <div>
          <div class="mt-3">
            <span
              class="border-l-4 border-solid border-use pl-2 text-sm 2xl:text-lg font-bold"
              >机构信息</span
            >
          </div>
          <div class="w-full mt-3 text-xs 2xl:text-sm">
            <el-row>
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">机构名称</span>
                  <span>{{ message.ormes.orname }}</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">机构邮箱</span>
                  <span>{{ message.ormes.oremail }}</span>
                </div></el-col
              >
            </el-row>
            <el-row class="mt-3">
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">部门</span>
                  <span>{{ message.ormes.department }}</span>
                </div></el-col
              >
              <el-col :span="12">
                <div class="flex justify-start flex-col">
                  <span class="text-[#939899] mb-2">职位</span>
                  <span>{{ message.ormes.position }}</span>
                </div></el-col
              >
            </el-row>
          </div>
        </div>
        <div class="h-[2px] w-full bg-[#eeeeee] my-3 2xl:my-5"></div>
        <div v-if="false">
          <div class="px-3">
            <span class="text-sm font-bold 2xl:text-lg">审批意见:</span>
            <el-input
              v-model="textarea"
              :rows="4"
              type="textarea"
              placeholder="Please input"
            />
          </div>
          <div class="px-3 mt-5">
            <el-button plain color="#007f99" class="mr-5">同意</el-button>
            <el-button plain color="#e74c4c">拒绝</el-button>
          </div>
        </div>
        <div>
          <div class="px-3 flex justify-start flex-col">
            <span class="text-sm font-bold 2xl:text-lg text-[#939899]"
              >审批意见:</span
            >
            <span class="text-sm"
              >这里是一毁审此意见这里是一段审仳意则区甲是一审批意见这里是一毁审批意见这里是一毁审批意见这里是一毁审此意见这里是一审此意见这里是一段审仳意见这里是一审批意
              见这里是一段审此意见这里是一段审批意见这里是一段审批意见这里是一段审批意见</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import orscroll from "@/views/workbench/components/orapprove/components/scroll.vue";
import { onMounted, ref } from "vue";
let scrollhei = ref("");
onMounted(() => {
  console.log(window.screen);
  console.log(scrollhei.value.clientHeight);
});

let message = ref({
  perms: {
    name: "李明",
    sex: "男",
    certificatetype: "身份证",
    certificatecode: "547653263231",
    education: "本科",
    professional: "高级工程师",
    phonenumber: "15278389999",
  },
  ormes: {
    orname: "华中科技大学同济医学院",
    oremail: "233232@qq.com",
    department: "xxxx部/技术部/开发组",
    position: "技术经理",
  },
});
</script>

<style></style>
