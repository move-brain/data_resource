<template>
  <div class="my-5"><span class="text-lg font-semibold">订阅</span></div>

  <div
    class="flex v justify-between w-[95%] pb-5 border-b-2 border-solid mb-5 border-[#e1e3e6]"
  >
    <span>系统通知</span>
    <el-switch
      v-model="value1"
      inline-prompt
      active-text="开启"
      inactive-text="关闭"
    />
  </div>

  <div
    class="flex v justify-between w-[95%] pb-5 border-b-2 border-solid mb-5 border-[#e1e3e6]"
  >
    <span>新闻动态</span>
    <el-switch
      v-model="value2"
      inline-prompt
      active-text="开启"
      inactive-text="关闭"
    />
  </div>

  <div
    class="flex v justify-between w-[95%] pb-5 border-b-2 border-solid mb-5 border-[#e1e3e6]"
  >
    <span>系统通知系统通知系统通知</span>
    <el-switch
      v-model="value3"
      inline-prompt
      active-text="开启"
      inactive-text="关闭"
    />
  </div>

  <div
    class="flex v justify-between w-[95%] pb-5 border-b-2 border-solid mb-5 border-[#e1e3e6]"
  >
    <span>新闻动态新闻动态</span>
    <el-switch
      v-model="value4"
      inline-prompt
      active-text="开启"
      inactive-text="关闭"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
let value1 = ref(true);
let value2 = ref(false);
let value3 = ref(true);
let value4 = ref(false);
</script>

<style scoped>
.v span {
  font-size: small;
  color: #303333;
}
</style>
