<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'; 
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute();
const $router = useRouter()
const routerlink = (val) => {
    $router.push({path:val});
}
const needButton = reactive([0], [0], [0], [0]);
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

const teamData = reactive({
    organization: "XXXXXXXX大学",
    organizer: "zhangsan@email.com",
    coperate: ["zhangsan@email.com", "lisi@email.com", "wangwu@email.com"],
    organizationName: "XXXXXXXXX机构",
    header: "zhangxiaoyu@email.com"
})

const workerList = reactive([[teamData.coperate[0],teamData.coperate[1],teamData.coperate[2]],[teamData.coperate[0],teamData.coperate[1],teamData.coperate[2]]]);
const teamList = reactive([1,2]);
const addTeam = () => {
    const newDiv = `${ teamList.length + 1 }`
    teamList.push(newDiv) // 将新的div内容添加到divList数组中
    workerList.push([])
}
const killTeam = (index) => {
    teamList.splice(index, 1);
}

const word = reactive({w1: '',w2: '',w3: '',w4: '',w5: '',w6: '',w7:'',w8: '',w9: '',w10:''})
const extent = reactive({w1: '0',w2: '0',w3: '0',w4: '0',w5: '0',w6: '0',w7: '0',w8: '0',w9: '0',w10:'0'})
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

const settingButton = ref(0)

const fixedData = reactive({
    "创建时间": "2022-07-15",
    "状态": "未获批准",
    "快照提取ID": "38183",
    "快照中的项目数": "808",
    "快照最后更新的时间": "2022-08-15",
    "订单包含": "总计: 789个标准字段 (789个表格、0个遗传SNP、0个数据集) 和 0个批量字段 (0个批量、0个HES记录)",
}) 


const IsShow2 = reactive([0,0])  //速通着先
const showTeam = () => {
    IsShow2.push(0)
}


const IsSubmit = ref(0)

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

</script>

