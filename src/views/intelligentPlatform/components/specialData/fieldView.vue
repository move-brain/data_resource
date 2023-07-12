<template>
    <div class="view">
        <div class="submenu">
            <el-aside>
                  <el-menu
                    default-active="1-2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <div id="subtitle">专题库列表</div>
                    <el-sub-menu index="1">
                      <template #title>
                        <el-icon><location /></el-icon>
                        <span>XXXXXX医院库1</span>
                      </template>
                        <el-menu-item index="1-1"><el-icon><document /></el-icon>用户表1</el-menu-item>
                        <el-menu-item index="1-2"><el-icon><document /></el-icon>用户表2</el-menu-item>
                        <el-menu-item index="1-3"><el-icon><document /></el-icon>用户表3</el-menu-item>
                        <el-menu-item index="1-4"><el-icon><document /></el-icon>用户表4</el-menu-item>
                        <el-menu-item index="1-5"><el-icon><document /></el-icon>用户表5</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                      <template #title>
                        <el-icon><location /></el-icon>
                        <span>XXXXXX医院库2</span>
                      </template>
                      <el-menu-item index="2-1"><el-icon><document /></el-icon>用户表1</el-menu-item>
                        <el-menu-item index="2-2"><el-icon><document /></el-icon>用户表2</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                      <template #title>
                        <el-icon><location /></el-icon>
                        <span>XXXXXX医院库3</span>
                      </template>
                      <el-menu-item index="3-1"><el-icon><document /></el-icon>用户表1</el-menu-item>
                        <el-menu-item index="3-2"><el-icon><document /></el-icon>用户表2</el-menu-item>
                    </el-sub-menu>
                  </el-menu>
            </el-aside>
        </div>
      <div class="unpaid-box">
        <div class="button">
            <button id="add">新增</button>
        </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" v-model="selectAll" @click="selectAllChanged()"/></th>
            <th v-for="(title, index) in title" :key="title.id">{{title.name}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="item.id">
            <td><input type="checkbox" v-model="item.selected"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.length }}</td>
            <td>{{ item.note }}</td>
            <td><button @click="removeItem(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
  
  const cartItems = ref([
    { id: 1, name:'姓名', type: '文字', length: 10, note: '姓名姓名姓名姓名', selected: false },
    { id: 2, name:'年龄', type: '文字', length: 10, note: '姓名姓名姓名姓名', selected: true },
    { id: 3, name:'职位', type: '文字', length: 10, note: '姓名姓名姓名姓名', selected: false },
    { id: 4, name:'ID', type: '文字', length: 10, note: '姓名姓名姓名姓名', selected: false },
  ]);

  const title = ref([
    {id: 1, name: '字段名称',},
    {id: 2, name: '字段类型',},
    {id: 3, name: '长度',},
    {id: 4, name: '注释',},
    {id: 5, name: '操作',},
  ])
  
  const selectAll = ref (false);
  
  function removeItem(index) {
    cartItems.value.splice(index, 1);
  }
  
  function selectAllChanged() {
    for (let item of cartItems.value) {
      item.selected = !selectAll.value;
    }
  }
  
  </script>
  
  <style scoped lang="scss">
    .view {
      background-color: #f0f2f5;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 77vh;
      margin: -1vh;
      width: 100%;
    }
    .el-aside {
        width: 97%;
    }
    .submenu {
        width: 18%;
    }

    #subtitle {
        font-weight: 700;
        padding: 2vh;
    }
    .el-menu {
        height: 74vh;
    }
    .el-menu-item {
        height: 4.5vh;
        font-size: 13px;
    }
    .el-menu-item:hover {
        background-color: #d9ecf0;
        color: #007f99;
    }
    .el-sub-menu:hover {
        background-color: #d9ecf0;
        color: #007f99;
    }
    :deep(.el-sub-menu__title) {
        height: 5.5vh;
    }
    :deep(.el-sub-menu__title:hover) {
        background-color: #d9ecf0 !important;
        color: #007f99 !important;
    }
    .is-active {
            color: #007f99 ;
            background-color: #d9ecf0;
        }
    .el-main  {
        padding: 0 !important;
    }
      .unpaid-box {
        width: 80%;
        background-color: #fff;
        height: 74vh;
      }
    table {
      width: 94%;
      margin: 0 auto;
      border-collapse: collapse;
      background-color: #fff;
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
        }
      }
    }
      thead th {
        background-color: #f0f2f5;
        padding: 1.3vh 0;
        text-align: center;
        color: #242727;
        font-weight: 700;
      }
      input[type=checkbox]{
           cursor: pointer;
           position: relative;
           width: 15px;
           height: 15px;
           font-size: 14px;
      }
  
      input[type=checkbox]::after{
           position: absolute;
           top: 0;
           color: #000;
           width: 15px;
           height: 15px;
           display: inline-block;
           visibility: visible;
           padding-left: 0px;
           text-align: center;
           content: ' ';
           border-radius: 2px
      }
  
      input[type=checkbox]:checked::after{
          content: '√';
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
           font-size: 10px;
           font-weight: bold;
           background-color: #007f99;
           color: #fff;
      }

      .button {
        margin-left: 4vh;
        button {
            margin: 2vh 1vh;
            border: 1px solid rgb(206, 205, 205);
            height: 4.5vh;
            padding: 1vh 2vh;
            border-radius: 3px;
            background-color: white;
        }
        #add {
            color: white;
            background-color: #007f99;
        }
    }
  </style>