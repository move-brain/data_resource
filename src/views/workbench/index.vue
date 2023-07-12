<template>
  <div class="all h-full flex flex-col bg-[#f0f2f5]">
    <div
      class="w-full bg-use h-[8vh] max-h-[55px] relative top-0 box-border px-[1.5%] flex justify-between"
    >
      <div class="h-full w-fit flex items-center">
        <img class="h-[65%] mr-[1vw]" src="@/assets/组 14@2x.png" />
        <span
          @click="clickwork"
          class="cursor-pointer font-black 2xl:text-base text-sm text-[#ffffff]"
          >工作台</span
        >
      </div>
      <div class="h-full w-fit flex items-center">
        <div class="w-[8vw] max-h-[55px] h-full flex items-center">
          <svgicon
            style="height: 45%; width: min-content; cursor: pointer"
            className="allsvg"
            iconName="icon-a-naolingtixingtongzhi"
            color="#ffffff"
            @click="gomsg"
          ></svgicon>
          <svgicon
            @click="clickgowuche"
            style="height: 45%; width: min-content; cursor: pointer"
            iconName="icon-gouwuche1"
            color="#ffffff"
          ></svgicon>
          <el-icon @click="goindex" class="ml-3 cursor-pointer" size="22px"
            ><House color="#ffffff"
          /></el-icon>
        </div>
        <div
          class="flex h-full items-center justify-between max-w-fit w-[8vw] ml-5"
        >
          <svgicon
            style="height: 45%; width: 20%"
            iconName="icon-touxiangtongyong"
            color="#ffffff"
          ></svgicon>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ username }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(item, index) in dropdownlist"
                  :key="item.id"
                  @click="clickusercenter(item)"
                  >{{ item.text }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>
<script setup>
import { ref } from "vue";
let username = ref("ggbond");
import { useRouter } from "vue-router";
import et from "@/bus";
let router = useRouter();
let clickwork = () => {
  router.push({ name: "workindex" });
};
let clickgowuche = () => {
  router.push({ name: "gowuche" });
};
let goindex = () => {
  router.push({ name: "index" });
};
let gomsg = () => {
  router.push({ name: "msgCenter" });
};
let dropdownlist = [
  {
    id: 1,
    text: "用户中心",
    pathname: "basicinformation",
  },
  {
    id: 2,
    text: "设置",
    pathname: "",
  },
  {
    id: 3,
    text: "密码",
    pathname: "",
  },
  {
    id: 4,
    text: "帮助",
    pathname: "",
  },
  {
    id: 4,
    text: "退出登录",
    pathname: "",
  },
];
//点击进入人员管理
et.on("gopersonmanage", (e) => {
  router.push({ name: "personmanage" });
});

//点击进入项目管理
et.on("goproject", (e) => {
  router.push({ name: "manage" });
});
//点击进入用户中心
et.on("clickuser", (e) => {
  clickusercenter({ pathname: "basicinformation" });
});
let clickusercenter = (e) => {
  router.push({ name: e.pathname });
};
</script>

<style scoped>
.allicon div {
  height: 6vw;
  width: 35%;
  box-sizing: border-box;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.allicon div:hover {
  background-color: #007f99;
  box-shadow: 8px 8px 8px #8ec2cf;
  color: white;
  border-radius: 8px;
}
.allicon span {
  font-size: small;
  margin-bottom: 6px;
  /* color: #343737; */
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: none;
  display: flex;
  align-items: center;
}
.el-dropdown span {
  color: white;
}

.el-dropdown {
  --el-dropdown-menu-box-shadow: none;
  --el-dropdown-menuItem-hover-fill: none;
  --el-dropdown-menuItem-hover-color: none;
  color: #007f99 !important;
  outline: none;
}

.el-dropdown:hover {
  outline: none;
}
/* .all ::v-deep .el-input__wrapper {
  padding: 0px;
  box-shadow: none;
} */
/* .all ::v-deep input {
  max-width: 50px;
}
.all ::v-deep input::placeholder {
  color: black;
}*/
.all ::v-deep .el-icon.el-select__caret.el-select__icon {
  color: black;
}
.all ::v-deep .el-select {
  font-size: small;
  color: black !important;
  --el-select-border-color-hover: none;
  --el-select-input-focus-border-color: none;
}
</style>
