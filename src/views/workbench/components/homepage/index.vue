<template>
  <div class="relative w-full h-fit flex flex-col flex-1 bg-[#f0f2f5]">
    <div
      class="w-full h-[33%] bg-use 2xl:h-[25%] pb-[8vh]"
      style="min-height: fit-content"
    >
      <div class="ml-[4.7vw] pt-[3vh] flex flex-col">
        <span class="text-[#ffffff] text-lg font-black 2xl:text-xl"
          >{{ username }}，欢迎登录本系统！</span
        >
        <div class="mt-[2vh] flex flex-col">
          <span class="text-xs text-w mb-2"
            >上次登录时间：2022-03-12 12：00</span
          >
          <span class="text-xs text-w">上次登录地点：山东省济南市</span>
        </div>
      </div>
    </div>
    <div
      style="height: auto"
      class="bg-[#f0f2f5] h-fit w-[100%] pb-[40vh] flex-1"
    >
      <div
        class="allicon bg-[#f0f2f5] p-[3vw] py-[1vw] w-[23%] 2xl:w-[21%] flex flex-wrap justify-between"
      >
        <div @click="goapply">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-shenqing"
          ></svgicon>
          <span>项目申请</span>
        </div>
        <div @click="clickpromanage">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-guanliyuan_guanliyuanrizhi"
          ></svgicon>
          <span>项目管理</span>
        </div>
        <div>
          <svgicon
            style="cursor: pointer; width: 45%"
            color="#ffffff"
            iconName="icon-tongjitu"
          ></svgicon
          ><span>数据展示</span>
        </div>
        <div @click="clickuser">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-morentouxiang"
          ></svgicon
          ><span>用户中心</span>
        </div>
        <div @click="gowuche">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-gouwuche"
          ></svgicon
          ><span>购物车</span>
        </div>
        <div @click="clickmsgcentre">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-naoling"
          ></svgicon
          ><span>消息中心</span>
        </div>
        <div>
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-wangzhanzidingyixinxizhanshi"
          ></svgicon
          ><span>门户网站</span>
        </div>
        <div @click="clickResource">
          <svgicon
            style="cursor: pointer; width: 45%"
            iconName="icon-shujuku"
          ></svgicon
          ><span>数据资源库</span>
        </div>
      </div>
    </div>
    <div
      style="z-index: 100"
      class="w-[77%] 2xl:w-[79%] h-fit absolute top-0 bottom-0 right-0 p-[1%]"
    >
      <div class="w-full h-fit max-h-[50%] flex justify-start items-center">
        <div class="w-[65%] h-full pr-3">
          <div class="w-full"><introductory /></div>
          <div class="w-full pt-3"><network /></div>
        </div>
        <div class="flex-1 h-full"><message /></div>
      </div>
      <div class="w-full h-[30%] mt-3">
        <project />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let username = ref("ggbond");
import message from "./components/message.vue";
import introductory from "./components/introductory.vue";
import network from "./components/network.vue";
import project from "./components/project.vue";
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
import { useRouter } from "vue-router";
let router = useRouter();
import et from "@/bus";
console.log(window.screen.height);
let clickpromanage = () => {
  et.emit("goproject");
};
let clickResource = () => {
  router.push({ name: "dataResource" });
};
let clickuser = () => {
  router.push({ name: "basicinformation" });
};
let clickmsgcentre = () => {
  router.push({ name: "msgCenter" });
};
let gowuche = () => {
  router.push({ name: "gowuche" });
};
let goapply = () => {
  router.push({ name: "applyProject" });
};
</script>
<style scoped>
.allicon div {
  height: 6vw;
  width: 35%;
  box-sizing: border-box;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.allicon div:hover {
  background-color: #007f99;
  box-shadow: 8px 8px 8px #8ec2cf;
  color: white;
  border-radius: 8px;
}
.allicon span {
  font-size: small;
  margin-bottom: 6px;
  /* color: #343737; */
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: none;
  display: flex;
  align-items: center;
}
.el-dropdown span {
  color: white;
}

.el-dropdown {
  --el-dropdown-menu-box-shadow: none;
  --el-dropdown-menuItem-hover-fill: none;
  --el-dropdown-menuItem-hover-color: none;
  color: #007f99 !important;
  outline: none;
}

.el-dropdown:hover {
  outline: none;
}
</style>
