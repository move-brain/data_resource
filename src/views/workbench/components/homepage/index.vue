<template>
    <div class="w-full  h-[33%] bg-use 2xl:h-[25%] pb-[8vh] " style="min-height: fit-content;"  >
    <div class="ml-[4.7vw] pt-[3vh]  flex flex-col">
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
    <div><svgicon style=" cursor: pointer; width: 45%;" color="#ffffff"  iconName="icon-tongjitu"   ></svgicon><span>数据展示</span></div>
    <div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-morentouxiang"   ></svgicon><span>用户中心</span></div>
    <div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-gouwuche"   ></svgicon><span>购物车</span></div>
    <div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-naoling"   ></svgicon><span>消息中心</span></div>
    <div><svgicon style=" cursor: pointer; width: 45%;"   iconName="icon-wangzhanzidingyixinxizhanshi"   ></svgicon><span>门户网站</span></div>
    <div><svgicon style=" cursor: pointer; width: 45%;"  iconName="icon-shujuku"   ></svgicon><span>数据资源库</span></div>
    </div>
    </div>
    </template>
    <script setup >
    import {ref} from 'vue'
    let username=ref("admin")
    import {useRouter} from 'vue-router'
let router=useRouter()
    let clickgowuche=()=>{
        router.push({name:"gowuche"})
    }


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