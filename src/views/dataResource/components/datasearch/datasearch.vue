<script>
import barBackGround from '@/views/dataResource/components/datasearch/components/barBackGround.vue';
import searchKey from '@/views/dataResource/components/datasearch/components/searchKey.vue';
export default{
    components:{
        barBackGround,
        searchKey,
    },
}
</script>
<template>
     <div class="datasearch">
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