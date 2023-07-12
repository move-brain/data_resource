<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const $route = useRoute();
const $router = useRouter();
const routerlink = (val) => {
  $router.push({ path: val });
};
const fixedData1 = reactive({
  申请ID: "4563223568",
  标题: "脑疾病研究",
  第一作者: "张三",
  杂志: "国家脑疾病健康杂志",
  出版年份: "2020",
  DOI: "10.1039/c7ra08324f",
  Pubmed: "1245254564523",
});
const fixedData2 = reactive({
  申请ID: "4563223568",
  派生变量数量: "452",
  "衍生变量描述（即参与者人数、变量类型和测量单位等）":
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
  返回的变量是否对先前返回的数据集更新: "是",
  返回的变量是否会在以后更新以供人使用: "是",
  "此数据文件涉及的出版物（包括第一作者、标题、期刊、年份）":
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
  发布这些数据的许可要求的详细信息:
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
});
const fixedData3 = reactive({
  "描述（例如衍生变量的生成、分析结果的生成）":
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
  "此代码涉及的出版物（包括第一作者、标题、期刊、年份）":
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
  语言: "SAS",
  用于执行代码的平台: "Windos",
  代码的DOI: "10.1039/c7ra08324f",
});
const fixedData4 = reactive({
  文件说明:
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
  "此代码涉及的出版物（包括第一作者、标题、期刊、年份）":
    "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述",
});

const documentName = reactive({
  name1: " 文件示例.pdf",
  name2: "文件示例文件示例.pdf",
  name3: "文件示例文件示例.pdf",
  name4: "文件示例文件示例.pdf",
});

const projectControl = reactive([[0], [0], [0], [0]]);

const value = ref("");
const options = [
  {
    value: "手稿",
    label: "手稿",
  },
  {
    value: "数据文件",
    label: "数据文件",
  },
  {
    value: "程序源代码",
    label: "程序源代码",
  },
  {
    value: "附加文件",
    label: "附加文件",
  },
];

const pushView = ref(0);
const push = ref(null);

const scrollHeight = ref(0);

