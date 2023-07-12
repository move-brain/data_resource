<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'; 
import minDataPart from './DataPart.vue';
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute();
const $router = useRouter()
const routerlink = (val) => {
    $router.push({path:val});
}
const formData = reactive({
    projectName: "脑疾病研究",
    projectAim: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。",
    projectBackGround: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为",
    projectIntroduction: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为",
    projectSize: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。",
    projectValue: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。",
    projectInfluence: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为***功能，国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台。",
    projectWords: ["关键词关键词", "关键词关键词", "关键词关键词关键词关键词", "关键词", "关键词关键词关键词关键词", "关键词"],
    projectChoice: "是",
    projectChoiceText: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展，下设数据资源库、工作台、智能分析平台，分别为",
    projectTime: "36"
})
const word = reactive({w1: '',w2: '',w3: '',w4: '',w5: '',w6: '',w7:'',w8: '',w9: '',w10:''})
const extent = reactive({ w1: '0', w2: '0', w3: '0', w4: '0', w5: '0', w6: '0', w7: '0', w8: '0', w9: '0', w10: '0' })
const tableNum = ref("0");
const SNPNum = ref('0');
const DataPlusNum = ref('0');
const dataNum1 = ref(parseInt(tableNum.value) + parseInt(SNPNum.value) + parseInt(DataPlusNum.value));

const lotNum = ref('0');
const HESNum = ref('0')
const dataNum2 = ref(parseInt(lotNum.value) + parseInt(HESNum.value));

const tableShow = ref("formData.projectChoice == '是'");

const fixedData = reactive({
    "创建时间": "2022-07-15",
    "状态": "未获批准",
    "快照提取ID": "38183",
    "快照中的项目数": "808",
    "快照最后更新的时间": "2022-08-15",
    "订单包含": "总计: 789个标准字段 (789个表格、0个遗传SNP、0个数据集) 和 0个批量字段 (0个批量、0个HES记录)",
}) 

watch(word, () => {
    extent.w1 = word.w1.length,
    extent.w2 = word.w2.length,
    extent.w3 = word.w3.length,
    extent.w4 = word.w4.length,
    extent.w5 = word.w5.length,
    extent.w6 = word.w6.length,
    extent.w7 = word.w7.length,
    extent.w8 = word.w8.length,
    extent.w9 = word.w9.length,
    extent.w10 = word.w10.length
})

const divList = reactive([`${ 4000000 }`]) // 维护一个响应式数组，用来存放添加的div元素
const IsShow = reactive([0])  //控制是否展示信息(大)
const SubIsShow = reactive([0])  //控制是否展示信息(小) （但是这个还没有完全做好，需要和数据绑定）
const addDiv = () => {
    const newDiv = `${ 4000000 }`; // 不知道编号是怎么计算的，此处这样做
    divList.push(newDiv) // 将新的div内容添加到divList数组中
    IsShow.push(0)
}

const killDiv = (index) => {
    divList.splice(index, 1);
    IsShow.splice(index, 1);
}




</script>

