<template>
  <div class="bg-white w-full p-4"><span>目录审批</span></div>
  <div
    class="flex-1 flex justify-start flex-col bg-white h-fit min-h-[80%] mt-3 px-3 pb-20 ml-3"
  >
    <div class="my-4 w-full flex justify-end">
      <el-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
        :suffix-icon="Search"
      >
        <template #prepend>
          <el-select
            v-model="select"
            placeholder="信息资源代码"
            style="width: 130px"
          >
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </el-input>
    </div>

    <div class="w-full">
      <el-table :data="tableData">
        <el-table-column prop="id" label="信息资源代码" />
        <el-table-column prop="name" label="信息资源名称" />
        <el-table-column prop="abstract" label="信息资源摘要" />
        <el-table-column label="信息资源状态">
          <template prop="state" #default="scope">
            <div v-if="scope.row.state">
              <ul class="one list-disc list-inside">
                <li>审核通过</li>
              </ul>
            </div>
            <div v-else>
              <ul class="two list-disc list-inside">
                <li>未审核</li>
              </ul>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template prop="state" #default="scope">
            <div v-if="scope.row.state">
              <span class="text-[#2979ff] cursor-pointer mr-5">查看</span>
            </div>
            <div v-else>
              <span
                @click="clickaudit"
                class="text-[#2979ff] cursor-pointer mr-5"
                >审核</span
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
let router = useRouter();
const tableData = [
  {
    id: "9065321351S313321",
    name: "脑疾病研究",
    abstract: "信息资源摘要",
    state: true,
  },
  {
    id: "7835321351S313321",
    name: "腿部疾病研究",
    abstract: "信息资源摘要",
    state: false,
  },
  {
    id: "2165321351S313321",
    name: "胃部疾病研究",
    abstract: "信息资源摘要",
    state: true,
  },
  {
    id: "90853217813833321",
    name: "神经疾病研究",
    abstract: "信息资源摘要",
    state: true,
  },
  {
    id: "8545321351S313321",
    name: "骨疾病研究",
    abstract: "信息资源摘要",
    state: false,
  },
];
let clickaudit = () => {
  router.push({ name: "catalogAudit2" });
};
</script>
<style scoped>
.one li::marker {
  color: #3ec59a;
}
.two li::marker {
  color: #939899;
}
.el-input {
  width: 40%;
  padding-right: 30px;
}
.a {
  box-sizing: border-box;
}
</style>
