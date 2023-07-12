<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="side bg-white" width="200px">
        <div class="mt-5"></div>
        <el-menu
          class="el-menu-vertical-demo mt-5"
          :default-active="activeid"
          @select="clickmenu"
        >
          <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <span>主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <svgicon
              style="cursor: pointer; width: 20px"
              iconName="icon-shenqing"
            ></svgicon>
            <span>项目申请</span>
          </el-menu-item>
          <el-menu-item @click="clickxiangmu" index="3">
            <svgicon
              style="cursor: pointer; width: 20px"
              iconName="icon-guanliyuan_guanliyuanrizhi"
            ></svgicon>
            <span>项目管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <svgicon
              style="cursor: pointer; width: 20px"
              iconName="icon-tongjitu"
            ></svgicon>
            <span>数据显示</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="bg-w">
          <div class="mian">
            <h2>购物车</h2>
            <div class="links">
              <span class="mr-5 text-use font-bold">待支付</span>
              <span>购买记录</span>
            </div>
          </div>
          <RouterView /></div></el-main
    ></el-container>
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
    id: 1,
    pathname: "workindex",
  },
  {
    id: 2,
    pathname: "applyProject",
  },
  {
    id: 3,
    pathname: "manage",
  },
  {
    id: 4,
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
.el-menu-item span {
  margin-left: 8px;
}
.common-layout {
  // border-left: 1px solid grey;
  ul li {
    list-style: none;
    padding: 1vh;
  }
  .side {
    box-shadow: 4px 4px 4px #f0f2f5;
  }
}
.el-main {
  padding: 0px !important;
}
.main {
  border-left: 1px solid grey;
  padding: 0px !important;
}
.links {
  padding: 2vh;
}
.active {
  font-weight: bold;
  color: #007f99;
  border-bottom: 2px solid #007f99;
  padding-bottom: 2vh;
}

a {
  text-decoration: none;
  color: black;
}

h2 {
  padding: 2vh 0 0 2vh;
  font-weight: 700;
}
</style>