<template>
          <div class="applicationInfo">
            <div class="everyProject">
                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom: 3px solid #edeff2;">
                    <div>
                        <el-checkbox class="checkbox" v-model="needButton[0]" style="margin:1.5vh 2vw;margin-right: 1vw;" label="" name="123" size="large" /><label style="height:100%;font-weight:900;font-size:1.3vw;" for="123">新增数据字段</label>
                    </div>
                    <div>
                        <el-button class="buttonInfo" v-if="needButton[0]%2 == 1" style="margin-top:1vh;margin-right:3vw;" type="success" @click="addDiv()">创建数据订单</el-button>
                    </div>
                </div>
                <div class="orders" v-if="needButton[0]%2 == 1">
                    <div v-for="(item, index) in divList" :key="index" ref="divDom">
                        <div style="display:flex;align-items:center;margin:4vh 0 4vh 3vw;margin-top:3vh;margin-bottom:0;">
                            <div style="font-size: 10px;color:#afb1b3;padding:15px;line-height: 1vh;cursor:pointer;user-select:none;" :style="IsShow[index]%2 == 1?'rotate:90deg;color:#2a7c98':''" @click="IsShow[index]++">▶</div>
                            <div style="padding-right:30px;font-weight:900;font-size:18px;cursor:pointer;user-select:none;" @click="IsShow[index]++">订单编号 {{ item }}</div>
                            <div style="color:#2a7c98;" @click="routerlink('/')"><i class="iconfont">&#xe726;</i> 添加数据</div>
                            <el-button class="button" style="background-color:white;position:absolute;right:0;" @click="killDiv(index)"><i class="iconfont">&#xea16;</i> 删除订单</el-button>
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
                                    <el-button class="button" style="background-color:white;position:absolute;right:2vw;"><i class="iconfont">&#xe601;</i> 清空所选</el-button>
                                </div>
                                <div v-if="SubIsShow[index] % 2 == 1" style="width:100%;">
                                    测试
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="everyProject">
                <div style="text-align:left;border-bottom: 3px solid #edeff2;">
                    <el-checkbox class="checkbox" v-model="needButton[1]" style="margin:1.5vh 2vw;margin-right: 1vw;" label="" name="123" size="large" /><label style="height:100%;font-weight:900;font-size:1.3vw;" for="123">扩大研究范围</label>
                </div>
                <form action="" class="form" v-if="needButton[1]%2 == 1">
                    <div class="input">
                        <label for="name" class="subtitle">当前范围：</label>
                        <textarea class="textarea" maxlength="300" :placeholder="formData.projectBackGround" disabled></textarea>
                    </div>
                    <div class="special">
                        <div class="input">
                            <label for="name" class="subtitle" style="color:#000000">新的范围：</label>
                            <textarea class="textarea" maxlength="300" v-model="word.w8" placeholder="请输入文字"></textarea>
                            <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w8 }}</span><span>/</span><span>200</span></div>
                        </div>
                        <div class="input">
                            <label for="name" class="subtitle" style="color:#000000">理由：</label>
                            <textarea class="textarea" maxlength="300" v-model="word.w9" placeholder="请输入文字" ></textarea>
                            <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w9 }}</span><span>/</span><span>200</span></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="everyProject">
                <div style="text-align:left;border-bottom: 3px solid #edeff2;">
                    <el-checkbox class="checkbox" v-model="needButton[2]" style="margin:1.5vh 2vw;margin-right: 1vw;" label="" name="123" size="large" /><label style="height:100%;font-weight:900;font-size:1.3vw;" for="123">延长研究时限</label>
                </div>
                <form action="" class="form" v-if="needButton[2]%2 == 1">
                    <div style="margin:2vh 0;display:flex;">
                        <div>
                            <label for="name">当前时间：</label>
                            <br>
                            <div style="display:flex;align-items: center;">
                                <input type="text" class="inputSetting" style="width:11.1vw" :placeholder="formData.projectTime" disabled>
                                <p style="font-size:16px;color:grey;padding-left:18px;">个月</p>
                            </div>
                        </div>
                        <div style="margin-left: 8vw;">
                            <label for="name">预计截止时间：</label>
                            <br>
                            <div style="display:flex;align-items: center;">
                                <input type="text" class="inputSetting" style="width:11.1vw" placeholder="2025-8-17" disabled>
                                <p style="font-size:16px;color:grey;padding-left:18px;opacity:0">.</p>
                            </div>
                        </div>
                    </div>
                    <div style="margin:2vh 0;display:flex;">
                        <div>
                            <label for="name">延长时间：</label>
                            <br>
                            <div style="display:flex;align-items: center;">
                                <select class="select">
                                    <option value="36">36</option>
                                    <option value="24">24</option>
                                    <option value="12">12</option>
                                    <option value="6">6</option>
                                </select>
                                <p style="font-size:16px;color:grey;">个月</p>
                            </div>
                        </div>
                        <div style="margin-left: 8vw;">
                            <label for="name">预计截止时间：</label>
                            <br>
                            <div style="display:flex;align-items: center;">
                                <input type="text" class="inputSetting" style="width:11.1vw" placeholder="2026-8-17" disabled>
                                <p style="font-size:16px;color:grey;padding-left:18px;opacity:0">.</p>
                            </div>
                        </div>
                    </div>
                    <div class="special">
                        <div class="input">
                            <label for="name" class="subtitle" style="color:#000000">理由：</label>
                            <textarea class="textarea" maxlength="300" v-model="word.w10" placeholder="请输入文字" ></textarea>
                            <div style="text-align:right;color:#a3a5a5;font-size: 2px;"><span>{{ extent.w10 }}</span><span>/</span><span>200</span></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="everyProject" style="margin-bottom:10vh">
                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom: 3px solid #edeff2;">
                    <div>
                        <el-checkbox class="checkbox" v-model="needButton[3]" style="margin:1.5vh 2vw;margin-right: 1vw;" label="" name="123" size="large" /><label style="height:100%;font-weight:900;font-size:1.3vw;" for="123">更新团队信息</label>
                    </div>
                    <div>
                        <el-button class="buttonInfo" v-if="needButton[3]%2 == 1" style="margin-top:1vh;margin-right:3vw;width:5vw" type="success" @click="settingButton++">编辑</el-button>
                    </div>
                </div>
                <div v-if="needButton[3]%2 == 1" style="padding-bottom:5vh">
                    <div v-for="(item, index) in teamList" :key="index" ref="divDom" >
                        <div class="everyProject" >
                            <div style="display:flex;align-items:center;margin:4vh 0 4vh 3vw;margin-top:3vh;margin-bottom:0;">
                                <div style="font-size: 10px;color:#afb1b3;padding:15px;line-height: 1vh;cursor:pointer;user-select:none;" :style="IsShow2[index]%2 == 1?'rotate:90deg;color:#2a7c98':''" @click="IsShow2[index]++">▶</div>
                                <div style="padding-right:30px;font-weight:900;font-size:18px;cursor:pointer;user-select:none;">团队{{ item }}</div>
                                <el-button class="button" v-if="settingButton%2 == 1" style="background-color:white;position:absolute;right:1.1vw;" @click="killTeam(index)"><i class="iconfont">&#xea16;</i> 删除订单</el-button>
                            </div>
                            <div v-if="IsShow2[index]%2 == 1">
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
                                                    <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organization :disabled="settingButton%2 == 0">   
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
                                                    <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organizer :disabled="settingButton%2 == 0">   
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="width:12%;margin-right:1vw"></div>
                                            <div style="position: relative;width:33vw;display:flex;margin-top:2.5vh; justify-content: end;white-space: nowrap;" v-for="(item, index) in workerList[index]" :key="index">
                                                <div>合作者：</div>
                                                <div>
                                                    <div style="display:flex;">
                                                    <input type="text" class="select" style="height:24px;width:24vw" :placeholder=item :disabled="settingButton%2 == 0">   
                                                    </div>
                                                </div>
                                                <div class="coworkerAfter">
                                                    <el-checkbox v-if="index == 0" class="checkbox" label="代表" size="large" checked :disabled="settingButton%2 == 0"/>
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
                                                    <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.organizationName :disabled="settingButton%2 == 0">   
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="width:33vw;display:flex;margin-top:2.5vh;margin-bottom:2.5vh;justify-content: end;white-space: nowrap;">
                                                <div>机构联系人：</div>
                                                <div>
                                                    <div style="display:flex;">
                                                        <div style="display:flex;">
                                                            <input type="text" class="select" style="height:24px;width:24vw" :placeholder=teamData.header :disabled="settingButton%2 == 0">   
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
                <div class="submitButton">
                    <el-button class="buttonGreen" type="success" @click="IsSubmit++">提交</el-button>
                    <el-button class="buttonGrey" type="success">保存草稿</el-button>
                </div>  
                <div v-if="IsSubmit % 2 == 1" class="All">
                    <div class="Middle">
                        <div style="display:flex;justify-content: space-between;align-items: center;margin:1.5vh 1.2vw;font-size:18px;user-select:none;">
                            <div style="font-weight:900">提示</div>
                            <div style="font-size:22px;color:#c8c8cb;cursor:pointer;" @click="IsSubmit++">×</div>
                        </div>
                        <div style="display:flex;align-items: center;margin:1.5vh 1.2vw 3vh;font-size:15px;user-select:none;">
                            <div><i class="iconfont" style="color:#e0a310;font-size:30px;padding:10px">&#xe62f;</i></div>
                            <div>提交后不可修改，确认要提交吗？</div>
                        </div>
                        <div style="border-top:1px solid #e1e3e6;text-align:right;height">
                            <el-button class="buttonGrey" style="margin:10px;width:60px;"  type="success" @click="IsSubmit++">取消</el-button>
                            <el-button class="buttonGreen" style="margin:0;margin-right:20px;width:60px;" type="success" @click="IsSubmit++">提交</el-button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
