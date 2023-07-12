<template>
  <div class="h-[100%] common-layout">
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
            <span>专题库管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><DocumentAdd /></el-icon>
            <span>数据更新</span>
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
    pathname: "libraryManagementView",
  },
  {
    id: "2",
    pathname: "dataUpdating",
  },
]);
console.log(route);
watch(
  () => route,
  (val, old) => {
    menulist.forEach((e) => {
      let name = val.matched[2].name;
      if (e.pathname == name) {
        activeid.value = e.id;
        return;
        console.log(activeid);
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
