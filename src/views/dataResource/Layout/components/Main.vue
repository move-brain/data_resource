<template>
  <div style="height: 2vh; width: 100%;" ></div>
  <router-view :key="key" />
</template>
<script setup>
import { useRoute } from 'vue-router';
const route=useRoute()
import {computed, watch,ref} from "vue"
let key=ref('')
watch(()=>route.path,(val,old)=>{
  console.log(val);
  key.value=route.name !== undefined
        ? route.name + new Date()
        : route + new Date();
})
// import breadcrumb from './breadcrumb.vue'
</script>
<style  scoped>
</style>