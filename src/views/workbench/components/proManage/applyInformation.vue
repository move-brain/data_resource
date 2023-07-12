<script setup>
import {
  reactive,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  computed,
  watch,
} from "vue";
import { useRoute, useRouter } from "vue-router";
onMounted(() => {
  checkRouter();
});
const $route = useRoute();
const $router = useRouter();
const routerlink = (val) => {
  $router.push({ path: val });
};
let activeName = ref("first");
const title = ref("4563223568");
const checkRouter = () => {
  switch ($route.path) {
    case "/information/applicationInformation":
      activeName.value = "first";
      break;
    case "/information/teamInformation":
      activeName.value = "second";
      break;
    case "/information/payInfo":
      activeName.value = "third";
      break;
    case "/information/updateRequirements":
      activeName.value = "fourth";
      break;
    case "/information/processManagement":
      activeName.value = "fifth";
      break;
    case "/information/message":
      activeName.value = "sixth";
      break;
    case "/information/dataOfInfo":
      activeName.value = "seventh";
      break;
  }
  return activeName.value;
};

const IsRouter = ref("申请信息");
const handleClick = (pane, ev) => {
  if (pane.props.label == "申请信息") {
    $router.push({ path: "/information/applicationInformation" });
  } else if (pane.props.label == "团队信息") {
    $router.push({ path: "/information/teamInformation" });
  } else if (pane.props.label == "付款信息") {
    $router.push({ path: "/information/payInfo" });
  } else if (pane.props.label == "更新需求") {
    $router.push({ path: "/information/updateRequirements" });
  } else if (pane.props.label == "过程管理") {
    $router.push({ path: "/information/processManagement" });
  } else if (pane.props.label == "消息") {
    $router.push({ path: "/information/message" });
  } else if (pane.props.label == "数据") {
    $router.push({ path: "/information/dataOfInfo" });
  }
};

const word = reactive({
  w1: "",
  w2: "",
  w3: "",
  w4: "",
  w5: "",
  w6: "",
  w7: "",
  w8: "",
  w9: "",
  w10: "",
});
const extent = reactive({
  w1: "0",
  w2: "0",
  w3: "0",
  w4: "0",
  w5: "0",
  w6: "0",
  w7: "0",
  w8: "0",
  w9: "0",
  w10: "0",
});
watch(word, () => {
  (extent.w1 = word.w1.length),
    (extent.w2 = word.w2.length),
    (extent.w3 = word.w3.length),
    (extent.w4 = word.w4.length),
    (extent.w5 = word.w5.length),
    (extent.w6 = word.w6.length),
    (extent.w7 = word.w7.length),
    (extent.w8 = word.w8.length),
    (extent.w9 = word.w9.length),
    (extent.w10 = word.w10.length);
});
</script>

<template>
  <div class="main">
    <header>
      <div id="backButton" @click="routerlink('/')"></div>
      申请ID:{{ title }}
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="申请信息" name="first"></el-tab-pane>
        <el-tab-pane label="团队信息" name="second"></el-tab-pane>
        <el-tab-pane label="付款信息" name="third"></el-tab-pane>
        <el-tab-pane label="更新需求" name="fourth"></el-tab-pane>
        <el-tab-pane label="过程管理" name="fifth"></el-tab-pane>
        <el-tab-pane label="消息" name="sixth"></el-tab-pane>
        <el-tab-pane label="数据" name="seventh"></el-tab-pane>
      </el-tabs>
    </header>
    <div style="width: 100%">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

header {
  position: relative;
  width: 98%;
  padding-left: 3%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 130%;
  line-height: 5.9vh;
  font-weight: 800;
  text-align: left;
}

#backButton {
  position: absolute;
  top: 2.2vh;
  left: 1.2vw;
  width: 10px;
  height: 10px;
  border-top: 2px solid #b8bbbb;
  border-left: 2px solid #b8bbbb;
  rotate: -45deg;
  user-select: none;
}

::v-deep #tab-first,
::v-deep #tab-second,
::v-deep #tab-third,
::v-deep #tab-fourth,
::v-deep #tab-fifth,
::v-deep #tab-sixth,
::v-deep #tab-seventh {
  font-size: 0.8vw;
}

::v-deep #tab-first:hover,
::v-deep #tab-second:hover,
::v-deep #tab-third:hover,
::v-deep #tab-fourth:hover,
::v-deep #tab-fifth:hover,
::v-deep #tab-sixth:hover,
::v-deep #tab-seventh:hover {
  color: #257d99;
}

::v-deep .el-tabs__header {
  margin: 0;
  user-select: none;
}

::v-deep .el-tabs__active-bar {
  background-color: #257d99;
}

::v-deep .el-tabs__item.is-active {
  color: #257d99;
}

::v-deep #tab-first {
  font-size: 0.8vw;
}

::v-deep #tab-first:hover {
  color: #257d99;
}

::v-deep #tab-second {
  font-size: 0.8vw;
}

::v-deep #tab-second:hover {
  color: #257d99;
}

::v-deep #tab-third {
  font-size: 0.8vw;
}

::v-deep #tab-third:hover {
  color: #257d99;
}
</style>
