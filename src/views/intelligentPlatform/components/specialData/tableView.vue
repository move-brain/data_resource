<template>
    <div class="view">
        <div class="submenu">
            <el-aside>
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <div id="subtitle">数据库列表</div>
                    <el-menu-item index="1">
                      <span>XXXXXX医院库1</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                      <span>XXXXXX医院库2</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                      <span>XXXXXX医院库3</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <span>XXXXXX医院库4</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                      <span>XXXXXX医院库5</span>
                    </el-menu-item>
                  </el-menu>
            </el-aside>
        </div>
      <div class="unpaid-box">
        <div class="button">
            <button id="add">新增</button>
            <button>立即更新</button>
            <button>中止</button>
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
            <td>{{ item.state }}</td>
            <td>{{ item.time }}</td>
            <td class="sentence">{{ item.sentence }}</td>
            <td><button @click="removeItem(index)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const cartItems = ref([
    { id: 1, name:'用户表1', state: '说明说明说明说明说明', time: '每周', sentence: '建表语句.doc', selected: false },
    { id: 2, name:'用户表2', state: '说明说明说明说明说明', time: '每周', sentence: '建表语句.doc', selected: true },
    { id: 3, name:'用户表3', state: '说明说明说明说明说明', time: '每周', sentence: '建表语句.doc', selected: false },
    { id: 4, name:'用户表4', state: '说明说明说明说明说明', time: '每周', sentence: '建表语句.doc', selected: false },
    { id: 5, name:'用户表5', state: '说明说明说明说明说明', time: '每周', sentence: '建表语句.doc', selected: false },
  ]);

  const title = ref([
    {id: 1, name: '表名称',},
    {id: 2, name: '表说明',},
    {id: 3, name: '更新频率',},
    {id: 4, name: '建表语句',},
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
      .sentence {
          color: #478cff;
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