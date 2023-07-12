<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick ,computed,watch } from 'vue'; 
const tablelength = ref("")
const length = reactive({})
onMounted(() => {
    getWidth();
    window.addEventListener('resize',getWidth);
}),
onUnmounted(() => {
    window.removeEventListener('resize',getWidth);
});
const getWidth = () => {
    nextTick(() => {
        length.w1 = tablelength.value.clientWidth * 0.12;
        length.w2 = tablelength.value.clientWidth * 0.21;
        length.w3 = tablelength.value.clientWidth * 0.152;
        length.w4 = tablelength.value.clientWidth * 0.147;
        length.w5 = tablelength.value.clientWidth * 0.185;
        length.w7 = tablelength.value.clientWidth * 0.01;
    });
};

const minData = [{
    dataID: 49957,
    topic: 4001485,
    role: "初始数据发布",
    status: "718MB",
    date: "2022-07-15",
    control: ""
},{
    dataID: 47288,
    topic: 4002396,
    role: "附加数据",
    status: "956MB",
    date: "2022-08-15",
    control: "",
},{
    dataID: 45633,
    topic: 2017426,
    role: "新增数据",
    status: "96MB",
    date: "2022-08-17",
    control: ""
}]

const props = defineProps({
    minData: {
        type: Array
    }
})

let searchNum = ref(0);
let pushView = ref(0);
const LookingIndex = (val) => {
    
    pushView.value++;
    searchNum.value = val;
    return {
        pushView,
        searchNum
    }
}
const scrollHeight = ref(0);

const handleScroll = () => {
  scrollHeight.value = document.documentElement.scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const fixedData = reactive({
    "创建时间": "2022-07-15",
    "状态": "未获批准",
    "快照提取ID": "38183",
    "快照中的项目数": "808",
    "快照最后更新的时间": "2022-08-15",
    "订单包含": "总计: 789个标准字段 (789个表格、0个遗传SNP、0个数据集) 和 0个批量字段 (0个批量、0个HES记录)",
}) 

const IDList = ["加速度计校准","加速度计磨损持续时间","传染性疾病","男性特异性因素","符号数字替换","T1结构脑MRI","女性特异性因素"]
const SubShow = reactive([0,0,0,0,0,0,0]) 
</script>

<template>
    <div class="applicationInfo">
            <div class="everyProject">
                <h4 class="subTitle"><p>数据下载</p></h4>
                <div ref="tablelength" id="minData" style="width:96%;padding-left:2%">
                    <el-table id="Statistics" :data="minData" style="width: 100%">
                        <el-table-column prop="dataID" label="ID" :width="length.w1" />
                        <el-table-column prop="topic" label="数据订单编号" :width="length.w2"/>
                        <el-table-column prop="role" label="描述" :width="length.w3" />
                        <el-table-column label-class-name="dataStatusTop" class-name="dataStatus" prop="status" label="大小" :width="length.w4" />
                        <el-table-column prop="date" label="发布日期" :width="length.w5" />
                        <el-table-column prop="control" label="操作" :width="length.w6" >
                            <template v-slot="scope">
                                <div class="control" @click="LookingIndex(scope.$index)">查看</div>
                                <div class="control">下载</div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="push" ref="push" v-if="pushView %2 == 1">
                    <div style="position:relative;height:100vh;">
                        <div class="movePadding" :style="{ height: 55 - scrollHeight + 'px' }"></div>
                        <div class="pushTitle">
                            <p style="font-size:1.1vw;font-weight:900;margin-left:1.5vw">订单编号 {{ minData[searchNum].topic }}</p>
                            <div @click="pushView=0" style="font-size:2vw;font-weight:500;margin-right:1.5vw;color: #c3c4c7;cursor:pointer;">×</div>  
                        </div>
                        <div class="everyProject">
                            <div class="newConcreteDivHeader">
                                <div class="newText" v-for="(i,index,z) in fixedData" :key="z">
                                    <div class="newDatades">{{ index }}</div>
                                    <div class="newData">{{ i }}</div>
                                </div>
                            </div>
                            <div v-for="(item, index) in IDList" :key="index" ref="divDom">
                                <div>
                                    <div style="display:flex;align-items:center;margin:4vh 0 4vh .1vw;margin-top:.5vh;margin-bottom:0;">
                                        <div style="font-size: 10px;color:#afb1b3;padding:15px;line-height: 1vh;cursor:pointer;user-select:none;" :style="SubShow[index]%2 == 1?'rotate:90deg;':''" @click="SubShow[index]++">▶</div>
                                        <div style="padding-right:30px;font-size:14px;cursor:pointer;user-select:none;" @click="SubShow[index]++">{{ item }}</div>
                                    </div>
                                    <div v-if="SubShow[index] % 2 == 1" style="width:100%;">
                                        测试
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
::v-deep .control {
        width: 3vw;
        color: #6686ea;
        user-select: none;
        cursor: pointer;
        padding-right: 1vw;
        margin: 0;
    }

    .control:active {
        color: #4f68b6;
    }

    .applicationInfo {
        display: flex;
        flex-direction: column;
    }

    .everyProject {
        background-color: #ffffff;
        padding-top: .8vh;
        padding-bottom: .8vh;
        margin-top: 3vh;
        margin-left: 2.5%;
        width: 95%;
        min-width: 950px;
    }
    .subtitle {
        color:#969696;
    }

    #minData {
        width: 100%;
    }

    #minData ::v-deep th{
        background-color: #f0f1f5;
        color:black;
        font-size: .9vw;
        height: 4.8vh;
        padding-left: 3.4vw;
    }

    #minData ::v-deep td {
        height: 4.8vh;
        padding-left: 3.45vw;
        font-size: .75vw;
    }

    #minData ::v-deep tr:hover>td {
    background-color: #ebf4f7;
    }

    ::v-deep #Statistics {
        user-select: none;
    }

    .push {
    position: fixed;  
    z-index: 3;
    width: 28vw;
    background-color: #ffffff;
    right: 0;
    top: 0;
    height: 100%;
    box-shadow: -2px -2px 10px rgba(77, 87, 109, 0.3);
    overflow: scroll;  
  }

  .movePadding {
    min-height: 0;
    max-height: 55px;
  }

 
  .newConcreteDivHeader {
        background-color: #f7f9fc;
        width: auto;
        height: auto;
        background-color: #f5f7fa;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }


  .pushTitle {
    border-bottom: 1px solid #e4e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;  
  }

  .newText {
        font-size: 2px;
        width: auto;
        flex:0 0 44%;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 1.5vw;
        margin-top: 1.25vh;
        margin-bottom: 1.25vh;
    }


    .newDatades {
        color:#969696;
        width: 8vw;
        text-align: left;
    }

    .newData {
        text-align: left;
    }

    ::v-deep .cell {
        display: flex;
    }

    .subTitle p {
        margin: 0;
    }

    .subTitle {
        display: flex;
        justify-content: space-between;
        text-align: left;
        margin: 2.5vh 2vw;
    }
</style>