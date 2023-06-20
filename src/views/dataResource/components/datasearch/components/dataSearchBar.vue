<script>
export default{
    data(){
        return{
            
        }
    },
    methods: {
        searchon(){
            console.log('onclick')
        }
    },
}
</script>
<template>
<div id="searchbar">
    <input id="search" type="text" placeholder="请输入关键词" /><button id="searchbutton" @click="searchon"><img   src="@/assets/img/searchbotton.svg"></button>
</div>
</template>
<style scoped>
#searchbar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
}
#searchbar input{
    height: 6vh;
    width: 40vw;
    border-style: none;
    border: none;
    text-indent: 3vw;
    font-size: 2.4vh;
    color: #cacdce;
    border-top-left-radius: 3vh;
    border-bottom-left-radius: 3vh;
    box-sizing: border-box;
    outline: none;
}
#searchbar button{
    height: 6vh;
    width: 6vw;
    border: none;
    background-color: #ffffff;
    border-top-right-radius: 3vh;
    border-bottom-right-radius: 3vh;
    outline: none;
}
#searchbar button img{
    height:5.5vh;
    width: 1.5vw;

}
</style>