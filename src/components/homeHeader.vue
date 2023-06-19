<template>
<div class="all h-[8vh] w-full max-h-[55px]" >
<el-row>
<el-col :span="8"  >
<div class="w-full h-[8vh] max-h-[55px] flex ml-4 justify-start items-center" >
<img class="h-[75%]" src="@/assets/图像 5@2x.png">
<span class="text-black  font-semibold  ml-3" >国家脑疾病临床大数据平台</span>
</div>
</el-col>
<el-col :span="10" :offset="6"  >
<div class="h-[8vh] max-h-[55px] flex justify-end items-center text-xs" >
<div class="mr-5" >
    <el-select v-model="value" class="applySelect"  placeholder="English">
    <el-option
      v-for="item in 3"
      :key="item"
      :label="item"
      :value="item"
    />
  </el-select>

</div>
<span class=" mr-5 cursor-pointer hover:text-[#007f99]" >联系我们</span>
<div style="display: flex;align-items: center;" class=" mr-5"  >
    <div @click="clicklogin" class=" m-2 cursor-pointer hover:text-[#007f99]" >登录</div>
    <div class="line" ></div>
<div @click="clickregister" class=" m-2  cursor-pointer hover:text-[#007f99]" >注册</div>
</div>
</div></el-col>
</el-row>
</div>  
</template>
<script setup >
 import et from "@/bus"
 let clicklogin=()=>{
    console.log(23222);
    et.emit("gologin")
 }
 let clickregister=()=>{
    et.emit("goperRegister")
 }

</script>
<style  scoped>
 /* .all ::v-deep .applySelect .el-icon-arrow-up:before { content: '' } */
/* .all{
    padding: 0px;
    box-shadow:0px 10px 10px #dfe1e4 ;
    position: relative;
} */
.line{
    width: 2px;
    background-color:#c4c7c8 ;
    height: 15px;
}
.login{
    display: inline-block;
}
.all ::v-deep .el-input__wrapper{
    padding: 0px;
    box-shadow: none;
}
.all ::v-deep input{
    max-width:50px;
}
.all ::v-deep input::placeholder {
        color: black;
    }
    .all ::v-deep .el-icon.el-select__caret.el-select__icon{
        color: black;
    }
.all ::v-deep .el-select{
    font-size:small ;
    color: black !important;
    --el-select-border-color-hover:none;
    --el-select-input-focus-border-color: none;
}
</style>