const handleScroll = () => {
  scrollHeight.value = document.documentElement.scrollTop;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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

let submitDatas = [0, 0, 0, 0];
const change = (val) => {
  submitDatas = [0, 0, 0, 0];
  switch (val) {
    case "手稿":
      submitDatas[0] = 1;
      break;
    case "数据文件":
      submitDatas[1] = 1;
      break;
    case "程序源代码":
      submitDatas[2] = 1;
      break;
    case "附加文件":
      submitDatas[3] = 1;
      break;
  }
};
</script>

<template>
  <div style="margin: 2vh 3vw">
    <div style="display: flex; align-items: end">
      <p style="font-size: 1.3vw; font-weight: 900; padding-right: 20px">
        项目成果
      </p>
    </div>
    <div style="display: flex; align-items: end">
      <el-button class="buttonGreen" type="success" @click="pushView = 1"
        >上传成果</el-button
      >
    </div>

    <div class="push" ref="push" v-if="pushView % 2 == 1">
      <div style="position: relative; height: 100vh">
        <div
          class="movePadding"
          :style="{ height: 55 - scrollHeight + 'px' }"
        ></div>
        <div class="pushTitle">
          <p style="font-size: 1.1vw; font-weight: 900; margin-left: 1.5vw">
            上传成果
          </p>
          <div
            @click="pushView = 0"
            style="
              font-size: 2vw;
              font-weight: 500;
              margin-right: 1.5vw;
              color: #c3c4c7;
              cursor: pointer;
            "
          >
            ×
          </div>
        </div>
        <div style="padding-left: 2vw; position: relative; height: 90%">
          <div style="display: flex">
            <p style="color: red; margin-bottom: 0">*</p>
            <p style="margin-bottom: 0">选择上传类型</p>
          </div>
          <div style="text-align: left">
            <el-select
              v-model="value"
              @change="change"
              class="m-2"
              placeholder="请选择类型"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div v-if="submitDatas[0] == 1">
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">申请ID</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">标题</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">第一作者</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">杂志</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">出版年份</p>
            </div>
            <div style="text-align: left">
              <el-date-picker class="m-2" type="date" placeholder="请选择" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">DOI</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">Pubmed ID</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div class="documentsFlex" style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">文件</p>
            </div>
            <div style="text-align: left">
              <el-button class="buttonGrey" style="width: 100px" type="success"
                ><i class="iconfont" style="color: #565b5c">&#xe672;</i
                >上传文件</el-button
              >
            </div>
            <div class="submitOut">
              <div class="submitButton">
                <div @click="routerlink('/')">
                  <el-button class="buttonGrey" type="success">取消</el-button>
                </div>
                <el-button
                  class="buttonGreen"
                  style="margin-left: 20px"
                  type="success"
                  >保存</el-button
                >
              </div>
            </div>
          </div>

          <div v-if="submitDatas[1] == 1">
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">派生变量数量</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                衍生变量描述（即参与者人数、变量类型和测量单位）
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w1"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w1 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">
                返回的变量是否是对先前返回的数据集的更新
              </p>
            </div>
            <div style="text-align: left">
              <el-radio-group v-model="radio1" class="ml-4">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">
                返回的变量是否会在以后更新以供他人使用
              </p>
            </div>
            <div style="text-align: left">
              <el-radio-group v-model="radio2" class="ml-4">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </div>
            <div style="display: flex">
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                此数据文件涉及的出版物（包括第一作者、标题、期刊、年份）
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w2"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w2 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                发布这些数据的许可要求的详细信息
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w3"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w3 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">文件</p>
            </div>
            <div style="text-align: left">
              <el-button class="buttonGrey" style="width: 100px" type="success"
                ><i class="iconfont" style="color: #565b5c">&#xe672;</i
                >上传文件</el-button
              >
            </div>
            <div class="documentsFlex" style="display: flex">
              <div
                style="position: relative"
                v-for="(item, index) in documentName"
                :key="index"
              >
                <div class="documents">
                  {{ item }}
                  <div class="documentsHover">
                    <div class="iconButton">
                      <i class="iconfont">&#xe647;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xe648;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xea16;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="submitOut">
              <div class="submitButton">
                <div @click="routerlink('/')">
                  <el-button class="buttonGrey" type="success">取消</el-button>
                </div>
                <el-button
                  class="buttonGreen"
                  style="margin-left: 20px"
                  type="success"
                  >保存</el-button
                >
              </div>
            </div>
          </div>

          <div v-if="submitDatas[2] == 1">
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                描述（例如衍生变量的生成、分析结果的生成）
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w4"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w4 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                此代码涉及的出版物（包括第一作者、标题、期刊、年份）
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w5"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w5 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="margin-bottom: 0; margin-top: 8px">语言</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">
                用于执行代码的平台
              </p>
            </div>
            <div style="text-align: left">
              <el-select v-model="value" class="m-2" placeholder="请选择类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">代码的DOI</p>
            </div>
            <div style="text-align: left">
              <el-input class="m-2" placeholder="请输入" />
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">文件</p>
            </div>
            <div style="text-align: left">
              <el-button class="buttonGrey" style="width: 100px" type="success"
                ><i class="iconfont" style="color: #565b5c">&#xe672;</i
                >上传文件</el-button
              >
            </div>
            <div class="documentsFlex" style="display: flex">
              <div
                style="position: relative"
                v-for="(item, index) in documentName"
                :key="index"
              >
                <div class="documents">
                  {{ item }}
                  <div class="documentsHover">
                    <div class="iconButton">
                      <i class="iconfont">&#xe647;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xe648;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xea16;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="submitOut">
              <div class="submitButton">
                <div @click="routerlink('/')">
                  <el-button class="buttonGrey" type="success">取消</el-button>
                </div>
                <el-button
                  class="buttonGreen"
                  style="margin-left: 20px"
                  type="success"
                  >保存</el-button
                >
              </div>
            </div>
          </div>

          <div v-if="submitDatas[3] == 1">
            <div style="display: flex">
              <p style="color: red; margin-bottom: 0; margin-top: 8px">*</p>
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                文件说明
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w6"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w6 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="text-align: left; margin-bottom: 0; margin-top: 8px">
                此数据文件涉及的出版物（包括第一作者、标题、期刊、年份）
              </p>
            </div>
            <div style="text-align: left; width: 90%">
              <textarea
                class="textarea"
                v-model="word.w2"
                maxlength="300"
                placeholder="请输入文字"
              ></textarea>
              <div style="text-align: right; color: #a3a5a5; font-size: 2px">
                {{ extent.w2 }}/300
              </div>
            </div>
            <div style="display: flex">
              <p style="margin-bottom: 0; margin-top: 8px">文件</p>
            </div>
            <div style="text-align: left">
              <el-button class="buttonGrey" style="width: 100px" type="success"
                ><i class="iconfont" style="color: #565b5c">&#xe672;</i
                >上传文件</el-button
              >
            </div>
            <div class="documentsFlex" style="display: flex">
              <div
                style="position: relative"
                v-for="(item, index) in documentName"
                :key="index"
              >
                <div class="documents">
                  {{ item }}
                  <div class="documentsHover">
                    <div class="iconButton">
                      <i class="iconfont">&#xe647;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xe648;</i>
                    </div>
                    <div class="iconButton">
                      <i class="iconfont">&#xea16;</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="submitOut">
              <div class="submitButton">
                <div to="/">
                  <el-button class="buttonGrey" type="success">取消</el-button>
                </div>
                <el-button
                  class="buttonGreen"
                  style="margin-left: 20px"
                  type="success"
                  >保存</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="display: flex; align-items: center"
      v-if="projectControl[0] % 2 == 0"
    >
      <div class="everyProject">
        <div class="tableLeft">
          <p style="min-width: 40px">手稿</p>
          <p
            style="
              min-width: 40px;
              padding-left: 1vw;
              font-size: 0.8vw;
              color: #aaafb0;
            "
          >
            上传日期: {{ "2022-07-12" }}
          </p>
        </div>
        <div class="concreteDivHeader">
          <div class="text" v-for="(i, index, z) in fixedData1" :key="z">
            <div class="datades">{{ index }}</div>
            <div class="data">{{ i }}</div>
          </div>
        </div>
        <div style="margin-left: 2.5vw">
          <p class="datades text">文件</p>
          <div style="display: flex">
            <div
              style="position: relative"
              v-for="(item, index) in documentName"
              :key="index"
            >
              <div class="documents">
                {{ item }}
                <div class="documentsHover">
                  <div class="iconButton"><i class="iconfont">&#xe647;</i></div>
                  <div class="iconButton"><i class="iconfont">&#xe648;</i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="control">编辑</div>
        <div class="control" @click="projectControl[0]++">删除</div>
      </div>
    </div>

    <div
      style="display: flex; align-items: center"
      v-if="projectControl[1] % 2 == 0"
    >
      <div class="everyProject">
        <div class="tableLeft">
          <p style="min-width: 40px">数据文件</p>
          <p
            style="
              min-width: 40px;
              padding-left: 1vw;
              font-size: 0.8vw;
              color: #aaafb0;
            "
          >
            上传日期: {{ "2022-07-12" }}
          </p>
        </div>
        <div class="concreteDivHeader">
          <div class="text" v-for="(i, index, z) in fixedData2" :key="z">
            <div class="datades">{{ index }}</div>
            <div class="data">{{ i }}</div>
          </div>
        </div>
        <div style="margin-left: 2.5vw">
          <p class="datades text">文件</p>
          <div style="display: flex">
            <div
              style="position: relative"
              v-for="(item, index) in documentName"
              :key="index"
            >
              <div class="documents">
                {{ item }}
                <div class="documentsHover">
                  <div class="iconButton"><i class="iconfont">&#xe647;</i></div>
                  <div class="iconButton"><i class="iconfont">&#xe648;</i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="control">编辑</div>
        <div class="control" @click="projectControl[1]++">删除</div>
      </div>
    </div>

    <div
      style="display: flex; align-items: center"
      v-if="projectControl[2] % 2 == 0"
    >
      <div class="everyProject">
        <div class="tableLeft">
          <p style="min-width: 40px">程序源代码</p>
          <p
            style="
              min-width: 40px;
              padding-left: 1vw;
              font-size: 0.8vw;
              color: #aaafb0;
            "
          >
            上传日期: {{ "2022-07-12" }}
          </p>
        </div>
        <div class="concreteDivHeader">
          <div class="text" v-for="(i, index, z) in fixedData3" :key="z">
            <div class="datades">{{ index }}</div>
            <div class="data">{{ i }}</div>
          </div>
        </div>
        <div style="margin-left: 2.5vw">
          <p class="datades text">文件</p>
          <div style="display: flex">
            <div
              style="position: relative"
              v-for="(item, index) in documentName"
              :key="index"
            >
              <div class="documents">
                {{ item }}
                <div class="documentsHover">
                  <div class="iconButton"><i class="iconfont">&#xe647;</i></div>
                  <div class="iconButton"><i class="iconfont">&#xe648;</i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="control">编辑</div>
        <div class="control" @click="projectControl[2]++">删除</div>
      </div>
    </div>

    <div
      style="display: flex; align-items: center"
      v-if="projectControl[3] % 2 == 0"
    >
      <div class="everyProject">
        <div class="tableLeft">
          <p style="min-width: 40px">附加文件</p>
          <p
            style="
              min-width: 40px;
              padding-left: 1vw;
              font-size: 0.8vw;
              color: #aaafb0;
            "
          >
            上传日期: {{ "2022-07-12" }}
          </p>
        </div>
        <div class="concreteDivHeader">
          <div class="text" v-for="(i, index, z) in fixedData4" :key="z">
            <div class="datades">{{ index }}</div>
            <div class="data">{{ i }}</div>
          </div>
        </div>
        <div style="margin-left: 2.5vw">
          <p class="datades text">文件</p>
          <div style="display: flex">
            <div
              style="position: relative"
              v-for="(item, index) in documentName"
              :key="index"
            >
              <div class="documents">
                {{ item }}
                <div class="documentsHover">
                  <div class="iconButton"><i class="iconfont">&#xe647;</i></div>
                  <div class="iconButton"><i class="iconfont">&#xe648;</i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <div class="control">编辑</div>
        <div class="control" @click="projectControl[3]++">删除</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "iconfont"; /* Project id 4105675 */
  src: url("//at.alicdn.com/t/c/font_4105675_bsl8rts57jm.woff2?t=1688463159108")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4105675_bsl8rts57jm.woff?t=1688463159108")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4105675_bsl8rts57jm.ttf?t=1688463159108")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.documentsFlex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

