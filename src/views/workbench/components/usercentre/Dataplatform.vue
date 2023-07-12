<template>
  <div class="w-full my-5">
    <span class="text-lg font-semibold">数据平台权限审核</span>
  </div>
  <div class="w-full">
    <el-table :data="tableData">
      <el-table-column prop="platform" label="平台" />
      <el-table-column prop="scope" label="范围" />
      <el-table-column prop="state" label="状态" />
      <el-table-column prop="Date" label="有效期" width="200px" />
      <el-table-column label="操作">
        <template #default="scope">
          <span class="text-[#2979ff] cursor-pointer mr-5">撤销</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const tableData = [
  {
    platform: "智能分析平台",
    scope: "申请数据",
    state: "允许访问",
    Date: "2022-03-12 12：00：00",
  },
  {
    platform: "智能分析平台",
    scope: "用户信息",
    state: "允许访问",
    Date: "2022-03-12 12：00：00",
  },
  {
    platform: "智能分析平台",
    scope: "申请数据",
    state: "允许访问",
    Date: "2022-03-12 12：00：00",
  },
  {
    platform: "智能分析平台",
    scope: "申请数据",
    state: "允许访问",
    Date: "2022-03-12 12：00：00",
  },
  {
    platform: "智能分析平台",
    scope: "申请数据",
    state: "允许访问",
    Date: "2022-03-12 12：00：00",
  },
];
</script>

<style scoped></style>
