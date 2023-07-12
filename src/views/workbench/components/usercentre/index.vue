<template>
  <div class="w-full p-5 bg-w mb-5">
    <span class="font-semibold text-lg">用户中心</span>
  </div>
  <div class="h-full bg-w">
    <div class="h-full common-layout">
      <el-container>
        <el-aside width="200px">
          <el-menu
            @select="clickmenu"
            :default-active="activeid"
            class="el-menu-vertical-demo h-full"
          >
            <el-menu-item index="1">
              <span>基本信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span>账号安全</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span>数据平台权限审核</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>订阅</span>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main style="padding-left: 3%">
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
let route = useRoute();
let router = useRouter();
let activeid = ref(0);
let menulist = reactive([
  {
    id: "1",
    pathname: "basicinformation",
  },
  {
    id: "2",
    pathname: "accessSecurity",
  },
  {
    id: "3",
    pathname: "Dataplatform",
  },
  {
    id: "4",
    pathname: "subscription",
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
  { immediate: true }
);

let clickmenu = (e) => {
  menulist.forEach((ele) => {
    if (ele.id == e) {
      router.push({ name: ele.pathname });
    }
  });
};
</script>

<style></style>
