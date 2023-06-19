
<template>
    <div class="homeHeader" >
     <homeHeader/></div>
    <div class="h-[80vh]" >
        <div class="header">
            <img :src="img6">
            <div class="description">
                <h2>{{title}}</h2>
                <p>{{description1}}</p>
                <p>{{description2}}</p>
            </div>
            
        </div>
        <div class="show h-[30vh] font-bold">
            <div 
            class="card"
            v-for="platform in platforms" :key="platform.id"
            @click="clikplatform(platform)"
            >
                <img :src="platform.img" alt="">
                <div class="card-text h-fit">
                    <h3 class=" my-1" >{{ platform.text }}</h3>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="image">
                <img :src="img4" alt="">
                <img :src="img5" alt="">
            </div>
            <div class="text">
                <p>{{detail1}}</p><br>
                <div class="detail">
                    <span>{{details.d1}}</span>
                    <span>{{details.d2}}</span>
                    <span>{{details.d3}}</span>
                    <span>{{details.d4}}</span>
                    <span>{{details.d5}}</span>
                    <span>{{details.d6}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import homeHeader from "@/components/homeHeader.vue"
import { ref, reactive} from "vue"
import img1 from "@/assets/img/数据资源库@2x.png"
import img2 from "@/assets/img/工作台@2x.png"
import img3 from "@/assets/img/智能分析平台@2x.png"
import img4 from "@/assets/img/北京大学.png"
import img5 from "@/assets/img/英文字符.png"
import img6 from "@/assets/img/background1.png"
import et from '@/bus'
import { useRouter } from 'vue-router';
let router=useRouter()
const title = ref('国家脑疾病临床大数据平台')
const description1 = ref('国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，超共了数据存储、获取、展示、分析等一系列功能，方便科研人员开展脑疾病研究，促进脑疾病研究领域发展。')
const description2 = ref('国家脑疾病临床大数据平台下设数据资源库、工作台、智能分析平台，分别为科研人员提供脑疾病数据多维展示、脑疾病研究全流程管理、智能分析资源支持等功能。')
const detail1 = ref('Copyright 0 lnstitute of Softwa re, CAS. AII rights reserved.info(at)iscas.ac.cn')
const details = reactive({
    d1: '版权所有 0 中国科学院软件研究所',
    d2: '京 ℃ P 备 05046678 号一 1',
    d3: '文保网安备 1101080077',
    d4: '电话 ： 86 一 10 一 62661012',
    d5: '传真 ： 86 一 10 一 62562533',
    d6: '电子邮箱 ： info@iscas.ac.cn'
})

const platforms = reactive([
    {
        id: 1,
        pathname:'dataResource',
        img: img1,
        text: '数据资源库'
    }, 
    {
        id: 2,
        pathname:'workbench',
        img: img2,
        text: '工作台'
    },
    {
        id: 3,
        pathname:'intelligentPlatform',
        img: img3,
        text: '智能分析平台'
    }
])
const pic = reactive({
    one: img5,
    two: img6
})
let clikplatform=(e)=>{
console.log(e);
router.push({name:'dataResource'})
}

//处理所有页面的登录跳转
et.on('gologin',(e)=>{
router.push({name:'login'})
})

//处理个人注册页面跳转  注册页面默认为个人注册
et.on('goperRegister',(e)=>{
    console.log(2222);
    router.push({name:'perRegister'})
})

//处理机构注册页面跳转 
et.on('goorRegister',(e)=>{
    router.push({name:'orRegister'})
})

//处理忘记密码页面跳转
et.on('goforgetpass',(e)=>{
    router.push({name:'forgetpass'})
})

//处理忘记账号页面跳转
et.on('goforgetname',(e)=>{
    router.push({name:'forgetname'})
})

//返回首页
et.on('gohomepage',(e)=>{
    router.push({path:'/'})
})










</script>

<style lang="scss" scoped>  
.homeHeader{
    width: 100%;
    height: 8vh;
    padding: 0px;
    box-shadow:0px 2px 2px #5c5959 ;
    // box-shadow:0px 10px 10px #000000 ;
    max-height: 55px;
    position: relative;
    z-index: 1;
}
    .header {
        width: 100% !important;
        position: relative;
        margin-bottom: 30px;
        background: './background.png';
        img {   
            width: 100%;
            height: 36vh;
        }
        .description {
            position: absolute;
            color: white;
            top: 10%;
            left: 16%;
            width: 600px;
            font-size: 0.9rem;
        }
    }
    .show {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer {
        position: absolute;
            left: 0;
            right: 0;
           
            bottom: 0;
        background-color: #f0f2f5;
        width: 100%;
        font-size: 0.01px;
        margin-top: 30px;
        .text {
            text-align: center;
            color: #929597;
            padding: 1vh 0 1vh 0;
            
        }
        .detail {
            margin: -10px 0 2px 0;
            span {
                margin: -1px 10px;
            }
        }
        :deep(.image) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            margin-top: 2vh;
            height: 7vh;
            max-height: 50px;
            padding: 10px 30px;
        }
    }
    .card {
        width: 57vh;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
        border-radius: 2%;
        margin: 3px 10px;
        cursor: pointer;
        img {
            width: 100%;
            height: 25vh;
            margin: 0;
        }
        .card-text {
            text-align: center;
            font-size: 0.9rem;
        }

    }
</style>