<template>
  <div ref="tablelength" id="minData">
    <el-table
      :data="minData"
      @cell-click="cellClick"
      :cell-style="showRow"
      style="width: 100%"
    >
      <el-table-column prop="dataID" label="字段ID" :width="length.w1" />
      <el-table-column prop="describe" label="描述" :width="length.w2" />
      <el-table-column prop="relationship" label="关系" :width="length.w3" />
    </el-table>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from "vue";
import et from "@/bus";
const props = defineProps({
  minData: {
    type: Array,
  },
});
let minData = reactive(props.minData);
const dataDeclaration = reactive({
  title: "数据字段",
});
const tablelength = ref("");
const length = reactive({ w1: 0, w2: 0 });
onMounted(() => {
  getWidth();
  window.addEventListener("resize", getWidth);
}),
  onUnmounted(() => {
    window.removeEventListener("resize", getWidth);
  });
const getWidth = () => {
  nextTick(() => {
    length.w1 = tablelength.value.clientWidth * 0.2;
    length.w2 = tablelength.value.clientWidth * 0.5;
    length.w3 = tablelength.value.clientWidth * 0.3;
  });
};
events.on("test", (e) => {
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

<style lang="scss" scoped>
#minData {
  width: 48vw;
}

#minData ::v-deep th {
  background-color: #f0f1f5;
  color: black;
  font-size: 18px;
  height: 60px;
}

#minData ::v-deep td {
  height: 54px;
}
</style>
