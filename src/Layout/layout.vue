
<template>
    <div class="common-layout">
    <el-container>
      <el-header>
<Header/>
      </el-header>
      <el-container>
        <el-aside>
<Aside/>
        </el-aside>
        <el-main>
<Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup >
import Main from './components/Main.vue'
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import et from '../bus.js'
import router from '../router/index'
import {sidebarrouters} from '../config/Layoutmenu/aside'
import { useRouter } from 'vue-router';
let currentrouter=useRouter()
et.on("handleclikemenu",async (e)=>{
    console.log(e.path);
  if (e.path.length>4) {
    await router.push(e.path)
    // et.emit("handlebread")
  }
})
et.on("handlebreaditem",async (e)=>{
 let activeitem=sidebarrouters.filter((item)=>{
  if (e==item.name) {
    return item.path
  }
  })
 await router.push(activeitem[0].path)
  et.emit("isactiveitem",{path:activeitem[0].path})
})
  //在点击了数据字段表格触发的事件
  et.on('cellclick',(e)=>{
    console.log(currentrouter.currentRoute.value.matched);
    router.push('')
  })
//点击了父 子 类  别的组件触发的事件
et.on("fachtable",(e)=>{ 
console.log(currentrouter.currentRoute.value.matched);
})

</script>
<style scoped >
.el-header{
    width: 100%;
    height: 8vh;
    padding: 0px;
    box-shadow:0px 10px 10px #dfe1e4 ;
    max-height: 55px;
    font-size: xx-small;
    position: relative;
}

.el-aside{
    background-color: #f5f7fa;
    width: 28vw;
    min-height: 92vh;
    height: auto;
    overflow-y:hidden;
}
</style>