<template>
  <div class="head flex items-center justify-between ">
<div class="w-[20%] h-full flex items-center ml-[1vw]" >
<img  class="h-3/4" src="../../assets/图像 5@2x.png"/>
<h1 class="text-base font-black ml-[10px]" >国家脑疾病临床大数据平台</h1>
</div>
<span  class="hover:text-[#007f99] mr-[1vw] font-bold" style=" cursor: pointer;" @click="homepage" >返回主页</span>
  </div>
  <div class="w-[100%] h-[92vh]" >  
    <transition>
<router-view/></transition></div>  
</template>
<script setup >
import et from '@/bus'
let homepage=()=>{
  et.emit('gohomepage')
}
</script>
 <style scoped >
.head{
    width: 100%;
    height: 8vh;
    padding: 0px;
    box-shadow:0px 15px 15px #dfe1e4 ;
    max-height: 55px;
    font-size: xx-small;
    position: relative;
}


</style>