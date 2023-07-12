<template>
  <div class="bg-white w-full p-4"><span>目录发布</span></div>
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
          <template prop="islook" #default="scope">
            <div v-if="scope.row.islook">
              <ul class="one list-disc list-inside">
                <li>已发布</li>
              </ul>
            </div>
            <div v-else>
              <ul class="two list-disc list-inside">
                <li>未发布</li>
              </ul>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template prop="islook" #default="scope">
            <div v-if="scope.row.islook">
              <span class="text-[#2979ff] cursor-pointer mr-5"> 撤销审核 </span>
              <span class="text-[#2979ff] cursor-pointer">目录维护</span>
            </div>
            <div v-else>
              <span class="text-[#2979ff] cursor-pointer mr-5"> 发布 </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
const tableData = [
  {
    id: "1590321351S313321",
    name: "胃部疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: true,
  },
  {
    id: "1895321351S313321",
    name: "骨疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: false,
  },
  {
    id: "1905434351S313321",
    name: "脑疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: true,
  },
  {
    id: "7835321351S313321",
    name: "脑疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: true,
  },
  {
    id: "90653213515313321",
    name: "腿部疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: false,
  },
  {
    id: "1789900081S313321",
    name: "脑疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: false,
  },
  {
    id: "2165321351S313321",
    name: "脑疾病研究",
    abstract: "信息资源摘要",
    state: "未审核",
    islook: true,
  },
];
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
