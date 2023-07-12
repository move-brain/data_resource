<script setup>
import { ref, reactive, onMounted, computed } from "vue";

onMounted(() => {
  showDiffer("all");
});

const parentBorder = ref(false);
const childBorder = ref(false);
const tableData = [
  {
    topic: "4563223568心理疾病研究",
    sender: "张三",
    relevancy: "22134145525",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: false,
  },

  {
    topic: "4563223568脑疾病研究",
    sender: "Tom",
    relevancy: "25446552233",
    date: "2022-03-12 12:00:00",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    status: true,
  },
];

const value = ref("topic");
const search = ref("");
const options = [
  {
    value: "topic",
    label: "主题",
  },
  {
    value: "sender",
    label: "发送人",
  },
  {
    value: "relevancy",
    label: "关联",
  },
  {
    value: "date",
    label: "日期",
  },
];
const newTableData = ref([]);
const showDiffer = (choice) => {
  if (choice == "all") newTableData.value = tableData;
  else {
    newTableData.value = tableData.filter((el) => {
      return el.status == choice;
    });
    console.log(newTableData.value);
  }
};
const filterTableData = computed(() =>
  newTableData.value.filter(
    (data) =>
      !search.value ||
      data[value.value].toLowerCase().includes(search.value.toLowerCase())
  )
);

function changeCellStyle(row) {
  // 可自行输出row查看样式
  //console.log(row.row.status)
  const styleObject = {};
  if (row.row.status) styleObject.color = "rgb(151,156,157)";
  else styleObject.color = "rgb(76,78,78)";
  return styleObject;
}

const state = reactive({
  page: 1,
  limit: 50,
});
//前端限制分页（currentData为当前展示页表格）
const currentTableData = (currentData) => {
  return currentData.filter(
    (item, index) =>
      index < state.page * state.limit &&
      index >= state.limit * (state.page - 1)
  );
};

//改变页码
const handleCurrentChange = (e) => {
  state.page = e;
};

//改变页数限制
const handleSizeChange = (e) => {
  state.limit = e;
};
</script>

<template>
  <div class="Msgcenter bg-white">
    <div>消息中心</div>
  </div>
  <div class="MsgBox">
    <div class="context">
      <div class="head">
        <div class="left">
          <el-button type="primary" style="width: 80px">消息发送</el-button>
        </div>
        <div class="right">
          <el-row class="mb-4" style="margin-right: 20px">
            <el-button
              plain
              @click="showDiffer('all')"
              style="
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                outline: none;
                width: 60px;
              "
              autofocus
              >全部</el-button
            >
            <el-button
              plain
              @click="showDiffer(true)"
              style="border-radius: 0; width: 60px"
              >已读</el-button
            >
            <el-button
              plain
              @click="showDiffer(false)"
              style="
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                width: 60px;
              "
              >未读</el-button
            >
          </el-row>
          <el-select
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="size"
            style="width: 80px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input
            v-model="search"
            size="size"
            placeholder="请输入关键字"
            style="width: 300px"
          />
        </div>
      </div>
      <div class="table">
        <el-table
          :data="currentTableData(filterTableData)"
          :border="parentBorder"
          :header-cell-style="{
            height: '50px',
            'background-color': 'rgb(240,242,245)',
            color: 'rgb(74,77,78)',
            'font-size': '18px',
          }"
          :cell-style="changeCellStyle"
          height="384"
        >
          <el-table-column
            type="expand"
            style="background-color: rgb(247, 249, 252)"
          >
            <template #default="props">
              <div m="4">
                <p m="t-0 b-2">State: {{ props.row.state }}</p>
                <p m="t-0 b-2">City: {{ props.row.city }}</p>
                <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="主题" prop="topic" />
          <el-table-column label="发送人" prop="sender" />
          <el-table-column label="关联" prop="relevancy" />
          <el-table-column label="日期" prop="date" />
          <el-table-column label="操作" width="200">
            <template #default>
              <el-button link type="primary" size="small">回复</el-button>
              <el-button link type="primary" size="small">查看记录</el-button>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="bottom">
        <div class="demo-pagination-block">
          <el-pagination
            :pager-count="5"
            :page-size="state.limit"
            :page-sizes="[50, 100, 200, 400]"
            :small="small"
            :disabled="disabled"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="newTableData.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.Msgcenter {
  height: 10vh;
  display: flex;
  align-items: center;
}

.Msgcenter div {
  color: rgb(74, 77, 78);
  font-size: 20px;
  font-weight: bold;
  margin-left: 1%;
}

.MsgBox {
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 242, 245);
}

.context {
  width: 98%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  width: 90%;
}

.left {
  order: -1;
}

.right {
  order: -1;
  display: flex;
  align-items: center;
}
.select {
  margin-right: 20px;
}
.select span {
  display: inline-block;
  width: 50px;
  border-width: 1px;
  border-color: black;
}
.table {
  height: 80%;
  width: 85%;
  overflow-y: hidden;
}

.bottom {
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: center;
}

.demo-pagination-block {
  width: 90%;
  display: flex;
  justify-content: flex-end;
}

:deep(.el-button + .el-button) {
  margin: 0;
}

:deep(.el-button:hover) {
  border-color: rgb(1, 127, 153);
  color: rgb(1, 127, 153);
  outline: 0;
}

:deep(.el-button:focus) {
  border-color: rgb(1, 127, 153);
  color: rgb(1, 127, 153);
}

:deep(.el-select) {
  --el-select-input-focus-border-color: rgb(1, 127, 153);
}

:deep(.el-pager li:hover) {
  color: rgb(1, 127, 153);
}

:deep(.el-pagination) {
  --el-pagination-hover-color: rgb(1, 127, 153);
}

:deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: rgb(1, 127, 153);
  color: #fff;
}

:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px rgb(1, 127, 153) inset;
}
</style>
