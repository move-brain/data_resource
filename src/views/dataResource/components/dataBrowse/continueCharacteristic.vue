<template>
  <div id="body">
    <div id="adress">
      <breadcrumb />
    </div>
    <header id="dataDeclaration">
      <h1>{{ dataDeclaration.title }}</h1>
      <p>{{ dataDeclaration.content }}</p>
    </header>
    <div id="typeofson">
      <fachForm :form="formF" :formtype="formtype"></fachForm>
    </div>
    <div id="Statistics">
      <minData></minData>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import fachForm from "./classdata.vue";
import minData from "./minData.vue";
import breadcrumb from "@/views/dataResource/Layout/components/breadcrumb.vue";
let dataDeclaration = reactive({
  title: "持续特征（ID-2）",
  content: "该类别包含在参与者持续更新的一般特征数据。",
});
//测试用数据
let formF = reactive([
  {
    dataID: 1,
    describe: "人口特征",
    number: 35,
  },
]);
const formtype = "father"; //传进去不判断为父
</script>

<style lang="scss" scoped>
#body {
  text-align: left;
  width: 100%;
}

#dataDeclaration {
  width: 100%;
  min-width: 10px;
  margin-bottom: 7.5vh;
}

#dataDeclaration p {
  white-space: pre-wrap;
  min-width: 27.1vw;
  line-height: 2.8vh;
}

h1 {
  font-size: 30px;
  margin: 0;
  white-space: nowrap;
}

#adress {
  margin-bottom: 3vh;
}

header h1 {
  font-size: 30px;
  margin: 0;
  white-space: nowrap;
}

header p {
  white-space: pre-wrap;
  min-width: 520px;
  line-height: 2.8vh;
  padding-bottom: 3vh;
  border-bottom: 2px solid #eff0f1;
  margin-bottom: 4vh;
}
</style>
