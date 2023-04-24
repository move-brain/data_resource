<template>
    <div ref="tablelength" id="minData">
        <h2>{{ dataDeclaration.title }} ({{ dataDeclaration.number }})</h2>
        <el-table  :data="tableData" @row-click="cellClick" :cell-style="showRow" style="width: 100%">
            <el-table-column prop="dataID" label="字段ID" />
            <el-table-column prop="describe" label="描述" />
        </el-table>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from 'vue';
import et from '../bus.js'
const tableData = reactive([
{
    dataID: '190',
    describe: '失访原因'
},
{
    dataID: '191',
    describe: '失访日期'
},
{
    dataID: '20005',
    describe: '电子邮件访问'
},
{
    dataID: '110007',
    describe: '通讯通讯，发送日期'
}
])
const dataDeclaration = reactive({
    title: '数据字段',
    number: tableData.length
})
const tablelength = ref("")
const length = reactive({ w1: 0, w2: 0 })
onMounted(() => {
    getWidth();
        window.addEventListener('resize',getWidth);
}),
onUnmounted(() => {
        window.removeEventListener('resize',getWidth);
});
const getWidth = () => {
    nextTick(() => {
        length.w1 = tablelength.value.clientWidth * 0.33;
        length.w2 = tablelength.value.clientWidth * 0.66;
    });
};
const showRow = ({ _, column }) => {
    let styleJson = {
        "color": "#5ba3b7",
        "cursor": "pointer"
    }
    if (column.label === "字段ID") {
        return styleJson  // 修改的样式
    }
}
const cellClick = ( row ) => {
    et.emit('cellclick',row.dataID)
}
</script>

<style lang="scss" scoped>
#minData {
    min-width: 27.1vw;
}

#minData ::v-deep th{
    background-color: #f0f1f5;
    color:black;
    font-size: 18px;
    height: 60px;
}

#minData ::v-deep td {
    height: 54px;
}
</style>