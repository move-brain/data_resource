<template>
  <div id="body">
    <div id="sideNavigationBar">
      <div>本页目录</div>
      <ul> 
        <li id="lidata" @click="getTop(1)">{{ tit.data }}</li>
        <li id="licomment" @click="getTop(2)">{{ tit.comment }}</li>
        <li id="liclass" @click="getTop(3)">{{ tit.class }}</li>
        <li id="limin" @click="getTop(4)">{{ tit.min }}</li>
      </ul>
    </div>
    <header>
        <h1>{{ dataDeclaration.title }}</h1>
        <p>
          <span class="datades">{{ fixedData.describe }}</span>
          <span class="data">{{ dataDeclaration.describe }}</span>
        </p>
        <p>
          <span class="datades">{{ fixedData.type }}</span>
          <span class="data" id="bread"><breadcrumb/></span>
        </p>
        
    </header>
    <div id="information">
      <div class="text">
        <span class="datades">{{ fixedData.participant }}</span>
        <span class="data">{{ dataDeclaration.participant }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.valueType }}</span>
        <span class="data">{{ dataDeclaration.valueType }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.sex }}</span>
        <span class="data">{{ dataDeclaration.sex }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.issueDate }}</span>
        <span class="data">{{ dataDeclaration.issueDate }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.numericValue }}</span>
        <span class="data">{{ dataDeclaration.numericValue }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.dataType }}</span>
        <span class="data">{{ dataDeclaration.dataType }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.example }}</span>
        <span class="data">{{ dataDeclaration.example }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.versionDate }}</span>
        <span class="data">{{ dataDeclaration.versionDate }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.stability }}</span>
        <span class="data">{{ dataDeclaration.stability }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.level }}</span>
        <span class="data">{{ dataDeclaration.level }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.data }}</span>
        <span class="data">{{ dataDeclaration.data }}</span>
      </div>
      <div class="text">
        <span class="datades">{{ fixedData.cost }}</span>
        <span class="data">{{ dataDeclaration.cost }}</span>
      </div>
    </div>
    <div id="dataComponent">
      <DataShow2></DataShow2>
    </div>
    <div id="commentComponent">
      <comment :dataComment="dataComment"></comment>
    </div>
    <div id="classComponent">
      <classdata formtype="notfach" :form="form"></classdata>
    </div>
    <div id="minData">
      <MinData_3part :minData="minData"></MinData_3part>
    </div>
  </div>
</template>

<script setup>
import DataShow2 from './DataShow2.vue';
import comment from './comment.vue';
import classdata from './classdata.vue';
import { reactive, onMounted, onUnmounted } from 'vue';
import MinData_3part from './minData_3part.vue';
import breadcrumb from '@/views/dataResource/Layout/components/breadcrumb.vue'
onMounted(() => {
  getTop();
  window.addEventListener('resize', getTop);
}),
  onUnmounted(() => {
    window.removeEventListener('resize', getTop);
  });
const getTop = (e) => {
  const element1 = document.getElementById('dataComponent');
  const element2 = document.getElementById('commentComponent');
  const element3 = document.getElementById('classComponent');
  const element4 = document.getElementById('minData');
  const li1 = document.getElementById('lidata');
  const li2 = document.getElementById('licomment');
  const li3 = document.getElementById('liclass');
  const li4 = document.getElementById('limin');
  const setTopList = [element1.offsetTop, element2.offsetTop, element3.offsetTop, element4.offsetTop];
  if (e == 1){
    window.scrollTo({
      top: setTopList[0],
      behavior: "smooth"
    })
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  } else if (e == 2) {
    window.scrollTo({
      top: setTopList[1],
      behavior: "smooth"
    })
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  }else if (e == 3) {
    window.scrollTo({
      top: setTopList[2],
      behavior: "smooth"
    })
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li3.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  }else if (e == 4) {
    window.scrollTo({
      top: setTopList[3],
      behavior: "smooth"
    })
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  }
}
let nowsaver = 0;
const changeNow = () => {
  const element1 = document.getElementById('dataComponent');
  const element2 = document.getElementById('commentComponent');
  const element3 = document.getElementById('classComponent');
  const element4 = document.getElementById('minData');
  const li1 = document.getElementById('lidata');
  const li2 = document.getElementById('licomment');
  const li3 = document.getElementById('liclass');
  const li4 = document.getElementById('limin');
  const setTopList = [element1.offsetTop, element2.offsetTop, element3.offsetTop, element4.offsetTop];
  let scrollY = document.documentElement.scrollTop;
  if (scrollY != nowsaver) {
  if (scrollY >= setTopList[0] && scrollY < setTopList[1]) {
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  } else if (scrollY >= setTopList[1] && scrollY < setTopList[2]) {
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  } else if (scrollY >= setTopList[2] && scrollY < setTopList[3]) {
    li4.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li3.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  } else if (scrollY >= setTopList[3]) {
    li3.style = "color:#969696;border-left:3px solid #e8e9eb";
    li1.style = "color:#969696;border-left:3px solid #e8e9eb";
    li2.style = "color:#969696;border-left:3px solid #e8e9eb";
    li4.style = "color:#1e9bb6;border-left:3px solid #1e9bb6";
  }
}
  nowsaver = document.documentElement.scrollTop;
}
setInterval(changeNow, 100);
let dataComment = [{
    title: "备注",
    comment: "这是基于出生日期和参与初始评估中心日期的派生变量，是指参与者在参加初始评估中心的当天的年龄，截断为全年。"
}]
let form = [
  {
    dataID: '100094',
    describe: '基线特征',
    number: '6+25'
},
{
    dataID: '1',
    describe: '人口特征',
    number: '+35'
},
{
    dataID: '107',
    describe: '社会人口学',
    number: '110'
}
]

