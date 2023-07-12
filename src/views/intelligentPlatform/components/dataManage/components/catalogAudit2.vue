<template>
  <div class="w-full h-full flex flex-col">
    <div class="bg-white w-full p-4"><span>目录审批</span></div>
    <div class="flex-1 flex justify-center m-4 bg-white">
      <div class="w-[40%] m-5">
        <el-form
          label-position="left"
          label-width="100px"
          :model="formLabelAlign"
        >
          <el-form-item label="信息资源分类">
            <div class="absolute -left-72 flex items-center justify-start">
              <div class="w-[2.5px] bg-use h-[12px] mr-2"></div>
              <span class="text-base font-semibold">目录分类</span>
            </div>
            <el-input v-model="formLabelAlign.classify" />
          </el-form-item>
          <el-form-item label="信息资源代码">
            <div class="absolute -left-72 flex items-center justify-start">
              <div class="w-[2.5px] bg-use h-[12px] mr-2"></div>
              <span class="text-base font-semibold">目录信息</span>
            </div>
            <el-input v-model="formLabelAlign.code" />
          </el-form-item>
          <el-form-item label="信息资源名称">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="信息资源摘要">
            <el-input
              type="textarea"
              :rows="4"
              v-model="formLabelAlign.abstract"
            />
          </el-form-item>
          <el-form-item class="mb-10" label="更新周期">
            <el-input v-model="formLabelAlign.period" />
          </el-form-item>
          <el-form-item label="审核意见">
            <div
              class="absolute -left-72 top-0 flex items-center justify-start"
            >
              <div class="w-[2.5px] bg-use h-[12px] mr-2"></div>
              <span class="text-base font-semibold">目录审批</span>
            </div>
            <el-input
              type="textarea"
              :rows="4"
              v-model="formLabelAlign.opinion"
            />
          </el-form-item>
          <el-form-item label="常用审核意见">
            <el-radio-group v-model="formLabelAlign.commonopinion">
              <el-radio label="通过" />
              <el-radio label="不通过" />
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"> 审核 </el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

let formLabelAlign = reactive({
  classify: "",
  code: "",
  name: "",
  abstract: "",
  period: "",
  opinion: "",
  commonopinion: "",
});
</script>

<style></style>
