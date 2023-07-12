<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'; 
const teamData = reactive({
    organization: "XXXXXXXX大学",
    organizer: "zhangsan@email.com",
    coperate: ["zhangsan@email.com", "lisi@email.com", "wangwu@email.com"],
    organizationName: "XXXXXXXXX机构",
    header: "zhangxiaoyu@email.com"
})
const teamList = reactive([1,2]);
const addTeam = () => {
    const newDiv = `${ teamList.length + 1 }`
    teamList.push(newDiv) // 将新的div内容添加到divList数组中
    workerList.push([])
}
const killTeam = (index) => {
    teamList.splice(index, 1);
}
const workerList = reactive([[teamData.coperate[0],teamData.coperate[1],teamData.coperate[2]],[teamData.coperate[0],teamData.coperate[1],teamData.coperate[2]]]);
const addWorker = (index) => {
    const newDiv = `${ workerList[index].length + 1 }`
    workerList[index].push(newDiv) // 将新的div内容添加到divList数组中
}
const killWorker = (index) => {
    workerList[index].splice(index, 1);
}
</script>

<template>
    <div class="applicationInfo" style="align-items: center;">
            <div style="width: 97.6%;margin-bottom:10vh;">
                <div v-for="(item, index) in teamList" :key="index" ref="divDom">
                    <div class="everyProject">
                        <div style="display:flex;align-items:center;margin:4vh 0 4vh 3vw;margin-top:3vh;margin-bottom:0;">
                            <div style="padding-right:30px;font-weight:900;font-size:18px;cursor:pointer;user-select:none;">团队{{ item }}</div>
                        </div>
                        <div>
                            <div class="allTable">
                                <div class="selectTable">
                                    <div class="tableLeft">
                                        选择机构
                                    </div>
                                    <div style="margin-left:5vw;">
                                        <div style="width:33vw;display:flex; justify-content: end;white-space: nowrap;">
                                            <div>研究机构：</div>
                                            <div>
                                                <div style="display:flex;">
                                                   <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organization disabled>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="width:12%;margin-right:1vw"></div>
                                </div>
                                <div class="selectTable">
                                    <div class="tableLeft">
                                        人员配置
                                    </div>
                                    <div style="margin-left:5vw;">
                                        <div style="width:33vw;display:flex; justify-content: end;white-space: nowrap;">
                                            <div>首席研究员：</div>
                                            <div>
                                                <div style="display:flex;">
                                                   <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organizer disabled>   
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width:12%;margin-right:1vw"></div>
                                        <div style="position: relative;width:33vw;display:flex;margin-top:2.5vh; justify-content: end;white-space: nowrap;" v-for="(item, index) in workerList[index]" :key="index">
                                            <div>合作者：</div>
                                            <div>
                                                <div style="display:flex;">
                                                   <input type="text" class="select" style="height:24px;width:24vw" :placeholder=item disabled>   
                                                </div>
                                            </div>
                                            <div class="coworkerAfter">
                                                <el-checkbox v-if="index == 0" class="checkbox" label="代表" size="large" checked disabled/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div style="width:12%;margin-right:1vw"></div>
                                </div>
                                <div class="selectTable">
                                    <div class="tableLeft">
                                        材料转让协议信息
                                    </div>
                                    <div style="margin-left:5vw;">
                                        <div style="width:33vw;display:flex;justify-content: end;white-space: nowrap;">
                                            <div>机构官方名称：</div>
                                            <div>
                                                <div style="display:flex;">
                                                   <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organizationName disabled>   
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width:33vw;display:flex;margin-top:2.5vh;margin-bottom:2.5vh;justify-content: end;white-space: nowrap;">
                                            <div>机构联系人：</div>
                                            <div>
                                                <div style="display:flex;">
                                                    <div style="display:flex;">
                                                        <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.header disabled>   
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="width:12%;margin-right:1vw"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
        </div>  
</template>

<style scoped>
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
    }

    .coworkerAfter ::v-deep .checkbox {
        color: #000000;
        background-color: #fff;
    }

    .coworkerAfter {
        position: absolute;
        right: -8vw;
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .select {
        border:2px solid #c8cbcc;
        border-radius: 5px;
        width: 12.5vw;
        height: 38px;
        padding: 5px;
        margin-right: 20px;
        color:grey;  
    }

    .allTable {
        display: flex;
        flex-direction: column;
        
        align-items: center;
    }

    .selectTable {
        margin-top: 5vh;
        width: 55vw;
        display: flex;
        text-align: right;
    }

    .tableLeft {
        width: 10vw;
        font-weight: 900;
        height: 3vh;
        padding-left: .5vw;
        text-align: left;
        border-left:5px solid #007f99;
    }

</style>