::-webkit-input-placeholder {
  /* Edge */
  color: #a8abb2;
}

.textarea {
  font-family: Hei;
  font-size: 14px;
  border: 1px solid #d4d7de;
  border-radius: 5px;
  padding: 10px;
  height: 80px;
  width: 94.5%;
}

.movePadding {
  min-height: 0;
  max-height: 55px;
}

::v-deep .m-2 {
  width: 90%;
}

.push {
  position: fixed;
  z-index: 1;
  width: 28vw;
  background-color: #ffffff;
  right: 0;
  top: 0;
  height: 100%;
  box-shadow: -2px -2px 10px rgba(77, 87, 109, 0.3);
  overflow: scroll;
}

.pushTitle {
  border-bottom: 1px solid #e4e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.iconButton {
  width: 20px;
  margin: 0.4vw;
  cursor: pointer;
}

.documents {
  width: 10vw;
  height: 30px;
  background-color: #e7e9ed;
  font-size: 0.85vw;
  margin: 0.2vw;
  border-radius: 5px;
  display: flex;
  flex: 0 0 40%;
  align-items: center;
  justify-content: center;
  user-select: none;
  min-width: 150px;
  flex: 0 0 40%;
}

.documents:hover .documentsHover {
  width: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  min-width: 150px;
}

