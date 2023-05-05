<template>
  <el-breadcrumb  :separator-icon="ArrowRight">
    <el-breadcrumb-item @click="handlebread(item)"  :class="breadlist.length-1==index ? 'breaditem lastitem':'breaditem'" v-for="(item,index) in breadlist" :key="item" :index="index" >{{ item.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup >
import { ArrowRight } from '@element-plus/icons-vue'
import et from '../../bus'
import { watch,ref} from 'vue';
import { useDirectoryinfoStore } from '../../store/Directoryinfo';
import {getallparent}  from "../../api/request"
let breadlist=ref([])
let Directoryinfo=useDirectoryinfoStore()
let Getallparent= async (id)=>{
 
 await getallparent(id).then(res=>{
    res.data.data.forEach(element => {
      breadlist.value.push(element)
    });
    console.log(breadlist);
  })
}
//具体思路就是监视Directoryinfo中info的变化，如果发生改变就请求其所有的父目录
watch(()=>Directoryinfo.info, async (val,old)=>{
  breadlist.value=[]
  await Getallparent(Directoryinfo.info.data.currentCatalogueBasicInfor.id)
  breadlist.value.push(val.data.currentCatalogueBasicInfor)
},{immediate:true})  
//在layout.vue文件触发
let handlebread=async (e)=>{
  // console.log(e); 
  // breadlist.value=[]
  // await Getallparent(Directoryinfo.info.data.currentCatalogueBasicInfor.id)
  // breadlist.value.push(e)
  // 点击面包屑跳转到其相应的页面  具体函数在layout编写
    et.emit("handlebreaditem",e)
}
</script>
<style lang="scss" scoped  >
.breaditem.lastitem ::v-deep .el-breadcrumb__inner{
    cursor: pointer;
    position: relative;
    z-index: 1;
}
.breaditem ::v-deep .el-breadcrumb__inner{
z-index: 1 !important;
position: relative;
cursor: pointer;
}
.breaditem ::v-deep  span:hover{
color: #01697f !important;

}
 .lastitem ::v-deep span{
    color: #000 !important;
  }
</style>