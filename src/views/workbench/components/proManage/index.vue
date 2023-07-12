<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="200px"
        style="height: 100%; background-color: white"
        class="h-full"
      >
        <el-menu
          default-active="2"
          @select="clickmenu"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Document /></el-icon>
            <span>项目管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Histogram /></el-icon>
            <span>数据展示</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import et from "@/bus";
let router = useRouter();
let list = [
  {
    id: 1,
    pathname: "workindex",
  },
  {
    id: 2,
    pathname: "manage",
  },
  {
    id: 3,
    pathname: "",
  },
];

let clickmenu = (e) => {
  list.forEach((ele) => {
    if (e == ele.id) {
      router.push({ name: ele.pathname });
    }
  });
};
et.on("viewmanage", (dataID) => {
  router.push({ name: "applyInformation" });
});
</script>

<style scoped>
.el-aside {
  height: 100vh !important;
}
.el-main {
  padding: 0px;
}
</style>
