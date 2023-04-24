<template>
  <el-breadcrumb  :separator-icon="ArrowRight">
    <el-breadcrumb-item @click="handlebread(item)"  :class="breadlist.length-1==index ? 'breaditem lastitem':'breaditem'" v-for="(item,index) in breadlist" :key="item" :index="index" >{{ item }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup >
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import et from '../../bus'
import { computed,watch,ref} from 'vue';
import {sidebarrouters} from '../../config/Layoutmenu/aside'
let router=useRouter()
let breadlist=ref([])

watch(()=>router.currentRoute.value.matched[1],(val,old)=>{
     breadlist.value=[]
let breadpathlist=val.path.split('/')
breadlist.value.push(val.name)
breadpathlist.shift()
for(var i=breadpathlist.length-2;i>=0;i--){
    sidebarrouters.forEach((ele)=>{
        if (ele.path=='/'+breadpathlist[i]) {breadlist.value.push(ele.name)}})}
breadlist.value.reverse()
},{immediate:true})
let handlebread=(e)=>{
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