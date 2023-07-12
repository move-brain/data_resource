<script setup>
import { ref, reactive, watch } from "vue";
import minDataPart from "./DataPart.vue";
import { useRoute, useRouter } from "vue-router";
const $route = useRoute();
const $router = useRouter();
const routerlink = (val) => {
  $router.push({ path: val });
};
const activeName = ref("first");
const IsRouter = ref("申请信息");
const handleClick = (pane, ev) => {
  if (pane.props.label == "申请信息") {
    IsRouter.value = "申请信息";
  } else if (pane.props.label == "团队信息") {
    IsRouter.value = "团队信息";
  } else if (pane.props.label == "付款信息") {
    IsRouter.value = "付款信息";
  }
};

const word = reactive({
  w1: "",
  w2: "",
  w3: "",
  w4: "",
  w5: "",
  w6: "",
  w7: "",
});
const extent = reactive({
  w1: "0",
  w2: "0",
  w3: "0",
  w4: "0",
  w5: "0",
  w6: "0",
  w7: "0",
});
watch(word, () => {
  (extent.w1 = word.w1.length),
    (extent.w2 = word.w2.length),
    (extent.w3 = word.w3.length),
    (extent.w4 = word.w4.length),
    (extent.w5 = word.w5.length),
    (extent.w6 = word.w6.length),
    (extent.w7 = word.w7.length);
});

const tableShow = ref(false);

const tableNum = ref("0");
const SNPNum = ref("0");
const DataPlusNum = ref("0");
const dataNum1 = ref(
  parseInt(tableNum.value) +
    parseInt(SNPNum.value) +
    parseInt(DataPlusNum.value)
);

const lotNum = ref("0");
const HESNum = ref("0");
const dataNum2 = ref(parseInt(lotNum.value) + parseInt(HESNum.value));

const divList = reactive([]); // 维护一个响应式数组，用来存放添加的div元素
const IsShow = reactive([]); //控制是否展示信息(大)
const SubIsShow = reactive([0]); //控制是否展示信息(小) （但是这个还没有完全做好，需要和数据绑定）
const addDiv = () => {
  const newDiv = `${4000000}`; // 不知道编号是怎么计算的，此处这样做
  divList.push(newDiv); // 将新的div内容添加到divList数组中
  IsShow.push(0);
};

const killDiv = (index) => {
  divList.splice(index, 1);
  IsShow.splice(index, 1);
};

const fixedData = reactive({
  创建时间: "2022-07-15",
  状态: "未获批准",
  快照提取ID: "38183",
  快照中的项目数: "808",
  快照最后更新的时间: "2022-08-15",
  订单包含:
    "总计: 789个标准字段 (789个表格、0个遗传SNP、0个数据集) 和 0个批量字段 (0个批量、0个HES记录)",
});

const IsSubmit = ref(0);

const teamList = reactive([]);
const addTeam = () => {
  const newDiv = `${teamList.length + 1}`;
  teamList.push(newDiv); // 将新的div内容添加到divList数组中
  workerList.push([]);
};
const killTeam = (index) => {
  teamList.splice(index, 1);
};

const workerList = reactive([]);
const addWorker = (index) => {
  const newDiv = `${workerList[index].length + 1}`;
  workerList[index].push(newDiv); // 将新的div内容添加到divList数组中
};
const killWorker = (index) => {
  workerList[index].splice(index, 1);
};
</script>

