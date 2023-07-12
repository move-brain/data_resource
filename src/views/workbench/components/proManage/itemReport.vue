<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from "vue";
import et from "@/bus";
import { useRoute, useRouter } from "vue-router";
import minDataPart from "./DataPart.vue";
const $route = useRoute();
const $router = useRouter();
const routerlink = (val) => {
  $router.push({ path: val });
};
const props = defineProps({
  minData: {
    type: Array,
  },
});
//let minData = reactive(props.minData)
const minData = [
  {
    docName: "2020年1月项目报告",
    docClass: "pdf",
    docData: "2022-03-12 12:00:00",
    docSize: "45MB",
  },
  {
    docName: "2020年2月项目报告",
    docClass: "doc",
    docData: "2022-03-12 12:00:00",
    docSize: "56MB",
  },
  {
    docName: "2020年3月项目报告",
    docClass: "pdf",
    docData: "2022-03-12 12:00:00",
    docSize: "123MB",
  },
  {
    docName: "2020年4月项目报告",
    docClass: "pdf",
    docData: "2022-03-12 12:00:00",
    docSize: "110MB",
  },
];
const dataDeclaration = reactive({
  title: "数据字段",
});
const tablelength = ref("");
const length = reactive({ w1: 0, w2: 0, w3: 0, w4: 0, w5: 0 });
onMounted(() => {
  getWidth();
  window.addEventListener("resize", getWidth);
}),
  onUnmounted(() => {
    window.removeEventListener("resize", getWidth);
  });
const getWidth = () => {
  nextTick(() => {
    length.w1 = tablelength.value.clientWidth * 0.25;
    length.w2 = tablelength.value.clientWidth * 0.2;
    length.w3 = tablelength.value.clientWidth * 0.2;
    length.w4 = tablelength.value.clientWidth * 0.16;
    length.w5 = tablelength.value.clientWidth * 0.3;
  });
};
et.on("test", (e) => {
  console.log(e);
});
const showRow = ({ _, column }) => {
  let styleJson = {
    color: "#5ba3b7",
    cursor: "pointer",
  };
  if (column.label === "字段ID") {
    return styleJson; // 修改的样式
  }
};
const cellClick = (row) => {
  events.emit("test", row.dataID);
};
</script>

<template>
  <div style="margin: 2vh 3vw">
    <div style="display: flex; align-items: end">
      <p style="font-size: 1.3vw; font-weight: 900; padding-right: 20px">
        项目报告
      </p>
      <p style="color: #a9adad">下次提交截止时间 {{ "2022年12月31日" }}</p>
    </div>
    <div style="display: flex; align-items: end">
      <el-button class="buttonGreen" type="success">上传文件</el-button>
      <el-button class="buttonGrey" type="success">下载模板</el-button>
    </div>
    <div ref="tablelength" id="minData">
      <el-table
        :data="minData"
        @cell-click="cellClick"
        :cell-style="showRow"
        style="width: 100%"
      >
        <el-table-column prop="docName" label="文件名称" :width="length.w1" />
        <el-table-column prop="docClass" label="文件类型" :width="length.w2" />
        <el-table-column prop="docData" label="上传日期" :width="length.w3" />
        <el-table-column prop="docSize" label="文件大小" :width="length.w4" />
        <el-table-column prop="docControl" label="操作" :width="length.w5">
          <div class="control" @click="routerlink('/')">预览</div>
          <div class="control" @click="routerlink('/')">删除</div>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.buttonGreen {
  width: 80px;
  height: 34px;
  background-color: #2a7c98;
  border: 0;
}

.buttonGreen:active {
  background-color: #1b5265;
}

.buttonGrey {
  width: 80px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #d5d7d8;
  color: #565b5c;
}

.buttonGrey:active {
  background-color: #c0c0c0;
}

#minData {
  width: 63vw;
  margin-top: 2vh;
}

#minData ::v-deep th {
  background-color: #f0f1f5;
  color: black;
  font-size: 1vw;
  height: 60px;
  padding-left: 2vw;
}

#minData ::v-deep td {
  height: 54px;
  padding-left: 2vw;
  font-size: 0.8vw;
}

.control {
  color: #6686ea;
  user-select: none;
  cursor: pointer;
  padding-right: 1vw;
}
</style>
