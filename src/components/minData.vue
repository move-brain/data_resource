<template>
    <div ref="tablelength" id="minData">
        <h1>{{ dataDeclaration.title }} ({{ dataDeclaration.number }})</h1>
        <el-table  :data="tableData" @row-click="cellClick" :cell-style="showRow" style="width: 100%">
            <el-table-column prop="id" label="字段ID" />
            <el-table-column prop="nodeType" label="描述" />
        </el-table>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from 'vue';
import et from '../bus.js'
const props=defineProps(
    {
        tableData:Array
    }
)
let {tableData}=props
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
    et.emit('cellclick',row)
}
</script>

<style lang="scss" scoped>
#minData {
    min-width: 27.1vw;
}
#minData ::v-deep th{
    background-color: #f0f1f5;
    color:black;
    font-size: small;
    height: 60px;
}

#minData ::v-deep td {
    height: 54px;
    font-size: small;
}
</style>