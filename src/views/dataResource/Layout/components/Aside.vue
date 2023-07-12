<template>
  <div class="all">
    <div style="width: 100%; margin-bottom: 10%">
      <div style="font-weight: bolder; font-size: large">
        {{ activelabel }}
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          font-size: xx-small;
          width: 75%;
          margin-top: 7%;
          margin-bottom: 8%;
        "
      >
        <span v-for="item in rank" :index="item.id">{{ item.label }}</span>
      </div>
      <div style="background-color: #dfdfdf; width: 100%; height: 1.5px"></div>
    </div>
    <div
      style="overflow-y: hidden"
      class="border-l-2 border-[#555555] border-dashed"
    >
      <el-menu
        class="el-menu-vertical-demo"
        @open="openmenu"
        @select="selectmenu"
        @close="closemenu"
        unique-opened="true"
        :default-active="openid"
      >
        <div
          v-for="(item, index) in sidebarmenu"
          @click="handleclik(item)"
          :key="item.id"
          style="width: 100%; height: 100%"
        >
          <el-sub-menu
            v-if="
              (item.nodeType && item.nodeType == '目录') ||
              (item.children && item.children.length > 0)
            "
            :class="openid == item.id ? 'activemenu' : ''"
            :index="item.id"
          >
            <template #title>
              <component
                :is="isjiahao(item.id) ? 'Minus' : 'Plus'"
                style="height: 15px; width: 15px; margin-right: 5px"
              ></component>
              <span>{{ item.title }}</span>
            </template>
            <div
              @click.stop="handleclik(citem)"
              v-for="(citem, cindex) in item.children"
              :key="citem.id"
            >
              <el-sub-menu
                v-if="
                  (citem.nodeType && citem.nodeType == '目录') ||
                  (citem.children && citem.children.length > 0)
                "
                :class="openid == citem.id ? 'activemenu' : ''"
                :index="citem.id"
              >
                <template #title>
                  <component
                    :is="isjiahao(citem.id) ? 'Minus' : 'Plus'"
                    style="height: 15px; width: 15px; margin-right: 5px"
                  ></component>
                  <span> {{ citem.title }}</span></template
                >
                <div
                  @click.stop="handleclik(ccitem)"
                  v-for="(ccitem, ccindex) in citem.children"
                  :key="ccitem.id"
                >
                  <el-sub-menu
                    :class="openid == ccitem.id ? 'activemenu' : ''"
                    :index="ccitem.id"
                    v-if="
                      (ccitem.nodeType && ccitem.nodeType == '目录') ||
                      (ccitem.children && ccitem.children.length > 0)
                    "
                  >
                    <template #title>
                      <component
                        :is="isjiahao(ccitem.id) ? 'Minus' : 'Plus'"
                        style="height: 15px; width: 15px; margin-right: 5px"
                      ></component>
                      <span> {{ ccitem.title }}</span></template
                    >
                    <div
                      @click.stop="handleclik(cccitem)"
                      v-for="(cccitem, cccindex) in ccitem.children"
                      :key="cccitem.id"
                    >
                      <el-sub-menu
                        :class="openid == cccitem.id ? 'activemenu' : ''"
                        :index="cccitem.id"
                        v-if="
                          (cccitem.nodeType && cccitem.nodeType == '目录') ||
                          (cccitem.children && cccitem.children.length > 0)
                        "
                      >
                        <template #title>
                          <component
                            :is="isjiahao(cccitem.id) ? 'Minus' : 'Plus'"
                            style="height: 15px; width: 15px; margin-right: 5px"
                          ></component>
                          <span> {{ cccitem.title }}</span>
                        </template>
                        <div
                          @click.stop="handleclik(ccccitem)"
                          v-for="(ccccitem, ccccindex) in cccitem.children"
                          :key="ccccitem.id"
                        >
                          <el-menu-item
                            :class="openid == ccccitem.id ? 'activemenu' : ''"
                            :index="ccccitem.id"
                          >
                            <span>{{ ccccitem.title }}</span></el-menu-item
                          >
                        </div>
                      </el-sub-menu>
                      <el-menu-item
                        v-else
                        :class="openid == cccitem.id ? 'activemenu' : ''"
                        :index="cccitem.id"
                      >
                        <span>{{ cccitem.title }}</span></el-menu-item
                      >
                    </div>
                  </el-sub-menu>
                  <el-menu-item
                    v-else
                    :class="openid == ccitem.id ? 'activemenu' : ''"
                    :index="ccitem.id"
                  >
                    <span>{{ ccitem.title }}</span></el-menu-item
                  >
                </div>
              </el-sub-menu>
              <el-menu-item
                :class="openid == citem.id ? 'activemenu' : ''"
                v-else
                :index="citem.id"
              >
                <span> {{ citem.title }}</span>
              </el-menu-item>
            </div>
          </el-sub-menu>
          <el-menu-item
            :class="openid == item.id ? 'activemenu' : ''"
            v-else
            :index="item.id"
          >
            <span>{{ item.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import et from "@/bus";
import headermenu from "@/config/Layoutmenu/header";
import { gettest, getchtest } from "@/api/request";
import { useDirectoryinfoStore } from "@/store/Directoryinfo";
let activelabel = ref("");
let openid = ref("");
let sidebarmenu = ref([]); //显示侧边栏的数组
let Directoryinfo = useDirectoryinfoStore(); //建立store实例
let chmenu = []; //收集为目录的节点，用于判断是否需要发起请求
let acicon = reactive([]);
const rank = [
  {
    id: 1,
    label: "一级",
  },
  {
    id: 2,
    label: "二级",
  },
  {
    id: 3,
    label: "三级",
  },
  {
    id: 4,
    label: "四级",
  },
];
//监听store中的变化,实现侧边栏的激活态
watch(
  () => Directoryinfo.info,
  (val, old) => {
    openid.value = val.data.currentCatalogueBasicInfor.id;
  }
);
// pushchmenu函数 将为目录（即可以展开的侧边栏）的节点添加到chmenu  ，用于判断是否需要再次发起请求
let pushchmenu = async (arry) => {
  let newchmenu = arry.filter((item) => {
    if (item.nodeType && item.nodeType == "目录") {
      return item;
    }
  });
  newchmenu.forEach((item) => {
    item.isrequest = false;
  });
  chmenu = chmenu.concat(newchmenu);
};
//gettest发起请求，获取顶层目录
gettest().then(async (res) => {
  sidebarmenu.value = res.data.data;
  pushchmenu(res.data.data);
});
//创建全局事件    头部菜单的变化
et.on("headeractiveid", (e) => {
  headermenu.forEach((ele) => {
    ele.id == e ? (activelabel.value = ele.label) : "";
  });
});
//点击侧边栏触发的全局事件   在layout组件执行
let handleclik = async (event) => {
  et.emit("handleclikemenu", event);
};

//封装一个函数  递归寻找父元素，然后再将请求获取的子目录添加到其children数组中
let findElementById = async (data, id, children) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (data[i].id == id) {
      data[i].children = children;
    } else if (data[i].children && data[i].children.length > 0) {
      data[i].children = await findElementById(data[i].children, id, children);
    }
  }
  return data;
};
//getchmenu里的getchtest发起请求   获取相应子目录   await为js异步语法糖
let getchmenu = async (id) => {
  await getchtest(id).then(async (res) => {
    console.log(res);
    sidebarmenu.value = await findElementById(
      sidebarmenu.value,
      id,
      res.data.data
    );
    await pushchmenu(res.data.data);
  });
  return;
};
let deleteele = async (e) => {
  let left = 0;
  let right = 0;

  while (right < acicon.length) {
    if (acicon[right] == e) {
      // 符合条件，右指针右移
      right++;
    } else {
      // 不符合条件，将右指针的元素复制给左指针，并同时右移左右指针
      acicon[left] = acicon[right];
      left++;
      right++;
    }
  }

  // 删除剩余的不符合条件的元素
  acicon.length = left;
};

