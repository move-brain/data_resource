<script setup>
import { ref, onMounted } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
import tableItem from "./tableItem.vue";
//获取tree实例
const treeRef = ref(null);

const value = ref(""); //目录代码
const input_register = ref(""); //查询的输入框

//下面是目录选择框的内容
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
//下面是目录列表的内容
const data = [
  {
    label: "全部",
    //children有:基础目录,主题目录.省级部门目录,市县目录,全国目录
    children: [
      {
        label: "基础目录",
        //children有人口库,住宅库,医疗库
        children: [
          {
            label: "人口库",
            children: [
              {
                label: "姓名库",
              },
              {
                label: "年龄库",
              },
              {
                label: "其他",
                children: [
                  {
                    label: "目录名称1",
                  },
                  {
                    label: "目录名称2",
                  },
                  {
                    label: "目录名称3",
                  },
                ],
              },
            ],
          },
          {
            label: "住宅库",
          },
          {
            label: "医疗库",
          },
        ],
      },
      {
        label: "主题目录",
        children: [
          {
            label: "主题目录1",
          },
          {
            label: "主题目录2",
          },
          {
            label: "主题目录3",
          },
        ],
      },
      {
        label: "省级部门目录",
        children: [
          {
            label: "省级部门目录1",
          },
          {
            label: "省级部门目录2",
          },
          {
            label: "省级部门目录3",
          },
        ],
      },
      {
        label: "市县目录",
        children: [
          {
            label: "市县目录1",
          },
          {
            label: "市县目录2",
          },
          {
            label: "市县目录3",
          },
        ],
      },
      {
        label: "全国目录",
        children: [
          {
            label: "全国目录1",
          },
          {
            label: "全国目录2",
          },
          {
            label: "全国目录3",
          },
          {
            label: "全国目录4",
          },
        ],
      },
    ],
  },
];

const defaultProps = {
  children: "children",
  label: "label",
};
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <!-- 头部内容 -->
      <el-header class="register-header">
        <h1>目录注册</h1>
      </el-header>
      <!-- 头部内容 -->
      <el-container>
        <!-- 侧边栏内容 -->
        <el-aside width="256px" class="register-siderbar">
          <!-- 侧边栏主要内容 -->
          <div class="register-siderbar-container">
            <h1>目录列表</h1>
            <el-tree
              ref="treeRef"
              class="tree-content"
              :data="data"
              :props="defaultProps"
              accordion
              @node-click="handleNodeClick"
            />
          </div>
        </el-aside>
        <!-- 以上是tree形结构的内容 -->
        <el-container>
          <!-- 此处是主要内容区域 -->
          <el-main class="register-main">
            <div class="register-main-container">
              <el-button class="add-button" type="primary">添加目录</el-button>
              <div class="main-input-container">
                <!-- 这里是选择目录代码用的 -->
                <el-select v-model="value" placeholder="目录代码">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
                <!-- 这里是选择目录代码用的 -->

                <!-- 这里是查询的输入框 -->
                <el-input v-model="input_register" placeholder="请输入关键字">
                  <template #suffix>
                    <el-icon class="el-input__icon"><search /></el-icon>
                  </template>
                </el-input>
                <!-- 这里是查询的输入框 -->
              </div>
            </div>
            <!-- 这里是Table内容 -->
            <tableItem></tableItem>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
$siderbar-color: #2a7c98;
$global-bg-color: #f0f1f5;
$bg-color: #ffffff;
$border-radius: 0.5rem;
$button-color: #2a7c98;
$font-color: #5f6162;
.register-header {
  background: $bg-color;
  line-height: 60px;
}
.register-siderbar {
  margin: 24px 13px 24px 22px;
  border-radius: $border-radius;
  .register-siderbar-container {
    height: 100%;
    background-color: $bg-color;
    overflow-y: auto;
    h1 {
      font-size: 16px;
      padding: 22px 0 20px 20px;
      font-weight: bolder;
    }
  }
}
.register-main {
  margin: 24px 13px 24px 0;
  background: $bg-color;
  border-radius: $border-radius;
  .add-button {
    background: $button-color;
  }
}
.container {
  background: $global-bg-color;
  height: 92vh;
  width: 80vw;
  min-width: 1200px;
}
.register-main-container {
  display: flex;
  justify-content: space-between;
}
.main-input-container {
  display: flex;
}
// 透传修改element-ui样式
:deep(.el-select .el-input__wrapper) {
  background: #f5f7fa;
}
:deep(.el-input .el-input__wrapper) {
  width: 260px;
}
:deep(.el-select .el-input__wrapper) {
  width: 100px;
}

:deep(.el-select .el-input__inner::placeholder) {
  color: $font-color;
  font-weight: bolder;
}
//此处添加treeNode被选择的样式
.tree-node-selected {
  background-color: #ebf4f7;
  color: #4492aa;
}
</style>
