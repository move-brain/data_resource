<template>
  <div class="h-[100%] relative common-layout">
    <el-container>
      <el-aside width="200px" style="height: 100%; background-color: white">
        <el-menu
          @select="clickmenu"
          :default-active="activeid"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <el-icon><House /></el-icon>
            <span>目录注册</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><DocumentAdd /></el-icon>
            <span>挂接库表</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><Document /></el-icon>
            <span>目录审核</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><Histogram /></el-icon>
            <span>目录发布</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="flex flex-col h-[100vh]">
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
    pathname: "categoryRegister",
  },
  {
    id: "2",
    pathname: "",
  },
  {
    id: "3",
    pathname: "catalogAudit",
  },
  {
    id: "4",
    pathname: "issue",
  },
]);

watch(
  () => route.name,
  (val, old) => {
    console.log(val);
    menulist.forEach((e) => {
      if (e.pathname == val) {
        console.log(2222);
        activeid.value = e.id;
      }
    });
    console.log(activeid.value);
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
  height: 100% !important;
  padding: 0px;
}
.el-container {
  height: 100vh;
  min-height: 100vh;
}
</style>