let deletebro = async (num) => {
  console.log(typeof sidebarmenu.value);
  if (sidebarmenu.value.some((ele) => ele.id == num)) {
    sidebarmenu.value.forEach(async (ele) => {
      acicon.forEach(async (e) => {
        if (ele.id == e) {
          await deleteele(e);
        }
      });
    });
    return;
  } else {
    if (sidebarmenu.value.children && sidebarmenu.value.children.length !== 0) {
      await deletebro(sidebarmenu.value.children, num);
    }
    return;
  }
};
let isjiahao = (e) => {
  if (acicon.some((ele) => ele == e)) {
    return true;
  }
  return false;
};
// 目录展开触发的函数 e为目录的id
let openmenu = async (e) => {
  await deletebro(e);
  acicon.push(e);
  console.log(acicon);
  if (
    chmenu.find((item) => item.id == e) != undefined &&
    !chmenu.find((item) => item.id == e).isrequest
  ) {
    chmenu.find((item) => item.id == e).isrequest = true;
    await getchmenu(e); //获取相应的子目录
  }
  openid.value = e;
};

//关闭目录触发的回调
let closemenu = async (e) => {
  console.log(e + "关闭了");
  openid.value = " ";
  await deleteele(e);
  console.log(acicon); // 输出: [2, 4, 6, 8]
};
let selectmenu = (e) => {
  openid.value = e;
};
</script>
<style lang="scss" scoped>
::v-deep .el-sub-menu.activemenu > .el-sub-menu__title:first-child {
  background-color: #e5eff4 !important;
  color: #000;
  border-right: 3px solid #027e98 !important;
}
.el-menu {
  background-color: #f5f7fa !important;
  border: none !important;
}
.el-menu-item {
  background-color: #f5f7fa !important;
}
.el-sub-menu {
  background-color: #f5f7fa !important;
}
.el-sub-menu ::v-deep .el-sub-menu__title {
  // padding: 0px  !important;
  font-weight: bold !important;
}
.all {
  margin-left: auto;
  width: 75%;
  height: 95%;
  padding-top: 8%;
  padding-right: 1vw;
}
::v-deep .el-menu-item.is-active {
  color: #000 !important;
}

::v-deep .activemenu.is-opened > .el-sub-menu__title:first-child {
  background-color: #e5eff4 !important;
  color: #000;
  border-right: 3px solid #027e98 !important;
}
::v-deep .el-sub-menu.is-active.is-opened .el-menu-item.is-active.activemenu {
  background-color: #e5eff4 !important;
  color: #000;
  border-right: 3px solid #027e98 !important;
}
</style>
