<template>
<div class="all" >
    <div style="width: 100%;margin-bottom: 10%;" >
<div style="font-weight:bolder;font-size: large;" >
    {{ activelabel }}
</div>
<div style="display: flex;justify-content: space-between;font-size: xx-small;width: 75%;margin-top: 7%;margin-bottom: 8%;" >
    <span v-for="item in rank" :index="item.id" >{{ item.label }}</span>
</div>
<div style="background-color: #dfdfdf;width: 100%;height: 1.5px;" ></div>
</div>
<div style="overflow-y:hidden;" >
    <el-menu
         class="el-menu-vertical-demo"
         @open="openmenu"
         @select="selectmenu"
         @close="closemenu"
         unique-opened="true"
        :default-active="openid"
      >
      <div v-for="(item,index) in sidebarmenu" @click="handleclik(item)" :key="item.id" style="width: 100%;height: 100%;" >
        <el-sub-menu  v-if="item.children&&item.children.length>0" :class="openid==item.path ? 'activemenu':''"   :index="item.path">
          <template #title>
            <span>{{item.label }}</span>
          </template>
          <div @click.stop="handleclik(citem)" v-for="(citem,cindex) in item.children" :key="citem.id" >
            <el-sub-menu  v-if="citem.children&&citem.children.length>0"  :class="openid==citem.path ? 'activemenu':''" :index="citem.path">
            <template #title>{{ citem.label }}</template>
            <div  @click.stop="handleclik(ccitem)" v-for="(ccitem,ccindex) in citem.children" :key="ccitem.id" >
                
                <el-sub-menu :class="openid==ccitem.path ? 'activemenu':''" :index="ccitem.path" v-if="ccitem.children&&ccitem.children.length>0"  >
                  <template #title>{{ ccitem.label }}</template>
                  <div  @click.stop="handleclik(cccitem)" v-for="(cccitem,cccindex) in ccitem.children" :key="cccitem.id" >
                    <el-sub-menu :class="openid==cccitem.path ? 'activemenu':''" :index="cccitem.path" v-if="cccitem.children&&cccitem.children.length>0"  >
                      <template #title>{{ cccitem.label }}</template>
                      <div  @click.stop="handleclik(ccccitem)" v-for="(ccccitem,ccccindex) in cccitem.children" :key="ccccitem.id" >
                      <el-menu-item   :class="openid==ccccitem.path ? 'activemenu':''"   :index="ccccitem.path"> <span>{{ ccccitem.label }}</span></el-menu-item></div>
               </el-sub-menu>
                    <el-menu-item  v-else :class="openid==cccitem.path ? 'activemenu':''"   :index="cccitem.path"> <span>{{ cccitem.label }}</span></el-menu-item>
                  </div>

                </el-sub-menu>
                <el-menu-item   v-else :class="openid==ccitem.path ? 'activemenu':''"   :index="ccitem.path"> <span>{{ ccitem.label }}</span></el-menu-item>
            </div>
          </el-sub-menu>
            <el-menu-item :class="openid==citem.path ? 'activemenu':''"  v-else :index="citem.path" >
               <span> {{ citem.label }}</span>
            </el-menu-item>
          </div>
        </el-sub-menu>
        <el-menu-item :class="openid==item.path ? 'activemenu':''"   v-else :index="item.path" >
          <span>{{ item.label }}</span>
        </el-menu-item>
      </div>
      </el-menu>
</div>
</div>
</template>
<script setup >
import { ref,onMounted ,watch} from 'vue'
import et from '../../bus'
import headermenu from '../../config/Layoutmenu/header'
import {rank,sidebarmenu,sidebarrouters} from '../../config/Layoutmenu/aside.js'
import { useRouter } from 'vue-router';
let activelabel=ref('')
let openid=ref("")
let router=useRouter()
let iswatch=false
et.on("headeractiveid",(e)=>{
      headermenu.forEach((ele)=>{
        ele.id==e? activelabel.value=ele.label :''
      })
})
et.on("isactiveitem",(e)=>{
  let skippath=''
    openid.value=e.path
    let activeitem=sidebarrouters.filter((item)=>{
  if (e.path==item.path) {
    return item
  }
  })
let breadpathlist=e.path.split('/')
breadpathlist.shift()
console.log(activeitem);
  for(var i=0;i<activeitem[0].meta.rank;i++){
       skippath+='/'+breadpathlist[i]
  }
 console.log(skippath);

})

let handleclik=async (event)=>{
 
  console.log(222);
   et.emit("handleclikemenu",event)
}
let a=ref("")
onMounted(()=>{
  // iswatch=true
  watch(()=>router.currentRoute.value.matched[1],(val,old)=>{
  if (!iswatch) {
    console.log(router.currentRoute.value.matched[1]);
           console.log(val.path);
           a=val.path
           openid.value=val.path
           console.log(openid.value);
           console.log(val.path);
  }
},{immediate:true})
})
let openmenu=(e)=>{
  console.log(e);
  openid.value=e
}
watch(()=>openid.value,(val,old)=>{
  console.log(val,old);
  console.log(iswatch);
  if (!iswatch) {
    console.log(1111);
    openid.value=router.currentRoute.value.matched[1].path
  }
})
let closemenu=(e)=>{
  iswatch=true
  console.log(iswatch);
  console.log(e);
  openid.value=' '
}
let selectmenu=(e)=>{
  console.log(e);
  openid.value=e
}
// let clickitem=()=>{
//   openid.value=''
// }
// setTimeout(openmenu,3000)
</script>
<style lang="scss" scoped >
 ::v-deep .el-sub-menu.activemenu>.el-sub-menu__title:first-child{
  background-color: rgba(2, 126, 152,0.7)  !important;
  color: #000;
   border-right: 3px solid #027e98 !important;
}
.el-menu{
  background-color: #f5f7fa !important;
  border: none !important;
}
.el-menu-item{
  background-color: #f5f7fa !important;
}
.el-sub-menu{
  background-color: #f5f7fa !important;
}
.el-sub-menu ::v-deep .el-sub-menu__title{
    // padding: 0px  !important;
    font-weight: bold !important;
    
}
.all{
    margin-left: auto;
    width: 60%;
    height: 95%;
    padding-top: 8%;
    padding-right: 1vw;
}
::v-deep .el-menu-item.is-active {
  color: #000 !important;
}

::v-deep .activemenu.is-opened>.el-sub-menu__title:first-child{
  background-color: rgba(2, 126, 152,0.7)  !important;
  color: #000;
   border-right: 3px solid #027e98 !important;
}
::v-deep .el-sub-menu.is-active.is-opened .el-menu-item.is-active.activemenu{
  background-color: rgba(2, 126, 152,0.7)  !important;
  color: #000;
   border-right: 3px solid #027e98 !important;
}
</style>
