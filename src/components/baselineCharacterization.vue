<template>
  <div id="body">
    <div id="adress">
        <breadcrumb/>
    </div>
    <header id="dataDeclaration">
        <h1>{{ dataDeclaration.title }}</h1>
        <p>{{ dataDeclaration.content }}</p>
    </header>
    <div class="typeofson">
        <Fachform :form="formF" :formtype="formtypeF"  ></Fachform>     <!--测试通信用的formF-->
    </div>
    <div class="typeofson">
        <Fachform :form="formC"></Fachform>     <!--测试通信用的formC-->
    </div> 
    <div id="Statistics">
        <minData></minData>
    </div>
  </div>
</template>
<script  setup>
import { reactive } from 'vue'
import minData from './minData.vue';
import Fachform from './classdata.vue';
import breadcrumb from '../Layout/components/breadcrumb.vue';
let dataDeclaration = reactive({
    title: "基线特征（ID-100094）",
    content: "此类别包含到达评估中心之前已知的参与者的一些一般特征的数据，包括出生日期、性别和剥夺指数(基于参与者的邮政编码)，所有这些都从当地 NHS 初级保健信托登记处获得,以及招聘中心的名称。参与者到达评估中心后可以修改此信息。"
})


//测试数据
let formF = reactive([
    {
        dataID:1, 
        describe:'人口特征',
        number:35,
    }
])
let formtypeF='father'
let formC = reactive([
    {
        dataID:76, 
        describe:'多重剥夺指数',
    number:25,
    }
])

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
    
#dataDeclaration p{
    white-space:pre-wrap;
    min-width: 27.1vw;
    line-height: 2.8vh;
}



h1 {
        font-size: 30px;
        margin: 0;
        white-space:nowrap;
    }
    
#adress {
    margin-bottom: 3vh;
}

header h1 {
    font-size: 30px;
    margin: 0;
    white-space:nowrap;
}

header p{
    white-space:pre-wrap;
    min-width: 520px;
    line-height: 2.8vh;
    padding-bottom: 3vh;
    border-bottom:2px solid #eff0f1;
    margin-bottom: 4vh;
}
</style>