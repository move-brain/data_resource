<template>
    <div ref="tablelength" id="minData">
        <h2>{{ title }}</h2>
        <el-table  :data="form" @row-click="cellClick" :cell-style="showRow" style="width: 100%">
            <el-table-column prop="dataID" label="类别ID" :width="length.w1" />
            <el-table-column prop="describe" label="名称" :width="length.w2" />
            <el-table-column prop="number" label="数目" :width="length.w3" />
        </el-table>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, nextTick } from 'vue';
import et from '../bus.js'
// import et from '../bus' 
const props = defineProps({
    form:{           //定义props
            type:Array,
        },
        formtype:String
})
let form=reactive(props.form)  // 当整合组件时把这两句话恢复，下面的数据只是拿来展示
let formtype=props.formtype
let title=ref(formtype=='father'? '父类别（'+form.length+'）' : formtype=='notfach'? '类别（'+form.length+'）':'子类别（'+form.length+'）')

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
        length.w1 = tablelength.value.clientWidth * 0.35;
        length.w2 = tablelength.value.clientWidth * 0.55;
        length.w3 = tablelength.value.clientWidth * 0.1;
    });
};
const showRow = ({ _, column }) => {
    let styleJson = {
        "color": "#5ba3b7",
        "cursor": "pointer"
    }
    if (column.label === "类别ID") {
        return styleJson  // 修改的样式
    }
}
const cellClick = ( row ) => {
    et.emit('fachtable',row.dataID)
}
</script>
<style lang="scss" scoped>
#minData {
    width: 100%;
}

#minData :deep(th){
    background-color: #f0f1f5;
    color:black;
    font-size: 16px;
    height: 40px;
}

#minData :deep(td) {
    height: 40px;
}

// .el-table {
//     width: 700px;
// }
</style>