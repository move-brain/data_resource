<template>
  <div class="common-layout">
    <el-container>
        <el-aside class="side" width="200px">
<div class=" mt-5" ></div>
          <el-menu
        class="el-menu-vertical-demo mt-5"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>主页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <svgicon  style="cursor: pointer; width: 20px; "  iconName="icon-shenqing"  ></svgicon>
          <span>项目申请</span>
        </el-menu-item>
        <el-menu-item @click="clickxiangmu" index="3">
          <svgicon  style="cursor: pointer; width: 20px; "  iconName="icon-guanliyuan_guanliyuanrizhi"  ></svgicon>
          <span>项目管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <svgicon  style="cursor: pointer; width: 20px; "  iconName="icon-tongjitu"  ></svgicon>
          <span>数据显示</span>
        </el-menu-item>
      </el-menu>
          
        </el-aside>
        <el-main>
          <div class="mian">
      <h2>购物车</h2>
    <div class="links">
      <span class="mr-5 text-use font-bold "  >待支付</span>
      <span>购买记录</span>
    </div>
    <RouterView />
  </div></el-main></el-container></div>
</template>

<script setup>
import {RouterView, RouterLink} from "vue-router"
import {useRouter} from 'vue-router'
let router=useRouter()

let clickxiangmu=()=>{
router.push({name:''})
}
</script>

<style scoped lang="scss">
.el-menu-item span{
  margin-left: 8px;
}
.common-layout {
  // border-left: 1px solid grey;
    ul li{
    list-style: none;
    padding: 1vh;
  }
  .side {
    box-shadow: 4px 4px 4px #f0f2f5;
  }
}
.el-main{
  padding-left: 0px;
}
.main {
  border-left: 1px solid grey;
}
  .links {
    padding: 2vh;
  }
 .active {
    font-weight: bold;
    color: #007f99;
    border-bottom: 2px solid #007f99;
    padding-bottom: 2vh;
  }

  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    padding: 2vh 0 0 2vh;
    font-weight: 700;
  }

</style>