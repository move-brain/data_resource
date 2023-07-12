<template>
  <div
    class="h-full w-full min-h-fit bg-w rounded-lg p-[2%] flex justify-start flex-col"
  >
    <div class="w-full h-fit flex justify-between">
      <span class="font-bold text-sm">项目管理</span>
      <div>
        <span class="text-[#939899] text-xs cursor-pointer">查看更多</span>
        <el-icon :size="10"
          ><ArrowRightBold color="#939899" :size="20"
        /></el-icon>
      </div>
    </div>
    <div ref="tablelength" class="p-[2%] h-full w-full max-w-[100%] table">
      <el-table :data="tableData">
        <el-table-column prop="id" label="ID" :width="length.w1" />
        <el-table-column prop="topic" label="题目" :width="length.w2" />
        <el-table-column prop="role" label="角色" :width="length.w3" />
        <el-table-column prop="state" label="状态" :width="length.w4" />
        <el-table-column
          prop="changeDate"
          label="修改日期"
          :width="length.w5"
        />
        <el-table-column label="操作" :width="length.w6">
          <template #default="scope">
            <span
              @click="clickproject"
              class="text-[#2979ff] cursor-pointer mr-5"
              >查看</span
            >
            <span class="text-[#2979ff] cursor-pointer">文档</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";
import et from "@/bus";
let tablelength = ref("");
const length = reactive({ w1: 0, w2: 0, w3: 0, w4: 0, w5: 0, w6: 0 });
const tableData = [
  {
    id: "13679823568",
    topic: "脑疾病研究",
    role: "项目负责人",
    state: "进行中",
    changeDate: "2021-04-12 12:09:56",
  },
  {
    id: "8903223568",
    topic: "骨疾病研究",
    role: "项目负责人",
    state: "进行中",
    changeDate: "2019-04-13 11:16:50",
  },
  {
    id: "8053223568",
    topic: "神经疾病研究",
    role: "项目负责人",
    state: "进行中",
    changeDate: "2021-07-23 12:40:22",
  },
  {
    id: "47878223568",
    topic: "脑疾病研究",
    role: "项目负责人",
    state: "进行中",
    changeDate: "2022-01-23 12:00:00",
  },
];

let clickproject = () => {
  et.emit("goproject");
};
</script>

<style scoped>
.table ::v-deep .cell {
  font-size: smaller;
  display: flex;
  padding: 0px !important;
  max-width: fit-content !important;
  /* justify-content: center; */
}
.table ::v-deep thead {
  color: black;
}
.table ::v-deep .el-table__header {
  width: 100% !important;
  background-color: #f0f2f5 !important;
}
/* .table ::v-deep tr{
    background-color: #f0f2f5 !important;
  } */
.table ::v-deep .el-table__header-wrapper {
  background-color: #f0f2f5;
  width: 100% !important;
}
@media (min-width: 1536px) {
  .table ::v-deep .cell {
    font-size: small;
  }
}
/* .table ::v-deep .el-table__inner-wrapper{
    width: 100% !important;
  }
  .table ::v-deep .el-table__body-wrapper{
    width: 100% !important;
  }
  .el-table { 
          position: relative;
        } */
</style>
