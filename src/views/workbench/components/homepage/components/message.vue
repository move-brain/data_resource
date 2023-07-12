<template>
  <div
    class="h-full w-full min-h-fit bg-w rounded-lg p-[3%] flex justify-start flex-col"
  >
    <div class="w-full h-fit flex justify-between">
      <span class="font-bold text-sm">我的消息</span>
      <div>
        <span class="text-[#939899] text-xs">查看更多</span>
        <el-icon :size="10"
          ><ArrowRightBold color="#939899" :size="20"
        /></el-icon>
      </div>
    </div>
    <div class="p-3 h-fit">
      <div
        class="w-full flex items-center border-b-[1px] pt-2 pb-3 border-solid border-[#e8eaed]"
        v-for="item in datali"
        :key="item.id"
      >
        <div
          v-if="item.isread"
          class="bg-[#f0f2f5] p-3 rounded-[50%] flex justify-center items-center"
        >
          <el-icon :size="15" color="#939899"><Bell /></el-icon>
        </div>
        <div
          v-else
          class="bg-[#ebf5f7] p-3 rounded-[50%] flex justify-center items-center"
        >
          <el-icon :size="15" color="#007f99"><Bell /></el-icon>
        </div>
        <div
          v-if="item.isread"
          style="color: #939899"
          class="ml-4 w-fit flex-1"
        >
          <span class="text-sm">{{ item.title }}</span>
          <div class="flex justify-between mt-1">
            <span class="text-[xx-small]">发送人：{{ item.sender }}</span>
            <span class="text-[xx-small]">{{ item.date }}</span>
          </div>
        </div>
        <div v-if="!item.isread" class="ml-4 w-fit flex-1">
          <span class="text-sm">{{ item.title }}</span>
          <div style="color: #939899" class="flex justify-between mt-1">
            <span class="text-[xx-small]">发送人：{{ item.sender }}</span>
            <span class="text-[xx-small]">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let datali = [
  {
    title: "5365454骨疾病研究",
    sender: "张伟",
    date: "2022-05-13 12:34:02",
    isread: false,
  },
  {
    title: "5367892脑疾病研究",
    sender: "李耀",
    date: "2022-23-30 02:22:10",
    isread: true,
  },
  {
    title: "8743962神经疾病研究",
    sender: "李禹宣",
    date: "2019-11-22 12:05:30",
    isread: true,
  },
  {
    title: "5362322脑疾病研究",
    sender: "李立新",
    date: "2022-03-12 12:23:12",
    isread: false,
  },
  {
    title: "3463462胃部疾病研究",
    sender: "蒲一番",
    date: "2021-12-09 12:10:30",
    isread: false,
  },
  {
    title: "8958462脑部疾病研究",
    sender: "朱玲玲",
    date: "2021-12-09 12:17:30",
    isread: false,
  },
];
</script>

<style>
.isread {
  background-color: #ebf5f7;
}
.notread {
  background-color: #f0f2f5;
}
</style>
