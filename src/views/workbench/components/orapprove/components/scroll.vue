<template>
  <div class="scroll bg-w h-full w-full">
    <div class="w-full px-3 h-full">
      <el-tabs
        v-model="activeName"
        class="w-full h-full"
        @tab-click="handleClick"
        stretch="true"
      >
        <el-tab-pane label="全部" name="1">
          <div class="h-full w-full">
            <el-scrollbar class="w-full" :height="scrollhei">
              <div class="p-2">
                <el-input placeholder="请输入" class="input-with-select">
                  <template #prepend>
                    <el-select placeholder="申请人" style="width: 115px">
                      <el-option label="Restaurant" value="1" />
                      <el-option label="Order No." value="2" />
                      <el-option label="Tel" value="3" />
                    </el-select>
                  </template>
                  <template #append>
                    <el-button plain :icon="Search" />
                  </template>
                </el-input>
              </div>
              <div
                v-for="item in alldatalist"
                class="mx-2 p-3 mb-3 outline-[1.5px] outline outline-[#e1e3e6] hover:outline-[#007f99] hover:shadow-md rounded-[2px]"
              >
                <div class="flex justify-between items-center">
                  <span class="text-sm font-bold">{{ item.title }}</span>
                  <div
                    :style="{
                      color:
                        item.type == '待审批'
                          ? '#3a73e6'
                          : item.type == '驳回'
                          ? '#e64848'
                          : '#29b586',
                      backgroundColor:
                        item.type == '待审批'
                          ? '#ebf1fd'
                          : item.type == '驳回'
                          ? '#fdecec'
                          : '#e8f7f2',
                    }"
                    class="w-[50px] py-1 bg-[#ebf1fd] text-[#3a73e6] flex justify-center items-center"
                  >
                    <span class="text-xs">{{ item.type }}</span>
                  </div>
                </div>

                <div class="flex flex-col justify-start text-xs">
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">姓名 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.name }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">部门 </span>
                    <span class="ml-2 text-[#595e5f]">{{
                      item.department
                    }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">职位 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.position }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待审批" name="2">
          <div class="h-full w-full">
            <el-scrollbar class="w-full" :height="scrollhei">
              <div class="p-2">
                <el-input placeholder="请输入" class="input-with-select">
                  <template #prepend>
                    <el-select placeholder="申请人" style="width: 115px">
                      <el-option label="Restaurant" value="1" />
                      <el-option label="Order No." value="2" />
                      <el-option label="Tel" value="3" />
                    </el-select>
                  </template>
                  <template #append>
                    <el-button plain :icon="Search" />
                  </template>
                </el-input>
              </div>
              <div
                v-for="item in notapproved"
                class="mx-2 p-3 mb-3 outline-[1.5px] outline outline-[#e1e3e6] hover:outline-[#007f99] hover:shadow-md rounded-[2px]"
              >
                <div class="flex justify-between items-center">
                  <span class="text-sm font-bold">{{ item.title }}</span>
                  <div
                    :style="{
                      color:
                        item.type == '待审批'
                          ? '#3a73e6'
                          : item.type == '驳回'
                          ? '#e64848'
                          : '#29b586',
                      backgroundColor:
                        item.type == '待审批'
                          ? '#ebf1fd'
                          : item.type == '驳回'
                          ? '#fdecec'
                          : '#e8f7f2',
                    }"
                    class="w-[50px] py-1 bg-[#ebf1fd] text-[#3a73e6] flex justify-center items-center"
                  >
                    <span class="text-xs">{{ item.type }}</span>
                  </div>
                </div>

                <div class="flex flex-col justify-start text-xs">
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">姓名 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.name }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">部门 </span>
                    <span class="ml-2 text-[#595e5f]">{{
                      item.department
                    }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">职位 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.position }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </el-scrollbar>
          </div></el-tab-pane
        >
        <el-tab-pane label="已审批" name="3">
          <div class="h-full w-full">
            <el-scrollbar class="w-full h-full" :height="scrollhei">
              <div class="p-2">
                <el-input placeholder="请输入" class="input-with-select">
                  <template #prepend>
                    <el-select placeholder="申请人" style="width: 115px">
                      <el-option label="Restaurant" value="1" />
                      <el-option label="Order No." value="2" />
                      <el-option label="Tel" value="3" />
                    </el-select>
                  </template>
                  <template #append>
                    <el-button plain :icon="Search" />
                  </template>
                </el-input>
              </div>
              <div
                v-for="item in approved"
                class="mx-2 p-3 mb-3 outline-[1.5px] outline outline-[#e1e3e6] hover:outline-[#007f99] hover:shadow-md rounded-[2px]"
              >
                <div class="flex justify-between items-center">
                  <span class="text-sm font-bold">{{ item.title }}</span>
                  <div
                    :style="{
                      color:
                        item.type == '待审批'
                          ? '#3a73e6'
                          : item.type == '驳回'
                          ? '#e64848'
                          : '#29b586',
                      backgroundColor:
                        item.type == '待审批'
                          ? '#ebf1fd'
                          : item.type == '驳回'
                          ? '#fdecec'
                          : '#e8f7f2',
                    }"
                    class="w-[50px] py-1 bg-[#ebf1fd] text-[#3a73e6] flex justify-center items-center"
                  >
                    <span class="text-xs">{{ item.type }}</span>
                  </div>
                </div>

                <div class="flex flex-col justify-start text-xs">
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">姓名 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.name }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">部门 </span>
                    <span class="ml-2 text-[#595e5f]">{{
                      item.department
                    }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">职位 </span>
                    <span class="ml-2 text-[#595e5f]">{{ item.position }}</span>
                  </div>
                  <div class="mt-2">
                    <span class="text-[#aeb1b2]">{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </el-scrollbar>
          </div></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
const activeName = ref("1");
import { Search } from "@element-plus/icons-vue";
let alldatalist = ref([
  {
    title: "加入机构申请",
    type: "待审批", //  succeed代表审核通过 pending代表待审批 err代表驳回
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
  {
    title: "加入机构申请",
    type: "驳回",
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
  {
    title: "加入机构申请",
    type: "待审批",
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
  {
    title: "加入机构申请",
    type: "通过",
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
  {
    title: "加入机构申请",
    type: "待审批",
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
  {
    title: "加入机构申请",
    type: "待审批",
    name: "张筱雨",
    department: "xxx部门/技术部/开发组",
    position: "开发工程师",
    date: "2022-8-11 12:00:00",
  },
]);
let approved = ref(
  computed(() => {
    return alldatalist.value.filter((ele) => {
      return ele.type !== "待审批";
    });
  })
);
let notapproved = ref(
  computed(() => {
    return alldatalist.value.filter((ele) => {
      return ele.type == "待审批";
    });
  })
);
let scrollhei = ref("600px");
onMounted(() => {
  scrollhei.value = window.innerHeight + "px";
  // console.log(approved);
});
window.onresize = () => {
  scrollhei.value = window.innerHeight + "px";
};
</script>

<style scoped>
.el-tab-pane {
  height: 100%;
}

.demo-tabs ::v-deep .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 24px;
  font-weight: 800;
}
.scroll ::v-deep .el-tabs__item.is-active {
  color: #007f99 !important;
}
.scroll ::v-deep .el-tabs__active-bar {
  background-color: #007f99 !important;
}
.scroll ::v-deep .el-select {
  width: 80px !important;
}
.el-select ::v-deep input::placeholder {
  font-size: smaller;
  color: black;
}
</style>
<style>
.el-tabs__item:hover {
  color: #007f99 !important;
}
</style>
