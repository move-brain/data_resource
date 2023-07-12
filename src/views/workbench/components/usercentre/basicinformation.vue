<template>
  <div class="w-full mt-4">
    <span class="font-semibold text-lg text-[#000000]">基本信息</span>
  </div>
  <div class="w-full flex items-center my-5">
    <div class="h-[15px] w-[2px] bg-use"></div>
    <span class="font-bold ml-3">个人信息</span>
  </div>
  <el-form
    label-position="top"
    :inline="true"
    v-model="form"
    class="h-fit"
    size="small"
  >
    <el-form-item label="真实姓名：" prop="name">
      <el-input v-model="form.name" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="性别：" prop="sex">
      <el-select class="w-full" v-model="form.sex" placeholder="女">
        <el-option
          v-for="item in ['女', '男']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="证件类型：" prop="certificatetype">
      <el-select
        class="w-full"
        v-model="form.certificatetype"
        placeholder="身份证"
      >
        <el-option
          v-for="item in ['身份证']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="证件号码：" prop="certificatecode"
      ><el-input v-model="form.certificatecode" placeholder="请输入"
    /></el-form-item>
    <el-form-item label="学历" prop="education">
      <el-select class="w-full" v-model="form.education" placeholder="本科">
        <el-option
          v-for="item in ['本科', '专科', '硕士', '博士']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="职称：" prop="professional">
      <el-select
        class="w-full"
        v-model="form.professional"
        placeholder="高级工程师"
      >
        <el-option
          v-for="item in ['高级工程师', '中级工程师']"
          :key="item"
          :label="item"
          :value="item"
        /> </el-select
    ></el-form-item>
    <el-form-item label="手机号：" prop="phonenumber"
      ><el-input v-model="form.phonenumber" placeholder="请输入"
    /></el-form-item>
  </el-form>
  <div class="w-full flex items-center my-5">
    <div class="h-[15px] w-[2px] bg-use"></div>
    <span class="font-bold ml-3">所属机构</span>
    <div class="flex justify-start items-center ml-5 cursor-pointer">
      <el-icon color="#3b9cb0"><CirclePlus /></el-icon>
      <span class="text-sm ml-2" style="color: #3b9cb0">添加机构</span>
    </div>
  </div>
  <div class="w-full flex items-center">
    <div class="w-[80%] bg-[#f5f7fa] h-fit p-6 rounded-lg">
      <el-form
        :inline="true"
        label-position="top"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item label="机构名称">
          <el-select
            class="w-full"
            v-model="formInline.name"
            placeholder="请选择"
          >
            <el-option
              v-for="item in ['高级工程师', '中级工程师']"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="机构邮箱">
          <el-input v-model="formInline.email" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="部门">
          <el-select
            class="w-full"
            v-model="formInline.department"
            placeholder="请选择"
          >
            <el-option
              v-for="item in ['高级工程师', '中级工程师']"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="职位">
          <el-input
            v-model="formInline.position"
            placeholder="请输入"
            clearable
          />
        </el-form-item>
      </el-form>
    </div>
    <div style="font-size: small; color: #007f99">
      <span class="ml-5">保存</span>
      <span class="ml-5">取消</span>
    </div>
  </div>
  <div class="mt-6">
    <el-button color="#007f99" type="primary">保存</el-button>
    <el-button>取消</el-button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
let form = reactive({
  name: "李桂芬",
  sex: "女",
  professional: "高级工程师",
  education: "本科",
  certificatetype: "身份证",
  certificatecode: "450833198807085672",
  phonenumber: "15677881087",
});

let formInline = reactive({
  name: "",
  email: "",
  department: "",
  position: "",
});
</script>

<style scoped>
.el-form-item {
  width: 40%;
}
.el-input ::v-deep .el-input__inner {
  color: black !important;
}
.el-select ::v-deep .el-input__inner {
  color: black;
}
</style>
