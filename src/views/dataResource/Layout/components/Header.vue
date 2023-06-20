
<template>
<div class="all" >
<el-row>
<el-col :span="5" >
<div class="header_left" style="width: 100%;" >
    <img src="@/assets/图像 5@2x.png" />
 <span class=" font-bold text-base" >数据资源库</span>
</div>
</el-col>
<el-col :span="14" >
    <el-menu
    :default-active="acid"
    class="el-menu-demo"
    mode="horizontal"
    background-color="fff"
    active-text-color="#000"
   @select="activeid"
  > 
  <el-menu-item  v-for="(item, index) in headermenu"  :index="item.id">{{ item.label }}</el-menu-item>
  </el-menu>
</el-col>
<el-col :span="5" >
 <div class="header_right " style="width: 65%; height: 100%; display: flex;justify-content: space-between;align-items: center;margin-right:5% ;margin-left: 25%;" >
<span class="hover:text-[#007f99]"  @click="gohomepage"  >返回首页</span>
<div  v-if="islogin" style="display: flex;align-items: center;width: 50%;justify-content: space-around;" >
    <div @click="gologin" class="login hover:text-[#007f99]" >登录</div>
    <div  class="line" ></div>
<div @click="goregister" class="register hover:text-[#007f99]" >注册</div>
</div>
<div v-else class="mr-5" >
    <el-select  class="applySelect"  placeholder="admin">
    <el-option
      v-for="item in 2"
      :key="item"
      :label="item"
      :value="item"
    />
</el-select>
</div>


 </div>
</el-col>
</el-row>
</div>
</template>
<script setup >
import et from '@/bus'
import {onMounted,watch,ref} from 'vue'
import headermenu from '@/config/Layoutmenu/header.js'
import {useuserinfoStore} from '@/store/userinfo.js'
import { computed } from "vue";
import { useRoute } from 'vue-router';
const route=useRoute()
let acid=ref(1)
let userinfostore=useuserinfoStore()
 let islogin=computed(()=>{
    if (userinfostore.userinfo.username=='') {
        return true
    }
return false
 })
watch(()=>route.name,(val,old)=>{ 
    console.log(val);
     headermenu.forEach(element => {
        console.log(element);
        if (val==element.pathname) {
            acid.value=element.id
        }
     });
     console.log(acid.value);
},{immediate:true})

//点击头部导航栏
let activeid=(e)=>{
    if (acid.value!==e) {
        et.emit("clikheadid",e)
    }
}
let gologin=()=>{
    et.emit("gologin")
}
let goregister=()=>{
    et.emit("goperRegister")
}
 let gohomepage=()=>{
    et.emit('gohomepage')
 }
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
height: 8vh;
max-height: 55px;
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
.all ::v-deep .el-icon.el-select__caret.el-select__icon{
        color: black;
    }
.all ::v-deep .el-select{
    font-size:small ;
    color: black !important;
    --el-select-border-color-hover:none;
    --el-select-input-focus-border-color: none;
}
.all ::v-deep .el-input__wrapper{
    padding: 0px;
    box-shadow: none;
}
.all ::v-deep input{
    max-width:50px;
}
.all ::v-deep input::placeholder {
        color: black;
    }
</style>