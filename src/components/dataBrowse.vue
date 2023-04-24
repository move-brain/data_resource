<template>
    <div id="body">
        <div id="dataDeclaration">
            <header>
                <h1>{{ dataDeclaration.title1 }}</h1>
                <span>{{ dataDeclaration.subtitle1 }}</span>
            </header>
            <p>{{ dataDeclaration.content }}</p>
        </div>
        <div id="Statistics">
            <header>
                <h1>{{ dataDeclaration.title2 }}</h1>
                <span>{{ dataDeclaration.subtitle2 }}</span>
            </header>
            <DataStatistics></DataStatistics>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import DataStatistics from './dataStatistics.vue';
const dataDeclaration = reactive({
    title1: "数据说明",
    title2: "数据统计",
    subtitle1: "数据来源、分类标准、数据规模等数据相关说明",
    subtitle2: "数据从哪些方面统计的简单介绍",
    content: "国家脑疾病临床大数据平台是我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展。下设数据资源库、工作台、智能分析平台，分别为***功能。\n\n我国首个面向脑疾病临床数据的大规模平台，提供了数据存储、获取、展示、分析等一系列功能，方便研究人员进行研究，促进脑疾病研究发展。"
})
</script>

<style lang="scss" scoped>
    #body {
        text-align: left;
        width: 100%;
    }

    #dataDeclaration {
        width: 100%;
        min-width: 10px;
        margin-bottom: 7.5vh;
    }

    header {
        display: flex;
    }

     h1 {
        font-size: 30px;
        margin: 0;
        white-space:nowrap;
    }

     span {
        line-height: 50px;
        padding-left: 40px;
        color: #a4a7a8;
        white-space:nowrap;
    }

    #dataDeclaration p{
        white-space:pre-wrap;
        min-width: 520px;
        line-height: 2.8vh;
    }
</style>