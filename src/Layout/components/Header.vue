
<template>
<div class="all" >
<el-row>
<el-col :span="5" >
<div class="header_left" style="width: 100%;" >
    <img src="../../assets/图像 5@2x.png" />
 <h1>数据资源库</h1>
</div>
</el-col>
<el-col :span="14" >
    <el-menu
    :default-active="2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="fff"
    active-text-color="#000"
   @select="activeid"
  > 
  <el-menu-item  v-for="(item, index) in headermenu"  :index="item.id">{{ item.label }}</el-menu-item>
  <!-- <el-menu-item index="2">Orders</el-menu-item>
  <el-menu-item index="3">Orders</el-menu-item>
  <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item index="5">Orders</el-menu-item> -->

  </el-menu>
</el-col>
<el-col :span="5" >
 <div class="header_right"  style="width: 65%; height: 100%; display: flex;justify-content: space-between;align-items: center;margin-right:5% ;margin-left: 25%;" >
<span>返回首页</span>
<div  style="display: flex;align-items: center;width: 50%;justify-content: space-around;" >
    <div class="login" >登录</div>
    <div class="line" ></div>
<div class="register" >注册</div>
</div>
 </div>
</el-col>
</el-row>

</div>
</template>

<script setup >
import headermenu from '../../config/Layoutmenu/header'
import et from '../../bus'
import {onMounted} from 'vue'
let activeid=(e=2)=>{
console.log(e);
et.emit("headeractiveid",e)
}
onMounted(() => {
activeid()
})

</script>

<style scoped >
.el-menu-item {
    font-size: xx-small;
}
.header_right div{
    cursor: pointer;
}
.header_right span{
    cursor: pointer;
}
.line{
    width: 2px;
    background-color:#c4c7c8 ;
    height: 20px;
}
.login{
    display: inline-block;
}
.el-col-14{
    display: flex;
    justify-content: center;
}
.el-menu{
    width: 60%;
    display: flex;
    justify-content: space-around;
}
.el-menu--horizontal {
    border-bottom:none;
    --el-menu-hover-bg-color:#fff !important;
}
.el-menu-item{
    box-sizing: border-box;
    padding: 0px;
    margin-left: 2px;
    margin-right: 2px;
}
.el-menu--horizontal>.el-menu-item.is-active{
    /* border-bottom-color: #01697f; */
    border-bottom:3px solid #01697f;
    font-weight: bold;
}
.el-row{
    height: 100%;
}
.all{
    font-size: xx-small;
    width: 100%;
height: 100%;
}
.header_left{
    display: flex;
    height: 100%;

    padding-left: 6%;
    align-items: center;
}
.header_left img{
    height: 70%;
    margin-right: 1vw;
}
.el-col{
    height: 100%;
}
</style>