<template>
    <div class="main">
        <div class="applicationInfo">
            <div class="everyProject">
                <h4 class="subTitle"><p>申请信息</p><div class="onlineHelp" @click="routerlink('/')"><i class="iconfont">&#xe60c;</i>在线帮助</div></h4>
                <form action="" class="form">
                    <div class="input">
                        <label for="name" class="subtitle">项目名称：</label>
                        <input type="text" class="inputSetting" :placeholder="formData.projectName" disabled>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">项目问题和目标：</label>
                        <textarea class="textarea" v-model="word.w1" maxlength="200" :placeholder="formData.projectAim" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;">{{ extent.w1 }}/200</div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">项目背景与科学原理：</label>
                        <textarea class="textarea" maxlength="300" v-model="word.w2" :placeholder="formData.projectBackGround" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w2 }}</span><span>/</span><span>300</span></div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">使用方法说明：</label>
                        <textarea class="textarea" maxlength="300" v-model="word.w3" :placeholder="formData.projectIntroduction" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w3 }}</span><span>/</span><span>300</span></div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">所需数据集的类型和大小：</label>
                        <textarea class="textarea" maxlength="100" v-model="word.w4" :placeholder="formData.projectSize" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w4 }}</span><span>/</span><span>100</span></div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">研究的预期价值：</label>
                        <textarea class="textarea" maxlength="100" v-model="word.w5"  :placeholder="formData.projectValue" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w5 }}</span><span>/</span><span>100</span></div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">项目关键字：</label>
                        <div style=" display: flex;width: 100%;justify-content: space-between;">
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[0]" disabled>
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[1]" disabled>
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[2]" disabled>
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[3]" disabled>
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[4]" disabled>
                            <input type="textarea" class="inputSettingPlus" :placeholder="formData.projectWords[5]" disabled>
                        </div>
                        
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">简述项目摘要，说明目标、科学原理、项目持续时间和公共卫生影响：</label>
                        <textarea class="textarea" maxlength="100" v-model="word.w6" :placeholder="formData.projectInfluence" disabled></textarea>
                        <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w6 }}</span><span>/</span><span>100</span></div>
                    </div>
                    <div class="input">
                        <label for="name" class="subtitle">项目是否会产生从现有复杂数据集衍生的任何新数据字段：</label>
                        <div class="radio">
                            {{ formData.projectChoice }}
                        </div>
                        <div v-if="tableShow" class="textareaBorder">
                            <label for="name" style="margin-left:1%" class="subtitle">如果是，请概述您打算生成的变量：</label>
                            <textarea style="font-size: 85%;border: 2px solid #d6d8d9;border-radius: 5px;padding: 10px;height: 80px;min-width: 96%;max-width: 96%;margin-left:1%" maxlength="100" v-model="word.w7" :placeholder="formData.projectChoiceText" disabled></textarea>
                            <div style="text-align:right;color:#a3a5a5;font-size: 2px; margin-right:1.5%;"><span>{{ extent.w7 }}</span><span>/</span><span>100</span></div>
                        </div>
                        <div style="margin:2vh 0;">
                            <label for="name">项目预计持续时间：</label>
                            <br>
                            <div style="display:flex;align-items: center;">
                                <input type="text" class="inputSetting" :placeholder="formData.projectTime" disabled>
                                <p style="font-size:16px;color:grey;">个月</p>
                            </div>
                        </div>
                        <div class="textareaBorder">
                            <p style="margin-top:0;">请注意，您应该发布或公开您的结果并返回国家脑疾病临床大数据平台：<br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;任何重要的派生变量；<br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;用于生成它们的方法的描述；<br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;用于生成论文主要结果的底层语法/代码；<br>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;一个简短的外行描述，总结发现。<br>这些应在每次出版后的6个月内或项目结束日期后12个月内提供（以先到者为准）。您在出版前至少提前两周向我们发送一份您已接受的手稿副本，并提醒我们是否存在与调查结果相关的任何道德或争议问题。</p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="everyProject" style="padding-bottom:10vh">
                <h4 class="subTitle"><p>数据字段选择</p><div class="onlineHelp" @click="routerlink('/')"><i class="iconfont">&#xe60c;</i>在线帮助</div></h4>
                <div style="text-align:left;display:flex;align-items:center;margin-left:3vw;">
                    <div style="color:#515556;">总计: {{ dataNum1 }}个标准字段 ({{ tableNum }}个表格、{{ SNPNum }}个遗传SNP、{{ DataPlusNum }}个数据集) 和 {{ dataNum2 }}个批量字段 ({{ lotNum }}个批量、{{ HESNum }}个HES记录)</div>
                </div>
                <div class="orders">
                    <div v-for="(item, index) in divList" :key="index" ref="divDom">
                        <div style="display:flex;align-items:center;margin:4vh 0 4vh 3vw;margin-top:3vh;margin-bottom:0;">
                            <div style="font-size: 10px;color:#afb1b3;padding:15px;line-height: 1vh;cursor:pointer;user-select:none;" :style="IsShow[index]%2 == 1?'rotate:90deg;color:#2a7c98':''" @click="IsShow[index]++">▶</div>
                            <div style="padding-right:30px;font-weight:900;font-size:18px;cursor:pointer;user-select:none;" @click="IsShow[index]++">订单编号 {{ item }}</div>
                        </div>
                        <div v-if="IsShow[index]%2 == 1" class="concreteDiv">
                            <div class="concreteDivHeader">
                                <div class="text" v-for="(i,index,z) in fixedData" :key="z">
                                    <div class="datades">{{ index }}</div>
                                    <div class="data">{{ i }}</div>
                                </div>
                            </div>
                            <div>
                                <div style="display:flex;align-items:center;margin:4vh 0 4vh .1vw;margin-top:.5vh;margin-bottom:0;">
                                    <div style="font-size: 10px;color:#afb1b3;padding:15px;line-height: 1vh;cursor:pointer;user-select:none;" :style="SubIsShow[index]%2 == 1?'rotate:90deg;':''" @click="SubIsShow[index]++">▶</div>
                                    <div style="padding-right:30px;font-size:14px;cursor:pointer;user-select:none;" @click="SubIsShow[index]++">传染性疾病</div>
                                </div>
                                <div v-if="SubIsShow[index] % 2 == 1" style="width:100%;">
                                    <minDataPart style="width:98%;padding-left: 1.5vw;"></minDataPart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>


