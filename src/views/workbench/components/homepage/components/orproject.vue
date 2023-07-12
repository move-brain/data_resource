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
        <el-table-column prop="applicant" label="申请人" :width="length.w1" />
        <el-table-column prop="items" label="事项" :width="length.w2" />
        <el-table-column prop="department" label="部门" :width="length.w3" />
        <el-table-column prop="position" label="职位" :width="length.w4" />
        <el-table-column label="状态" :width="length.w5">
          <template #default="scope">
            <ul class="one list-disc list-inside">
              <li>待审批</li>
            </ul>
          </template>
        </el-table-column>
        <el-table-column prop="applydate" label="申请日期" :width="length.w6" />
        <el-table-column label="操作" :width="length.w7">
          <template #default="scope">
            <span
              @click="clickproject"
              class="text-[#2979ff] cursor-pointer mr-5"
              >办理</span
            >
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
const length = reactive({ w1: 0, w2: 0, w3: 0, w4: 0, w5: 0, w6: 0, w7: 0 });
onMounted(() => {
  getWidth();
  window.addEventListener("resize", getWidth);
}),
  onUnmounted(() => {
    window.removeEventListener("resize", getWidth);
  });
const getWidth = () => {
  nextTick(() => {
    length.w1 = tablelength.value.clientWidth * 0.1;
    length.w2 = tablelength.value.clientWidth * 0.15;
    length.w3 = tablelength.value.clientWidth * 0.25;
    length.w4 = tablelength.value.clientWidth * 0.1;
    length.w5 = tablelength.value.clientWidth * 0.1;
    length.w6 = tablelength.value.clientWidth * 0.22;
    length.w7 = tablelength.value.clientWidth * 0.07;
  });
};

const tableData = [
  {
    applicant: "张晓雨",
    items: "加入机构申请",
    department: "xxxx部门/技术部/开发组",
    position: "开发工程师",
    state: false,
    applydate: "2021-04-12 12:09:56",
  },
  {
    applicant: "张晓雨",
    items: "加入机构申请",
    department: "xxxx部门/技术部/开发组",
    position: "开发工程师",
    state: false,
    applydate: "2021-04-12 12:09:56",
  },
  {
    applicant: "张晓雨",
    items: "加入机构申请",
    department: "xxxx部门/技术部/开发组",
    position: "开发工程师",
    state: false,
    applydate: "2021-04-12 12:09:56",
  },
  {
    applicant: "张晓雨",
    items: "加入机构申请",
    department: "xxxx部门/技术部/开发组",
    position: "开发工程师",
    state: false,
    applydate: "2021-04-12 12:09:56",
  },
];

let clickproject = () => {
  et.emit("goproject");
};
</script>

<style scoped>
.one li::marker {
  color: #2979ff;
}
.two li::marker {
  color: #939899;
}
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
