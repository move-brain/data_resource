<template>
  <div class="title">人员管理</div>
  <div class="person">
    <div class="content">
      <div class="add" @click="onopen">添加人员</div>

      <div class="view">
        <div class="unpaid-box">
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>部门</th>
                <th>ID</th>
                <th>证件类型</th>
                <th>证件号码</th>
                <th>联系方式</th>
                <th>职位</th>
                <th>职称</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.longID }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.IDnumber }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.job }}</td>
                <td>
                  <button @click="drawer = true">编辑</button>&nbsp;&nbsp;&nbsp;
                  <!-- <button><el-button @click="visible = true">编辑</el-button></button> -->
                  <button @click="removeItem(index)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <el-drawer v-model="drawer" title="编辑人员" size="35%">
      <div class="personMessage">
        <div class="subtitle">个人信息</div>
        <div class="detail" v-for="item in personMessage" :key="item.id">
          <p id="title">{{ item.name }}</p>
          <p id="value">{{ item.value }}</p>
        </div>
      </div>

      <div class="manageMessage">
        <div class="subtitle">机构信息</div>
        <el-form :model="form" label-width="120px">
          <div class="text">部门：</div>
          <el-form-item label-width="0">
            <el-select
              v-model="form.region"
              placeholder="xxxxx部门/技术部/开发组"
            >
              <el-option label="选择1" value="shanghai" />
              <el-option label="选择2" value="beijing" />
            </el-select>
          </el-form-item>
          <div class="text">职位：</div>
          <el-form-item label-width="0">
            <el-input v-model="form.name" placeholder="技术经理" />
          </el-form-item>
          <div class="button">
            <el-form-item aria-label="Close this dialog">
              <el-button @click="onclose">取消</el-button>
              <el-button id="save" type="primary" @click="onSubmit"
                >保存</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessageBox } from "element-plus";

const visible = false; // 使用变量来代替Vue中的ref

const cartItems = ref([
  {
    id: 1,
    department: "xxxxx部门/技术部/开发组",
    longID: 4563223568,
    name: "张三",
    type: "身份证",
    IDnumber: "356249122323232564",
    phoneNumber: "1365644124",
    position: "院长",
    job: "教授",
    selected: false,
  },
  {
    id: 2,
    department: "xxxxx部门/技术部/开发组",
    longID: 4563223568,
    name: "王小明",
    type: "身份证",
    IDnumber: "356249122323232564",
    phoneNumber: "1365644124",
    position: "院长",
    job: "教授",
    selected: false,
  },
  {
    id: 3,
    department: "xxxxx部门/技术部/开发组",
    longID: 4563223568,
    name: "王小明",
    type: "身份证",
    IDnumber: "356249122323232564",
    phoneNumber: "1365644124",
    position: "院长",
    job: "教授",
    selected: false,
  },
  {
    id: 4,
    department: "xxxxx部门/技术部/开发组",
    longID: 4563223568,
    name: "王小明",
    type: "身份证",
    IDnumber: "356249122323232564",
    phoneNumber: "1365644124",
    position: "院长",
    job: "教授",
  },
]);

const selectAll = ref(false);

function removeItem(index) {
  cartItems.value.splice(index, 1);
}

const drawer = ref(false);
const onclose = () => {
  drawer.value = false;
};
const onopen = () => {
  drawer.value = true;
};

const personMessage = ref([
  {
    id: 1,
    name: "真实姓名",
    value: "王小明",
  },
  {
    id: 2,
    name: "性别",
    value: "女",
  },
  {
    id: 3,
    name: "证件类型",
    value: "身份证",
  },
  {
    id: 4,
    name: "证件号码",
    value: "356249122323232564",
  },
  {
    id: 5,
    name: "学历",
    value: "本科",
  },
  {
    id: 6,
    name: "职称",
    value: "高级工程师",
  },
  {
    id: 7,
    name: "手机号",
    value: "13212311231",
  },
]);

const form = reactive({
  name: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
  drawer.value = false;
};

// 抽屉
const dialog = ref(false);
const loading = ref(false);
const cancelForm = () => {
  loading.value = false;
  dialog.value = false;
  clearTimeout(timer);
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 800;
  margin: 1.5vh;
  z-index: 2;
}
.person {
  background-color: #e6e8eb;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: white;
  width: 98%;
  height: 95%;
}
.add {
  cursor: pointer;
  height: 5vh;
  background-color: #007f99;
  width: 12vh;
  line-height: 5vh;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 2vh;
  color: white;
  border-radius: 3px;
}
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.unpaid-box {
  width: 97%;
  background-color: #fff;
  height: 75vh;
}
table {
  width: 100%;
  margin: 0.7vh auto;
  border-collapse: collapse;
  background-color: #fff;
  thead tr th {
    font-weight: 700;
    background-color: #f0f2f5;
    padding: 1.3vh 0;
    text-align: center;
    color: #242727;
  }
  tbody tr {
    text-align: center;
    color: #7c8081;
    font-size: 12px;
    border-bottom: 1px solid #e8eaed;
    height: 5vh;
    button {
      border: none;
      background-color: #fff;
      color: #478cff;
      cursor: pointer;
    }
  }
}

.close {
  font-size: 25px;
  cursor: pointer;
}

:deep(.el-drawer__header) {
  margin-bottom: 0 !important;
}
.personMessage {
  margin-top: -1vh;
  border-top: 1px solid rgb(204, 204, 204);
  .subtitle {
    margin: 1vh;
  }
  .el-select {
    width: 100%;
  }
}

.detail {
  margin-left: 2vh;
  font-size: 14px;
  #title {
    color: rgb(147, 147, 147);
  }
  #value {
    padding-bottom: 1vh;
  }
}

.manageMessage {
  margin: 1vh;
  .text {
    font-size: 14px;
    color: grey;
  }
  .button {
    border-top: 1px solid rgb(195, 195, 195);
    margin-top: 6vh;
    padding-top: 3vh;
    :deep(.el-button .el-button--primary #save) {
      background-color: #007f99 !important;
    }
  }
}
</style>
