<script setup>
import { ref, onMounted } from 'vue'; 

import { useRoute, useRouter } from 'vue-router'

const $route = useRoute();
const $router = useRouter()

onMounted(() => {
    forIndex()
})


const navs = [
    { path: "/information/processManagement/itemReport", text: "项目报告" },
    { path: "/information/processManagement/publication", text: "发表刊物" },
    { path: "/information/processManagement/meetReport", text: "会议报告" },
    { path: "/information/processManagement/projectResult", text: "项目成果" }
]

const activeIndex = ref(undefined);


const forIndex = () => {
    let currentPath = $route.path;
    for(let nav of navs){
        if(currentPath === nav.path){
        activeIndex.value = nav.path;
        break;
        }
        if(currentPath.startsWith(nav.path + '/')){ 
        if(activeIndex.value){
            if(activeIndex.length < nav.path.length){ 
            activeIndex.value = nav.path;
            }
        }else{
            activeIndex.value = nav.path; 
        }
        }
    }
    if(!activeIndex.value)
        activeIndex.value = navs[0].path;
}

</script>

<template>
  <div class="applicationInfo" >
            <div class="everyProject">
                <div style="display:flex;">
                        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :router="true">
                            <el-menu-item v-for="(nav,index) in navs" :key="index" :index="nav.path">{{nav.text}}</el-menu-item>
                        </el-menu>
                    <RouterView/>
                </div>
            </div>
        </div>
</template>


<style scoped>
    .everyProject ::v-deep .el-menu-vertical-demo {
        height: auto;
        width: 13vw;
        border-right:3px solid #f0f2f5;
        margin: 0;
        user-select: none;
    }
    .applicationInfo {
        display: flex;
        flex-direction: column;
        min-width:1100px
    }

    .everyProject {
        background-color: #ffffff;
        padding-top: .8vh;
        padding-bottom: .8vh;
        margin-top: 3vh;
        margin-left: 2.5%;
        width: 95%;
    }

</style>