<style scoped>

.everyProject {
        background-color: #ffffff;
        padding-top: .8vh;
        padding-bottom: .8vh;
        margin-top: 3vh;
        margin-left: 2.5%;
        width: 95%;
        min-width: 1000px;
    }


    @font-face {
        font-family: 'iconfont';  /* Project id 4105675 */
        src: url('//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.woff2?t=1686382529151') format('woff2'),
            url('//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.woff?t=1686382529151') format('woff'),
            url('//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.ttf?t=1686382529151') format('truetype');
    }

    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .main {
        width: 100%;
        height: 100%;
        background-color: #f0f2f5;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
    }
    .textarea {
        font-size: 85%;
        border: 2px solid #d6d8d9;
        border-radius: 5px;
        padding: 10px;
        height: 80px;
        min-width: 98.5%;
        max-width: 98.5%;
        
    }
    .input {
        display: flex;
        flex-direction: column;
        padding: 1.5vh 0;
    }
    .subtitle {
        color:#969696;
    }
    .form {
        user-select: none;
        font-size: 85%;
        text-align: left;
        margin: 0 2.8% 0 3%;
    }
    .applicationInfo {
        display: flex;
        flex-direction: column;
    }
    .inputSettingPlus {
        width: 14%;
        font-size: 85%;
        border: 2px solid #d6d8d9;
        border-radius: 5px;
        padding: 10px;
    }
    .textareaBorder {
        display: flex;
        flex-direction: column;
        background-color: #f7f9fc;
        padding: 30px;
        height: 140px;
        max-width: 96%;
        margin-bottom: 4vh;
    }

    .concreteDiv {
        border: 2px solid #eaebed;
        margin: 1vh 2.5vw 0 5.5vw;
        width: auto;
        height: auto;
        min-width: 900px;
    }

    .concreteDivHeader {
        background-color: #f7f9fc;
        width: 100%;
        height: 100%;
        background-color: #f5f7fa;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        min-width: 900px;
    }

    .text {
        font-size: 2px;
        width: auto;
        flex:0 0 25%;
        margin-top: 1.25vh;
        margin-bottom: 1.25vh;
        padding: 0;
        display: flex;
        align-items: center;
        white-space:nowrap;
    }


    .datades {
        color:#969696;
        width: 8vw;
        min-width: 100px;
        text-align: right;
    }

    .data {
        text-align: left;
        margin-left: 1.5vw;
        min-width: 100px;
    }

    
    .radio {
        margin: 15px 40px 10px 0;
        
    }

    .orders {
        position: relative;
        width: 97.6%;

    }

    
    .inputSetting {
        font-size: 85%;
        border: 2px solid #d6d8d9;
        border-radius: 5px;
        padding: 10px;
    }
    
    .subTitle {
        display: flex;
        justify-content: space-between;
        text-align: left;
        margin: 2.5vh 2vw;
    }

    .subTitle p {
        margin: 0;
    }

    .onlineHelp {
        text-align: right;
        color:#257d99;
        font-weight: 100;
    }
</style>