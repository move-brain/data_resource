<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      @click="handlebread(item)"
      :class="
        breadlist.length - 1 === index ? 'breaditem lastitem' : 'breaditem'
      "
      v-for="(item, index) in breadlist"
      :key="item"
      :index="index"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
import et from "@/bus";
import { watch, ref } from "vue";
import { useDirectoryinfoStore } from "@/store/Directoryinfo";
import { getallparent } from "@/api/request";

let breadlist = ref([]);
let Directoryinfo = useDirectoryinfoStore();

async function Getallparent(id) {
  breadlist.value = [];
  const res = await getallparent(id);
  breadlist.value.push(...res.data.data);
}

watch(
  () => Directoryinfo.info,
  async (val, old) => {
    breadlist.value = [];
    await Getallparent(Directoryinfo.info.data.currentCatalogueBasicInfor.id);
    breadlist.value.push(val.data.currentCatalogueBasicInfor);
  },
  { immediate: true }
);

function handlebread(e) {
  // 点击面包屑跳转到其相应的页面  具体函数在layout编写
  et.emit("handlebreaditem", e);
}
</script>
<style lang="scss" scoped>
.breaditem.lastitem ::v-deep .el-breadcrumb__inner {
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.breaditem ::v-deep .el-breadcrumb__inner {
  z-index: 1 !important;
  position: relative;
  cursor: pointer;
}

.breaditem ::v-deep span:hover {
  color: #01697f !important;
}

.lastitem ::v-deep span {
  color: #000 !important;
}
</style>
<!-- <template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      @click="handlebread(item)"
      :class="{ lastitem: index === breadlist.length - 1 }"
      v-for="(item, index) in breadlist"
      :key="item.title"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import et from '../../bus';
import { ref, watchEffect } from 'vue';
import { useDirectoryinfoStore } from '../../store/Directoryinfo';
import { getallparent } from '../../api/request';

const Directoryinfo = useDirectoryinfoStore();

const breadlist = ref([]);

async function Getallparent(id) {
  breadlist.value = [];
  const res = await getallparent(id);
  breadlist.value.push(...res.data.data);
}

watchEffect(() => {
  if (Directoryinfo.info.data) {
    Getallparent(Directoryinfo.info.data.currentCatalogueBasicInfor.id);
  }
});

function handlebread(item) {
  et.emit('handlebreaditem', item);
}
</script>

<style lang="scss" scoped>
.breaditem ::v-deep .el-breadcrumb__inner {
  z-index: 1 !important;
  position: relative;
  cursor: pointer;
}

.breaditem ::v-deep span:hover {
  color: #01697f !important;
}

.lastitem ::v-deep span {
  color: #000 !important;
}

.lastitem ::v-deep .el-breadcrumb__inner {
  cursor: pointer;
  position: relative;
  z-index: 1;
}
</style> -->