</template>


<style scoped>
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

    .subtitle {
        color:#969696;
    }

    .form {
        user-select: none;
        font-size: 85%;
        text-align: left;
        margin: 0 2.8% 0 3%;
    }
    .All {
        position: fixed;
        top: -8vh;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 108vh;
        background-color: rgba(0,0,0,0.1);
        z-index: 999;
    }

    .Middle {
        background-color: #fff;
        width: 420px;
        height: auto;
        border-radius: 5px;
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

    .submitButton {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8%;
        background-color: #fff;
        box-shadow: 0 -3px 5px rgba(0,0,0,0.1);
        border-radius: 3px; 
    }


    .buttonGreen {
        width: 125px;
        height: 34px;
        background-color: #2a7c98;
        border: 0;
        margin: 2.5vh 1vw 0 15vw;
    }

    .buttonGreen:active {
        background-color: #1b5265;
    }

    .buttonGrey {
        width: 125px;
        height: 34px;
        margin: 2.5vh 1vw 0 1vw;
        background-color:#fff;
        border:1px solid #d5d7d8;
        color:#565b5c;
    }

    .buttonGrey:active {
        background-color: #c0c0c0;
    }


    .applicationInfo {
        display: flex;
        flex-direction: column;
    }

    .everyProject {
        background-color: #ffffff;
        padding-top: .8vh;
        margin-top: 3vh;
        margin-left: 2.5%;
        width: 95%;
    }
    
    ::v-deep .buttonInfo {
        width: 125px;
        height: 40px;
        background-color: #2a7c98;
        border: 0;
        margin: 2.5vh 1vw 0 15vw;
    }

    .buttonInfo:active {
        background-color: #1b5265;
    }

    .coworkerAfter ::v-deep .checkbox {
        color: #000000;
        background-color: #fff;
    }

    .orders {
        position: relative;
        width: 97.6%;
    }
    .concreteDiv {
        border: 2px solid #eaebed;
        margin: 1vh 2.5vw 0 5.5vw;
        width: auto;
        height: auto;
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
        min-width: 80px;
        text-align: right;
    }

    .data {
        text-align: left;
        margin-left: 1.5vw;
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
        min-width: 140px;
    }


    .button {
        width: 125px;
        height: 34px;
        background-color: #2a7c98;
        border: 0;
        margin: 0 1vw 0 3vw;
    }

    .button:active {
        background-color: #1b5265;
    }

    .input {
        display: flex;
        flex-direction: column;
        padding: 1.5vh 0;
    }

    .inputSetting {
        font-size: 85%;
        border: 2px solid #d6d8d9;
        border-radius: 5px;
        padding: 10px;
    }

   .special  ::-webkit-input-placeholder { /* Edge */
        color: #c8cccd;
    }
    
    ::-webkit-input-placeholder { /* Edge */
        color: #000000;
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

    .select {
        border:2px solid #c8cbcc;
        border-radius: 5px;
        width: 12.5vw;
        height: 38px;
        padding: 5px;
        margin-right: 20px;
        color:grey;  
    }
    
    .select::placeholder {
        padding: 5px;
        color:grey;
    }

</style>