.documentsHover {
  display: none;
  position: absolute;
  top: 0;
  width: 10vw;
  height: 30px;
  background-color: rgba(77, 87, 109, 0.85);
  font-size: 0.85vw;
  margin: 0.2vw;
  border-radius: 5px;
  transition: all 0.5s linear;
  pointer-events: none;
}

.tableLeft {
  width: 25vw;
  font-weight: 900;
  height: 3vh;
  padding-left: 0.5vw;
  text-align: left;
  border-left: 5px solid #007f99;
  min-width: 200px;
  margin: 2vh 1.5vw;
  display: flex;
  align-items: center;
}

.everyProject {
  background-color: #f5f7fa;
  padding-top: 0.8vh;
  padding-bottom: 0.8vh;
  margin-top: 3vh;
  width: 55vw;
  min-width: 800px;
}

.concreteDivHeader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-width: 900px;
  margin-left: 2.5vw;
}

.text {
  font-size: 2px;
  width: auto;
  flex: 0 0 21%;
  margin-top: 1.25vh;
  margin-bottom: 1.25vh;
  padding: 0;
  white-space: nowrap;
}

.datades {
  color: #969696;
  width: 8vw;
  min-width: 80px;
  text-align: left;
}

.data {
  text-align: left;
}

.submitOut {
  height: 40px;
  width: 100%;
  border-top: 1px solid #d5d7d8;
  margin-top: 1vh;
  position: relative;
}

.submitButton {
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 3px;
}

.buttonGrey {
  width: 80px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #d5d7d8;
  color: #565b5c;
}

.buttonGrey:active {
  background-color: #c0c0c0;
}

.buttonGreen {
  width: 80px;
  height: 34px;
  background-color: #2a7c98;
  border: 0;
}

.buttonGreen:active {
  background-color: #1b5265;
}

.control {
  margin-left: 0.5vw;
  width: 3vw;
  color: #007f99;
  cursor: pointer;
  user-select: none;
}
</style>