const tit = reactive({
  data:"数据",
  comment: "备注",
  class: "类别",
  min: "数据类型"
})
const minData = [
{
    dataID: '21003',
    describe: '参加评估中心的年龄',
    relationship: '当前字段使字段21003的子集'
},
{
    dataID: '53',
    describe: '参加评估中心日期',
    relationship: '当前字段使字段53中的招募日期值'
},
{
    dataID: '33',
    describe: '出生日期',
    relationship: '当前字段使字段33中的出生日期值'
},
{
    dataID: '20162',
    describe: '包年成人吸烟作为暴露于吸烟的寿命的比例',
    relationship: '字段20162是使用当前字段派生的'
}
]
const fixedData = reactive({
  describe: "描述",
  type: "类别",
  participant: "参与者",
  numericValue: "记录数",
  stability: "稳定性",
  valueType: "值类型",
  dataType: "数据类型",
  level: "层级",
  sex: "性别",
  example: "实例",
  data: "数据项",
  issueDate: "发布日期",
  versionDate: "版本日期",
  cost: "成本层"
}) 
const dataDeclaration = reactive({
  title: "数据字段 21022",
  describe: "招聘年龄",
  participant: "502,408",
  numericValue: "502,408",
  stability: "固定",
  valueType: "单个值",
  dataType: "数据",
  level: "衍生",
  sex: "两性",
  example: "单数",
  data: "单一",
  issueDate: "2014.07",
  versionDate: "2014.07",
  cost: "d1 o1 s1"
})
</script>

<style scoped>
#body {
    margin-left: 2.2vw;
    margin-top: 4vh;
    text-align: left;
    width: 57vw;
    min-width: 640px;
}

header {
  white-space:nowrap;
}

header h1 {
  font-size: 26px;
}

header .datades {
  color:#969696;
  margin-right: 28px;
}

#bread {
  color: #1e9bb6;
}

#information {
  width: 48.5vw;
  height: 20vh;
  font-size: 14px;
  background-color: #f5f7fa;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  min-height: 115px;
  min-width: 640px;
}

.text {
  width: 14.25vw;
  flex:0 0 25%;
  margin-top: 1.25vh;
  margin-bottom: 1.25vh;
  display: flex;
  align-items: center;
  white-space:nowrap;
}

#information .datades {
  color:#969696;
  width: 5vw;
  min-width: 80px;
  text-align: right;
}

#information .data {
  text-align: left;
  margin-left: 1.5vw;
}

#sideNavigationBar {
  position: fixed;
  top: 11.5vh;
  right: 13vw;
  font-size: 14px;
}

#sideNavigationBar div{
  color:#969696;
}

#sideNavigationBar ul{
 
  list-style-type: none;
  padding-left: 0vw;
}

#sideNavigationBar li{
  padding-top: 0.6vh;
  padding-bottom: 0.6vh;
  color:#969696;
  cursor: pointer;
  padding-left: 1.4vw;
  border-left: 3px solid #e8e9eb;
  transition: all 0.8s ease;
  user-select:none;
}


#minData {
  min-width: 640px;
}
</style>