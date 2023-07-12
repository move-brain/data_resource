<template>
  <div class="flex-1 common-layout">
    <el-container>
      <el-aside width="200px" style="background-color: white; height: 100%">
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
            <svgicon
              style="cursor: pointer; width: 12%; margin: 0px 5px"
              iconName="icon-yingyongjigouguanli"
            ></svgicon>
            <span>机构信息</span>
          </el-menu-item>
          <el-menu-item index="3">
            <svgicon
              style="cursor: pointer; width: 12%; margin: 0px 5px"
              iconName="icon-renyuanguanli"
            ></svgicon>
            <span>人员管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <svgicon
              style="cursor: pointer; width: 12%; margin: 0px 5px"
              color="#ffffff"
              iconName="icon-tongjitu"
            ></svgicon>
            <span>数据管理</span>
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

<style scoped lang="scss">
.el-menu span {
  font-weight: 900;
}
// .el-aside {
//   height: 100vh ;
// }
.el-main {
  padding: 0px;
}
.el-container {
  height: 100%;
}
</style>
