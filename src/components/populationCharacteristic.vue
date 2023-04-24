<script setup>
  import {ref} from "vue"
  import classdata from "./classdata.vue"
  import dataStatistics from "./dataStatistics.vue"
  import {reactive} from "vue"

  const form = reactive([
    {
      dataID: '2',
      describe: '持续特征',
      number: '4'
    },
    {
      dataID: '100094',
      describe: '基线特征',
      number: '6+25'
    },
  ])

    const title = ref("人口特征（ID-1）")
    const description = ref("该类别包含关于参与者的一些一般特征的数据")
</script>

<template>
  <div class="container">
    <h4>{{title}}</h4>
    <p>{{description}}</p>
  </div>
    <classdata formtype="son" :form="form"/>
    <dataStatistics />
</template>

<style scoped>
    .container h4 {
        font-size: 35px;
        margin: 0;
    }

    .container {
        border: none;
        border-bottom: 1px solid #e1e3e6;
        margin-bottom: 40px;
    }
</style>