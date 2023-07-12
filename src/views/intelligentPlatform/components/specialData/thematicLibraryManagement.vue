<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="1" @click="toManage">
                <el-icon><icon-menu /></el-icon>
                <span>专题库管理</span>
              </el-menu-item>
              <el-menu-item index="2"  @click="toData">
                <el-icon><document /></el-icon>
                <span>数据更新</span>
              </el-menu-item>
            </el-menu>
      </el-aside>
      <el-main>
        <div class="links">
            <RouterLink active-class="active" to="/" ></RouterLink>
            <RouterLink active-class="active" to="/dataUpdating"></RouterLink>
            <RouterLink active-class="active" to="/add"></RouterLink>
        </div>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const router = useRouter();
const toData = () => {
    router.push({path:"/dataUpdating"});
}
const toManage = () => {
    router.push({path:"/"});
}
</script>

<style lang="scss" scoped>
    
    .el-aside {
        width: 12.2%;
    }
    
    .el-menu  {
        border: none;
        box-shadow: 0px -6px 12px rgb(177, 177, 177);
        height: 92vh;
        width: 98.4%;
    }
    .el-main  {
        padding: 0;
    }
    .el-menu-item.is-active {
        color: #007f99;
        background-color: #d9ecf0;
    }
    .el-menu-item:hover {
        background-color: #d9ecf0;
        color: #007f99;
    }
    .links {
        height: 0;
        width: 0;        
    }
</style>