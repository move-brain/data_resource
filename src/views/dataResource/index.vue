<script setup>
import Header  from "@/views/dataResource/Layout/components/Header.vue"
import et from "@/bus"
import { useRouter } from 'vue-router';
import headmenu from "@/config/Layoutmenu/header.js"
let router=useRouter()
//数据资源库主页点击进入不同页面处理
et.on('enter',(e)=>{
    console.log(e);
    router.push({name:e})
})
et.on('clikheadid',(e)=>{
    let pathname=''
    headmenu.forEach(element => {
        if (e==element.id) {
            pathname=element.pathname 
        }
    });
    router.push({name:pathname})  
})

</script>
<template>
    <div class="hhh h-[8vh] max-h-[55px]" ><Header class="h-[100%]" /></div>
    <router-view ></router-view>
</template>
<style scoped>
.hhh{
    width: 100%; 
    height: 8vh;
    padding: 0px;
    box-shadow:0px 10px 10px #dfe1e4 ;
    max-height: 55px;
    position: relative;
    z-index: 10;
}
</style>