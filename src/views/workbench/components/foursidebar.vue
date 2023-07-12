<template>
  <div class="h-[100%] flex-1 common-layout">
    <el-container>
      <el-aside
        width="200px"
        class="mr-5"
        style="height: 100%; background-color: white"
      >
        <el-menu
          @select="clickmenu"
          :default-active="activeid"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><DocumentAdd /></el-icon>
            <span>项目申请</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Document /></el-icon>
            <span>项目管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><Histogram /></el-icon>
            <span>数据展示</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
let route = useRoute();
let router = useRouter();
let activeid = ref(0);
let menulist = reactive([
  {
    id: "1",
    pathname: "workindex",
  },
  {
    id: "2",
    pathname: "applyProject",
  },
  {
    id: "3",
    pathname: "manage",
  },
  {
    id: "4",
    pathname: "",
  },
]);

watch(
  () => route.name,
  (val, old) => {
    menulist.forEach((e) => {
      if (e.pathname == val) {
        activeid.value = e.id;
      }
    });
  },
  {
    immediate: true,
  }
);

let clickmenu = (e) => {
  console.log(e);
  menulist.forEach((ele) => {
    if (ele.id == e) {
      router.push({ name: ele.pathname });
    }
  });
};
</script>

<style scoped>
.el-aside {
  height: 100vh !important;
}
.el-main {
  padding: 0px;
}
.el-container {
  height: 100%;
}
</style>
