<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import { events } from "../bus";
import { useRoute, useRouter } from "vue-router";
import minDataPart from "./DataPart.vue";
const $route = useRoute();
const $router = useRouter();
const routerlink = (val) => {
  $router.push({ path: val });
};

// 使用topicStatus记录题目的审核进度 将审核中标记为0 将审核通过标记为1 将审核驳回标记为-1
const minData = [
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "待启动",
    date: "2022-03-12 12:00:00",
    control: "",
    topicStatus: "0",
  },
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "进行中",
    date: "2022-03-12 12:00:00",
    control: "",
    topicStatus: "1",
  },
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "已结束",
    date: "2022-03-12 12:00:00",
    control: "",
  },
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "进行中",
    date: "2022-03-12 12:00:00",
    control: "",
    topicStatus: "-1",
    topicDescribe:
      "这里是一段长的审批意见这里是一段长的审批意见这里是一段长的审批意见这里是一段长的审批意见这里是一段长的审批意见这里是一段长的审批意见这里是一段长的审批意见",
  },
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "待启动",
    date: "2022-03-12 12:00:00",
    control: "",
    topicStatus: "-1",
    topicDescribe: "测试",
  },
  {
    dataID: 4563223568,
    topic: "脑疾病研究脑疾病研究",
    role: "项目负责人",
    status: "进行中",
    date: "2022-03-12 12:00:00",
    control: "",
  },
];

const props = defineProps({
  minData: {
    type: Array,
  },
});
// let minData = reactive(props.minData)
const tablelength = ref("");
const length = reactive({});
onMounted(() => {
  getWidth();
  window.addEventListener("resize", getWidth);
}),
  onUnmounted(() => {
    window.removeEventListener("resize", getWidth);
  });
const getWidth = () => {
  nextTick(() => {
    length.w1 = tablelength.value.clientWidth * 0.12;
    length.w2 = tablelength.value.clientWidth * 0.21;
    length.w3 = tablelength.value.clientWidth * 0.152;
    length.w4 = tablelength.value.clientWidth * 0.147;
    length.w5 = tablelength.value.clientWidth * 0.185;
    length.w7 = tablelength.value.clientWidth * 0.01;
  });
};

const contentColor = reactive({
  content: "",
  style: {
    border: "",
    color: "",
  },
});

const getStatusContent = (row) => {
  switch (row) {
    case "1":
      return "通过";
    case "0":
      return "审核中";
    case "-1":
      return "驳回▼";
    default:
      return "";
  }
};

const getStatusStyle = (row) => {
  switch (row) {
    case "1":
      return { border: "2px solid #67c49f", color: "#67c49f" };
    case "0":
      return { border: "2px solid #6f8cec", color: "#6f8cec" };
    case "-1":
      return { border: "2px solid #de574e", color: "#de574e" };
    default:
      return { border: "0", color: "#fff" };
  }
};

const showRow = ({ row, column, rowIndex, columnIndex }) => {
  if (column.label === "状态" && row.status === "待启动") {
    return { "--pointerColor": "#e0a310" };
  } else if (column.label === "状态" && row.status === "进行中") {
    return { "--pointerColor": "#3fb181" };
  } else if (column.label === "状态" && row.status === "已结束") {
    return { "--pointerColor": "#929698" };
  }
};

const contentStyle = (rowIndex) => {
  //这里会造成一些网站的卡顿，但是时间不够且影响不大，不再改进
  contentColor.content = getStatusContent(minData[rowIndex].topicStatus);
  contentColor.style = getStatusStyle(minData[rowIndex].topicStatus);
  return contentColor.style;
};

const tipVisible = (index) => {
  if (minData[index].topicStatus != "-1") {
    return false;
  }
};
</script>

<template>
  <div ref="tablelength" id="minData">
    <el-table
      id="Statistics"
      :data="minData"
      :cell-style="showRow"
      style="width: 100%"
    >
      <el-table-column prop="dataID" label="ID" :width="length.w1" />
      <el-table-column prop="topic" label="题目" :width="length.w2" />
      <el-table-column
        label-class-name="dataTopicTop"
        class-name="dataTopic"
        :width="length.w7"
      >
        <template v-slot="scope">
          <span class="content" :style="contentStyle(scope.$index)">
            {{ contentColor.content }}
          </span>
          <el-tooltip
            popper-class="tip-class"
            placement="bottom-start"
            effect="light"
            :visible="tipVisible(scope.$index)"
          >
            <template #content>
              <p
                style="
                  margin: 0;
                  padding: 10px;
                  color: #9b9fa0;
                  font-size: 0.7vw;
                "
              >
                审核意见
              </p>
              <p
                style="
                  margin: 0;
                  padding: 10px;
                  padding-top: 0;
                  width: auto;
                  max-width: 10vw;
                  font-size: 0.7vw;
                "
              >
                {{ minData[scope.$index].topicDescribe }}
              </p>
            </template>
            <span
              class="contentBackup"
              @mouseenter="tipVisible = true"
              @mouseleave="tipVisible = false"
            ></span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="role" label="角色" :width="length.w3" />
      <el-table-column
        label-class-name="dataStatusTop"
        class-name="dataStatus"
        prop="status"
        label="状态"
        :width="length.w4"
      />
      <el-table-column prop="date" label="修改日期" :width="length.w5" />
      <el-table-column prop="control" label="操作" :width="length.w6">
        <div style="display: flex">
          <div
            class="control"
            @click="routerlink('/information/applicationInformation')"
          >
            查看/编辑
          </div>
          <div class="control" @click="routerlink('/')">文档</div>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
#minData {
  width: 100%;
}

#minData ::v-deep th {
  background-color: #f0f1f5;
  color: black;
  font-size: 0.9vw;
  height: 4.8vh;
  padding-left: 3.4vw;
}

#minData ::v-deep td {
  height: 4.8vh;
  padding-left: 3.45vw;
  font-size: 0.75vw;
}

#minData ::v-deep tr:hover > td {
  background-color: #ebf4f7;
}

.control {
  color: #6686ea;
  user-select: none;
  cursor: pointer;
  padding-right: 1vw;
}

.control:active {
  color: #4f68b6;
}

::v-deep #Statistics {
  user-select: none;
}

.el-table ::v-deep .cell {
  padding: 0;
}

#minData ::v-deep .el-table .el-table__cell {
  z-index: auto;
}
#minData ::v-deep .el-table-col--dataTopic {
  position: relative;
  z-index: 1;
}

.content {
  position: absolute;
  top: 25%;
  left: -400%;
  width: 3.5vw;
  height: 2vh;
  line-height: 2vh;
  text-align: center;
  color: #67c49f;
  border: 2px solid #67c49f;
  border-radius: 50px;
  min-width: 50px;
  z-index: auto;
  overflow: visible;
}

.contentBackup {
  position: absolute;
  top: 25%;
  left: -550%;
  width: 3.5vw;
  height: 2vh;
  line-height: 2vh;
  text-align: center;
  border-radius: 50px;
  min-width: 50px;
  z-index: auto;
  overflow: visible;
}

::v-deep .dataTopicTop {
  content: "";
  border: 0;
}

::v-deep .dataStatus .cell {
  padding-left: 0.8vw;
}

::v-deep .dataStatusTop .cell {
  padding-left: 0vw;
}

::v-deep .dataStatus::before {
  content: "•";
  position: absolute;
  font-size: 20px;
  line-height: 2.4vh;
  color: var(--pointerColor);
}
::v-deep .dataStatusTop::before {
  content: "";
}
</style>
