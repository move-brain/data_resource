<script>
import dataSearch_header from '@/views/dataResource/components/datasearch/components/barBackGround.vue';
import barBackGround from '@/views/dataResource/components/datasearch/components/barBackGround.vue';
import searchKey from '@/views/dataResource/components/datasearch/components/barBackGround.vue';
import Header from '@/views/dataResource/components/datasearch/components/barBackGround.vue';
export default{
    components:{
        dataSearch_header,
        barBackGround,
        searchKey,
        Header},
}
</script>
<template>
     <div class="datasearch">
            <dataSearch_header></dataSearch_header>
            <barBackGround></barBackGround>
            <searchKey></searchKey>
        </div>
</template>
<style scoped>
.datasearch{
    background-color: #f5f7fa;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 180%;
    position: absolute;
}
</style>