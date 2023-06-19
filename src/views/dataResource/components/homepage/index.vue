<script setup>
import img1 from "@/assets/img/symbol1.png"
import img2 from "@/assets/img/symbol2.png"
import img3 from "@/assets/img/symbol3.png"
import img4 from "@/assets/img/symbol4.png"
import  et  from "@/bus";
// import { useRoute } from 'vue-router';
// let route=useRoute()
const data = [{
    header: "数据浏览",
    text: "通过根据数据项的来源类别查找数据项",
    img: img1,
    pathname:'Browsehomepage'
}, {
    header: "数据搜索",
    text: "通过搜索关键字和其他特征来查找数据项",
    img: img2,
    pathname:'datasearch'
}, {
    header: "用户须知",
    text: "数据接入和发布相关信息",
    img: img3,
    pathname:'userNotice'
},{
    header: "工具下载",
    text: "下载相关工具",
    img: img4,
    pathname:'tools'
}]
let clickenter=(e)=>{
    et.emit('enter',e)
}
</script>
<template>
        <div class="show">
            <div class=" w-[50%] pl-[20%] h-full flex flex-col justify-center">
                <span class=" font-semibold  text-[2.5vw] min-[500px]:text-[2vw] mb-4" >数据资源馆</span>
                <p class=" text-xs w-fit  min-[1300px]:text-base"  >国家脑疾病临床大数据平台收录了海量脑疾病相关数据，数据资源馆从多个维度对脑疾病数据进行展示，并提供数据检索等相关功能，方便科研人员了解数据详情，从海量数据资源中快速选择完成相应研究所须的数据内容。</p>
            </div>
        </div>
       <div class="routerSelector">
            <div class="dataitems" v-for="(item,index) in data" :key="index">
                <div class="symbol">
                    <img :src=" item.img ">
                </div>
                <div class="text mt-3">
                    <span class=" font-bold text-lg min-[1300px]:text-[1.5vw]" >{{ item.header }}</span>
                    <p  >{{ item.text }}</p>
                         <el-button @click="clickenter(item.pathname)" size="small" color="#007f99" >立即进入</el-button>
                </div>
            </div>
       </div>
</template>
<style scoped>
.show {
    height: 42vh;
    width: 100%;
    background-image: url(@/assets/img/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
}

.show img {
    height: 100%;
}
.dataitems {
    display: flex;
    height: 120px;
    border: 1px solid #ebebeb;
    margin: 1vh 0.5vw;
    flex: 0 0 43%;
    min-width: 400px;
}

.dataitems:hover {
    border: 1px solid #007f99;
    background-color: #f2f8fa;
}

.dataitems:hover header {
    color: #007f99
}

.routerSelector {
    position: absolute;

    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: center;
    width: 80%;
    margin: 3vh 10% 0 10%;
}

.symbol img {
    padding-top: 15px;
    padding-right: 20px;
    margin-left: 25px;
    
}

.text {
    text-align: left;
    
}

.routerSelector header {
    font-size: 22px;
    padding-top: 20px;
}

.routerSelector p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 8px;
    font-size: 14px;
}

.routerGo{
    width: 90px;
    height: 30px;
    color: #fff;
    background-color: #007f99;
    text-align: center;
    line-height: 180%;
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
}

</style>