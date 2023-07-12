<script setup>
import minData from "./minData.vue";
import { useRoute, useRouter } from "vue-router";

const $route = useRoute();
const $router = useRouter();
const routerlink = () => {
  $router.push({ name: "applyProject" });
};
</script>

<template>
  <div class="main">
    <header>项目管理</header>
    <div class="everyProject">
      <el-button class="button" type="success">
        <div style="color: #fff" @click="routerlink">申请项目</div>
      </el-button>
      <div class="data">
        <minData></minData>
      </div>
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
  width: 98%;
  padding-left: 2%;
  height: 5.9vh;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 130%;
  line-height: 5.9vh;
  font-weight: 800;
  text-align: left;
}

.button {
  width: 85px;
  height: 34px;
  background-color: #2a7c98;
  border: 0;
  margin: 2vh 2vw;
  margin-bottom: 0;
}

.data {
  margin: 1.5vh 2vw;
}

.button:active {
  background-color: #1b5265;
}

.everyProject {
  margin: 1.2% 1.2%;
  width: 97.6%;
  height: 97.6%;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  min-width: 1000px;
}
</style>