<template>
  <div class="main">
    <header>
      <div id="backButton" @click="routerlink('/')"></div>
      申请项目
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="申请信息" name="first"></el-tab-pane>
        <el-tab-pane label="团队信息" name="second"></el-tab-pane>
        <el-tab-pane label="付款信息" name="third"></el-tab-pane>
      </el-tabs>
    </header>

    <div class="applicationInfo" v-if="IsRouter == '申请信息'">
      <div class="everyProject">
        <h4 class="subTitle">
          <p>申请信息</p>
          <div class="onlineHelp" @click="routerlink('/')">
            <i class="iconfont">&#xe60c;</i>在线帮助
          </div>
        </h4>
        <form action="" class="form">
          <div class="input">
            <label for="name">项目名称：</label>
            <input type="text" class="inputSetting" placeholder="请输入文字" />
          </div>
          <div class="input">
            <label for="name">项目问题和目标：</label>
            <textarea
              class="textarea"
              v-model="word.w1"
              maxlength="200"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              {{ extent.w1 }}/200
            </div>
          </div>
          <div class="input">
            <label for="name">项目背景与科学原理：</label>
            <textarea
              class="textarea"
              maxlength="300"
              v-model="word.w2"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              <span>{{ extent.w2 }}</span
              ><span>/</span><span>300</span>
            </div>
          </div>
          <div class="input">
            <label for="name">使用方法说明：</label>
            <textarea
              class="textarea"
              maxlength="300"
              v-model="word.w3"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              <span>{{ extent.w3 }}</span
              ><span>/</span><span>300</span>
            </div>
          </div>
          <div class="input">
            <label for="name">所需数据集的类型和大小：</label>
            <textarea
              class="textarea"
              maxlength="100"
              v-model="word.w4"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              <span>{{ extent.w4 }}</span
              ><span>/</span><span>100</span>
            </div>
          </div>
          <div class="input">
            <label for="name">研究的预期价值：</label>
            <textarea
              class="textarea"
              maxlength="100"
              v-model="word.w5"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              <span>{{ extent.w5 }}</span
              ><span>/</span><span>100</span>
            </div>
          </div>
          <div class="input">
            <label for="name">项目关键字：</label>
            <div
              style="display: flex; width: 100%; justify-content: space-between"
            >
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
              <input
                type="textarea"
                class="inputSettingPlus"
                placeholder="请输入"
              />
            </div>
          </div>
          <div class="input">
            <label for="name"
              >简述项目摘要，说明目标、科学原理、项目持续时间和公共卫生影响：</label
            >
            <textarea
              class="textarea"
              maxlength="100"
              v-model="word.w6"
              placeholder="请输入文字"
            ></textarea>
            <div style="text-align: right; color: #a3a5a5; font-size: 2px">
              <span>{{ extent.w6 }}</span
              ><span>/</span><span>100</span>
            </div>
          </div>
          <div class="input">
            <label for="name"
              >项目是否会产生从现有复杂数据集衍生的任何新数据字段：</label
            >
            <div class="radio">
              <label class="radio"
                ><input
                  type="radio"
                  @click="tableShow = true"
                  name="radio"
                />是</label
              >
              <label class="radio"
                ><input
                  type="radio"
                  @click="tableShow = false"
                  name="radio"
                  checked
                />否</label
              >
            </div>
            <div v-if="tableShow" class="textareaBorder">
              <label for="name" style="margin-left: 1%"
                >如果是，请概述您打算生成的变量：</label
              >
              <textarea
                style="
                  font-size: 85%;
                  border: 2px solid #d6d8d9;
                  border-radius: 5px;
                  padding: 10px;
                  height: 80px;
                  min-width: 96%;
                  max-width: 96%;
                  margin-left: 1%;
                "
                maxlength="100"
                v-model="word.w7"
                placeholder="请输入文字"
              ></textarea>
              <div
                style="
                  text-align: right;
                  color: #a3a5a5;
                  font-size: 2px;
                  margin-right: 1.5%;
                "
              >
                <span>{{ extent.w7 }}</span
                ><span>/</span><span>100</span>
              </div>
            </div>
            <div style="margin: 2vh 0">
              <label for="name">项目预计持续时间：</label>
              <br />
              <div style="display: flex; align-items: center">
                <select class="select">
                  <option value="36">36</option>
                  <option value="24">24</option>
                  <option value="12">12</option>
                  <option value="6">6</option>
                </select>
                <p style="font-size: 16px; color: grey">个月</p>
              </div>
            </div>
            <div class="textareaBorder">
              <p style="margin-top: 0">
                请注意，您应该发布或公开您的结果并返回国家脑疾病临床大数据平台：<br />&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;任何重要的派生变量；<br />&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;用于生成它们的方法的描述；<br />&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;用于生成论文主要结果的底层语法/代码；<br />&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;一个简短的外行描述，总结发现。<br />这些应在每次出版后的6个月内或项目结束日期后12个月内提供（以先到者为准）。您在出版前至少提前两周向我们发送一份您已接受的手稿副本，并提醒我们是否存在与调查结果相关的任何道德或争议问题。
              </p>
            </div>
          </div>
        </form>
      </div>
      <div class="everyProject" style="padding-bottom: 10vh">
        <h4 class="subTitle">
          <p>数据字段选择</p>
          <div class="onlineHelp" @click="routerlink('/')">
            <i class="iconfont">&#xe60c;</i>在线帮助
          </div>
        </h4>
        <div style="text-align: left; display: flex; align-items: center">
          <el-button class="button" type="success" @click="addDiv"
            >创建数据订单</el-button
          >
          <div style="color: #515556">
            总计: {{ dataNum1 }}个标准字段 ({{ tableNum }}个表格、{{
              SNPNum
            }}个遗传SNP、{{ DataPlusNum }}个数据集) 和 {{ dataNum2 }}个批量字段
            ({{ lotNum }}个批量、{{ HESNum }}个HES记录)
          </div>
        </div>
        <div class="orders">
          <div v-for="(item, index) in divList" :key="index" ref="divDom">
            <div
              style="
                display: flex;
                align-items: center;
                margin: 4vh 0 4vh 3vw;
                margin-top: 3vh;
                margin-bottom: 0;
              "
            >
              <div
                style="
                  font-size: 10px;
                  color: #afb1b3;
                  padding: 15px;
                  line-height: 1vh;
                  cursor: pointer;
                  user-select: none;
                "
                :style="
                  IsShow[index] % 2 == 1 ? 'rotate:90deg;color:#2a7c98' : ''
                "
                @click="IsShow[index]++"
              >
                ▶
              </div>
              <div
                style="
                  padding-right: 30px;
                  font-weight: 900;
                  font-size: 18px;
                  cursor: pointer;
                  user-select: none;
                "
                @click="IsShow[index]++"
              >
                订单编号 {{ item }}
              </div>
              <div style="color: #2a7c98" @click="routerlink('/')">
                <i class="iconfont">&#xe726;</i> 添加数据
              </div>
              <el-button
                class="button"
                style="background-color: white; position: absolute; right: 0"
                @click="killDiv(index)"
                ><i class="iconfont">&#xea16;</i> 删除订单</el-button
              >
            </div>
            <div v-if="IsShow[index] % 2 == 1" class="concreteDiv">
              <div class="concreteDivHeader">
                <div class="text" v-for="(i, index, z) in fixedData" :key="z">
                  <div class="datades">{{ index }}</div>
                  <div class="data">{{ i }}</div>
                </div>
              </div>
              <div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    margin: 4vh 0 4vh 0.1vw;
                    margin-top: 0.5vh;
                    margin-bottom: 0;
                  "
                >
                  <div
                    style="
                      font-size: 10px;
                      color: #afb1b3;
                      padding: 15px;
                      line-height: 1vh;
                      cursor: pointer;
                      user-select: none;
                    "
                    :style="SubIsShow[index] % 2 == 1 ? 'rotate:90deg;' : ''"
                    @click="SubIsShow[index]++"
                  >
                    ▶
                  </div>
                  <div
                    style="
                      padding-right: 30px;
                      font-size: 14px;
                      cursor: pointer;
                      user-select: none;
                    "
                    @click="SubIsShow[index]++"
                  >
                    传染性疾病
                  </div>
                  <el-button
                    class="button"
                    style="
                      background-color: white;
                      position: absolute;
                      right: 2vw;
                    "
                    ><i class="iconfont">&#xe601;</i> 清空所选</el-button
                  >
                </div>
                <div v-if="SubIsShow[index] % 2 == 1" style="width: 100%">
                  测试
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submitButton">
        <el-button class="buttonGreen" type="success" @click="IsSubmit++"
          >提交</el-button
        >
        <el-button class="buttonGrey" type="success">保存草稿</el-button>
        <div @click="routerlink('/')">
          <el-button class="buttonGrey" type="success">退出</el-button>
        </div>
      </div>
    </div>

    <div
      class="applicationInfo"
      style="align-items: center"
      v-if="IsRouter == '团队信息'"
    >
      <div>
        <el-button
          class="buttonInfo"
          style="margin: 0; margin-top: 2vh"
          type="success"
          @click="addTeam()"
          >增加研究机构</el-button
        >
      </div>
      <div style="width: 97.6%; margin-bottom: 10vh">
        <div v-for="(item, index) in teamList" :key="index" ref="divDom">
          <div class="everyProject">
            <div
              style="
                display: flex;
                align-items: center;
                margin: 4vh 0 4vh 3vw;
                margin-top: 3vh;
                margin-bottom: 0;
              "
            >
              <div
                style="
                  padding-right: 30px;
                  font-weight: 900;
                  font-size: 18px;
                  cursor: pointer;
                  user-select: none;
                "
              >
                团队{{ item }}
              </div>
              <el-button
                class="button"
                style="
                  background-color: white;
                  position: absolute;
                  right: 1.1vw;
                "
                @click="killTeam(index)"
                ><i class="iconfont">&#xea16;</i> 删除订单</el-button
              >
            </div>
            <div>
              <div class="allTable">
                <div class="selectTable">
                  <div class="tableLeft">选择机构</div>
                  <div style="margin-left: 5vw">
                    <div
                      style="
                        width: 33vw;
                        display: flex;
                        justify-content: end;
                        white-space: nowrap;
                      "
                    >
                      <div>研究机构：</div>
                      <div>
                        <div style="display: flex">
                          <select class="select" style="width: 25vw">
                            <option value="none" selected disabled hidden>
                              请选择
                            </option>
                            <option value="1">机构1</option>
                            <option value="2">机构2</option>
                            <option value="3">机构3</option>
                            <option value="4">机构4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="width: 12%; margin-right: 1vw"></div>
                </div>
                <div class="selectTable">
                  <div class="tableLeft">人员配置</div>
                  <div style="margin-left: 5vw">
                    <div
                      style="
                        width: 33vw;
                        display: flex;
                        justify-content: end;
                        white-space: nowrap;
                      "
                    >
                      <div>首席研究员：</div>
                      <div>
                        <div style="display: flex">
                          <select class="select" style="width: 25vw">
                            <option value="none" selected disabled hidden>
                              请选择
                            </option>
                            <option value="1">研究员1</option>
                            <option value="2">研究员2</option>
                            <option value="3">研究员3</option>
                            <option value="4">研究员4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div style="width: 12%; margin-right: 1vw"></div>
                    <div
                      style="
                        position: relative;
                        width: 33vw;
                        display: flex;
                        margin-top: 2.5vh;
                        justify-content: end;
                        white-space: nowrap;
                      "
                      v-for="(item, index) in workerList[index]"
                      :key="index"
                    >
                      <div>合作者：</div>
                      <div>
                        <div style="display: flex">
                          <select class="select" style="width: 25vw">
                            <option value="none" selected disabled hidden>
                              请选择
                            </option>
                            <option value="1">合作者1</option>
                            <option value="2">合作者2</option>
                            <option value="3">合作者3</option>
                            <option value="4">合作者4</option>
                          </select>
                        </div>
                      </div>
                      <div class="coworkerAfter">
                        <!-- <input class="coworkerAfterChioce" type="checkbox" name="choice"><label for="choice">代表</label> -->
                        <el-checkbox
                          class="checkbox"
                          label="代表"
                          size="large"
                        />
                        <div
                          @click="killWorker(index)"
                          style="
                            color: #2a7c98;
                            cursor: pointer;
                            margin-left: 2vw;
                          "
                        >
                          删除
                        </div>
                      </div>
                    </div>
                    <div
                      @click="addWorker(index)"
                      style="
                        color: #2a7c98;
                        margin-top: 2.5vh;
                        cursor: pointer;
                        width: 10vw;
                      "
                    >
                      <i class="iconfont">&#xe726;</i> 添加合作者
                    </div>
                  </div>

                  <div style="width: 12%; margin-right: 1vw"></div>
                </div>
                <div class="selectTable">
                  <div class="tableLeft">材料转让协议信息</div>
                  <div style="margin-left: 5vw">
                    <div
                      style="
                        width: 33vw;
                        display: flex;
                        justify-content: end;
                        white-space: nowrap;
                      "
                    >
                      <div>机构官方名称：</div>
                      <div>
                        <div style="display: flex">
                          <input
                            type="text"
                            class="select"
                            style="width: 24.2vw; height: 22px"
                            placeholder="请输入"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style="
                        width: 33vw;
                        display: flex;
                        margin-top: 2.5vh;
                        margin-bottom: 2.5vh;
                        justify-content: end;
                        white-space: nowrap;
                      "
                    >
                      <div>机构联系人：</div>
                      <div>
                        <div style="display: flex">
                          <select class="select" style="width: 25vw">
                            <option value="none" selected disabled hidden>
                              请选择
                            </option>
                            <option value="1">联系人1</option>
                            <option value="2">联系人2</option>
                            <option value="3">联系人3</option>
                            <option value="4">联系人4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="width: 12%; margin-right: 1vw"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submitButton">
        <div style="text-align: right; margin: 1vh 37% 0 0">
          <el-button
            class="buttonGreen"
            style="margin: 10px; width: 60px"
            type="success"
            @click="IsSubmit++"
            >提交</el-button
          >
          <div @click="routerlink('/')">
            <el-button
              class="buttonGrey"
              style="margin: 10px; width: 60px"
              type="success"
              @click="IsSubmit++"
              >取消</el-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="applicationInfo" v-if="IsRouter == '付款信息'">
      <div class="everyProject">
        <h1>None</h1>
      </div>
    </div>

    <div v-if="IsSubmit % 2 == 1" class="All">
      <div class="Middle">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1.5vh 1.2vw;
            font-size: 18px;
            user-select: none;
          "
        >
          <div style="font-weight: 900">提示</div>
          <div
            style="font-size: 22px; color: #c8c8cb; cursor: pointer"
            @click="IsSubmit++"
          >
            ×
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            margin: 1.5vh 1.2vw 3vh;
            font-size: 15px;
            user-select: none;
          "
        >
          <div>
            <i
              class="iconfont"
              style="color: #e0a310; font-size: 30px; padding: 10px"
              >&#xe62f;</i
            >
          </div>
          <div>提交后不可修改，确认要提交吗？</div>
        </div>
        <div style="border-top:1px solid #e1e3e6;text-align:right;height">
          <el-button
            class="buttonGrey"
            style="margin: 10px; width: 60px"
            type="success"
            @click="IsSubmit++"
            >取消</el-button
          >
          <el-button
            class="buttonGreen"
            style="margin: 0; margin-right: 20px; width: 60px"
            type="success"
            @click="IsSubmit++"
            >提交</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coworkerAfter {
  position: absolute;
  right: -8vw;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coworkerAfter ::v-deep .checkbox {
  color: #000000;
  background-color: #fff;
}

.coworkerAfter ::v-deep .el-checkbox__inner:focus {
  background-color: #007f99;
}

.coworkerAfter ::v-deep .el-checkbox__inner::after {
  color: #000000;
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
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.Middle {
  background-color: #fff;
  width: 420px;
  height: auto;
  border-radius: 5px;
}

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 4105675 */
  src: url("//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.woff2?t=1686382529151")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.woff?t=1686382529151")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4105675_z57tk1yhbc8.ttf?t=1686382529151")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
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

.applicationInfo {
  display: flex;
  flex-direction: column;
}

header {
  position: relative;
  width: 98%;
  padding-left: 3%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 130%;
  line-height: 5.9vh;
  font-weight: 800;
  text-align: left;
}

#backButton {
  position: absolute;
  top: 2.2vh;
  left: 1.2vw;
  width: 10px;
  height: 10px;
  border-top: 2px solid #b8bbbb;
  border-left: 2px solid #b8bbbb;
  rotate: -45deg;
  user-select: none;
}

