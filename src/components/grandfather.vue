<template>
<div class="w-full  h-[33%] bg-use 2xl:h-[25%] " style="min-height: fit-content;"  >
<div class="w-full bg-use h-[8vh] max-h-[55px] relative top-0 box-border px-[1.5%] flex justify-between" >
<div class="h-full w-fit flex items-center" >
<img class="h-[65%] mr-[1vw]" src="@/assets/图像 5@2x.png" />
<span class=" font-black 2xl:text-base text-sm text-[#ffffff]" >工作台</span>
</div>
<div class="h-full w-fit flex items-center" >
<div class="w-[8vw] max-h-[55px] h-full flex items-center" >
  <svgicon style="height: 45%;width: min-content; cursor: pointer; " className="allsvg" iconName="icon-a-naolingtixingtongzhi" color="#ffffff" ></svgicon>
  <svgicon style="height: 45%;width: min-content; cursor: pointer;" iconName="icon-gouwuche1" color="#ffffff"  ></svgicon>
</div>
<div class=" flex h-full items-center justify-between max-w-fit w-[8vw] ml-5" >
  <svgicon style="height: 45%;width: 20%; " iconName="icon-touxiangtongyong" color="#ffffff"  ></svgicon>
  <el-dropdown  >
    <span class="el-dropdown-link">
      {{ username }}
      <el-icon class="el-icon--right">
        <CaretBottom />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</div>
</div>
<div class="ml-[4.7vw] mt-[3vh]  flex flex-col">
<span class="text-[#ffffff] text-lg font-black 2xl:text-xl " >{{  username}}，欢迎登录本系统！</span>
<div class="mt-[2vh] flex flex-col" >
  <span class=" text-xs text-w mb-2">上次登录时间：2022-03-12 12：00</span>
<span class="text-xs  text-w" >上次登录地点：山东省济南市</span>
</div>
</div>
</div>
<div class="bg-[#f0f2f5] h-fit w-[100%]" >
<div class="allicon p-[3vw] py-[1vw] w-[25%] 2xl:w-[22%] flex flex-wrap justify-between" >
  <div><svgicon  style="cursor: pointer; width: 45%; "  iconName="icon-shenqing"  ></svgicon>
  <span>项目申请</span>
  </div>
 <div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-guanliyuan_guanliyuanrizhi"   ></svgicon>
<span>项目管理</span>
</div>
<div><svgicon style=" cursor: pointer; width: 45%;" color="#ffffff"  iconName="icon-tongjitu"   ></svgicon><span>项目管理</span></div>
<div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-morentouxiang"   ></svgicon><span>项目管理</span></div>
<div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-gouwuche"   ></svgicon><span>项目管理</span></div>
<div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-naoling"   ></svgicon><span>项目管理</span></div>
<div><svgicon style=" cursor: pointer; width: 45%;"   iconName="icon-wangzhanzidingyixinxizhanshi"   ></svgicon><span>项目管理</span></div>
<div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-shujuku"   ></svgicon><span>项目管理</span></div>
</div>
</div>
</template>
<script setup >
import {ref} from 'vue'
let username=ref("admin")
</script>
<style scoped>
.allicon div{
height: 6vw;
width: 35%;
box-sizing: border-box;
margin: 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
}
.allicon div:hover{
background-color: #007f99;
box-shadow: 8px 8px 8px #8ec2cf;
color: white;
border-radius: 8px;
}
.allicon span{
font-size: small;
margin-bottom: 6px;
/* color: #343737; */
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: none;
  display: flex;
  align-items: center;
}
.el-dropdown span{
  color: white;
}

.el-dropdown{
  --el-dropdown-menu-box-shadow:none;
  --el-dropdown-menuItem-hover-fill:none;
  --el-dropdown-menuItem-hover-color:none;
color: #007f99 !important;
outline: none;
}

.el-dropdown:hover{
  outline: none;
}
</style>