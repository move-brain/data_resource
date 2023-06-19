<script>
import datasearch from '@/views/dataResource/components/datasearch/datasearch.vue'
export default{
    components:{
        datasearch
    }
}
</script>
<template>
<div class="search">
    <div id="background">
        <div id="title"><strong>数据搜索</strong></div>
    </div>
    <datasearch></datasearch>
</div>
</template>
<style scoped>
.search{
    background: url("@/assets/img/searchbackground.png") ;
    background-size: 100% 100%;
    height: 23vh;
    width: 100%;
    background-color: rgb(70, 223, 223);
    
}
#title{
    height: 10vh;
    width: 100%;
    text-align: center;
    line-height: 8vh;
    font-size: 4vh;
    opacity: 0.95;
    color: #303333;
}
</style>