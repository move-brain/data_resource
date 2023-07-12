<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Main from "./components/Main.vue";
import Aside from "./components/Aside.vue";
// import Header from './components/Header.vue'
import et from "@/bus.js"; //使用mitt构建全局事件总线
import { useRouter } from "vue-router";
import { getoverview, getdatafield } from "@/api/request";
import { useDirectoryinfoStore } from "@/store/Directoryinfo";
import { usedatafieldStore } from "@/store/datafield.js";
let datafield = usedatafieldStore();
let router = useRouter();
let Directoryinfo = useDirectoryinfoStore();
//  封装获取目录全部信息的函数
let getmainmes = async (e) => {
  console.log(e);
  //getoverview获取目录所需要显示的全部信息
  await getoverview(e).then(async (res) => {
    let info = res.data;
    //pinia    调用setinfo函数更新store中的显示目录的全部信息  即Main组件显示的信息
    await Directoryinfo.setinfo(info);
  });
  return;
};

//点击侧边栏具体触发的事件
et.on("handleclikemenu", async (e) => {
  let infoid = "";
  if (Object.keys(Directoryinfo.info).length != 0) {
    infoid = Directoryinfo.info.data.currentCatalogueBasicInfor.id;
  }
  if (e.id != infoid) {
    await getmainmes(e.id);
  } //使用await语法糖  实现js异步
  router.push({
    name: "poc",
    params: { id: Directoryinfo.info.data.currentCatalogueBasicInfor.id },
  }); //此为动态路由,已当前显示的目录的id作为参数
});

//点击面包屑项所具体触发的事件
et.on("handlebreaditem", async (e) => {
  await getmainmes(e.id);
  router.push({
    name: "poc",
    params: { id: Directoryinfo.info.data.currentCatalogueBasicInfor.id },
  });
});
//在点击了数据字段表格触发的事件
et.on("cellclick", (e) => {
  //getdatafield  发起请求获取相应数据字段的全部信息
  getdatafield(e.id).then(async (res) => {
    // 调用setdatafield 更新了store中的数据
    await datafield.setdatafield(res.data.data);
    router.push({
      name: "fielddata",
      params: { id: res.data.data.currentFieldBasicInfor.id },
    });
  });
});
//点击了父 子 类  别的组件触发的事件
//非数据字段表格的点击事件
et.on("fachtable", async (e) => {
  await getmainmes(e.row.id);
  router.push({
    name: "poc",
    params: { id: Directoryinfo.info.data.currentCatalogueBasicInfor.id },
  });
});
</script>
<style scoped>
.el-aside {
  background-color: #f5f7fa;
  width: 28vw;
  min-height: 92vh;
  height: auto;
  overflow-y: hidden;
}
</style>