.submitButton {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8%;
  background-color: #fff;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.everyProject {
  margin: 1.2% 1.2%;
  width: 97.6%;
  height: 97.6%;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
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
  color: #257d99;
  font-weight: 100;
}

.form {
  user-select: none;
  font-size: 85%;
  text-align: left;
  margin: 0 2.8% 0 3%;
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

.inputSettingPlus {
  width: 14%;
  font-size: 85%;
  border: 2px solid #d6d8d9;
  border-radius: 5px;
  padding: 10px;
}

::-webkit-input-placeholder {
  /* Edge */
  color: #c8cbcc;
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

.textareaBorder {
  display: flex;
  flex-direction: column;
  background-color: #f7f9fc;
  padding: 30px;
  height: 140px;
  max-width: 96%;
  margin-bottom: 4vh;
}

.radio {
  margin: 15px 40px 10px 0;
}

.select {
  border: 2px solid #c8cbcc;
  border-radius: 5px;
  width: 16%;
  height: 32px;
  padding: 5px;
  margin-right: 20px;
  color: grey;
}

.select::placeholder {
  padding: 5px;
  color: grey;
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
  flex: 0 0 25%;
  margin-top: 1.25vh;
  margin-bottom: 1.25vh;
  padding: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.datades {
  color: #969696;
  width: 8vw;
  min-width: 80px;
  text-align: right;
}

.data {
  text-align: left;
  margin-left: 1.5vw;
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
  background-color: #fff;
  border: 1px solid #d5d7d8;
  color: #565b5c;
}

.buttonGrey:active {
  background-color: #c0c0c0;
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
  padding-left: 0.5vw;
  text-align: left;
  border-left: 5px solid #007f99;
  min-width: 140px;
}

::v-deep #tab-first,
::v-deep #tab-second,
::v-deep #tab-third,
::v-deep #tab-fourth,
::v-deep #tab-fifth,
::v-deep #tab-sixth,
::v-deep #tab-seventh {
  font-size: 0.8vw;
}

::v-deep #tab-first:hover,
::v-deep #tab-second:hover,
::v-deep #tab-third:hover,
::v-deep #tab-fourth:hover,
::v-deep #tab-fifth:hover,
::v-deep #tab-sixth:hover,
::v-deep #tab-seventh:hover {
  color: #257d99;
}

::v-deep .el-tabs__header {
  margin: 0;
  user-select: none;
}

::v-deep .el-tabs__active-bar {
  background-color: #257d99;
}

::v-deep .el-tabs__item.is-active {
  color: #257d99;
}

::v-deep #tab-first {
  font-size: 0.8vw;
}

::v-deep #tab-first:hover {
  color: #257d99;
}

::v-deep #tab-second {
  font-size: 0.8vw;
}

::v-deep #tab-second:hover {
  color: #257d99;
}

::v-deep #tab-third {
  font-size: 0.8vw;
}

::v-deep #tab-third:hover {
  color: #257d99;
}
</style>
