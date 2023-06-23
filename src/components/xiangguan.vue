<template>
    <div class=" h-full w-full min-h-fit bg-w rounded-lg p-[3%]  flex justify-start flex-col" >
 <div class="w-full h-fit flex justify-between" > <span class=" font-bold" >相关新闻</span>
<div  ><span class="text-[#939899] text-xs" >查看更多</span>
  <el-icon :size="10" ><ArrowRightBold color="#939899" :size="20" /></el-icon>
</div>
</div>
  <div class="w-full p-[1%]" >
<ul>
  <li v-for="item in datali" :key="item.id" class="w-full flex justify-between mt-3" >
<span class="2xl:text-sm text-[xx-small] mr-3"  >{{ item.text }}</span>
<span class="2xl:text-sm text-[xx-small] text-[#939899]" >{{item.date}}</span>
  </li>

</ul>
  </div>
  </div>
</template>
<script setup >
let datali=[
  {
      id:1,
      text:'6 篇 Science 齐发 ， 首次破译完整的人类基因组 ， 百人科学家团队揭开背后的神秘面纱',
      date:'2022-03-12'
  },
  {
      id:2,
      text:'全国肿瘤防治宣传周丨癌症防治早早行动 ， 癌症防治核心要点早知道 ！',
      date:'2022-03-12'
  },
  {
      id:3,
      text:'老年人新冠疫苗接种科普问答',
      date:'2022-03-12'
  },
  {
      id:4,
      text:'《 细胞 》 ： 环状 RNA 技术应对新冠突变 ， 魏文胜团队发表新型疫苗结果',
      date:'2022-03-12'
  },
  {
      id:5,
      text:'关于发布推荐性卫生行业标准 《 妇幼保健机构医用设备配备标准 》 的通告',
      date:'2022-03-12'
  },
]
</script>
<style scoped >
li{
  /* list-style-position:outside; */
  list-style: disc !important;
}
ul{
  list-style: disc !important;
  /* list-style-position:outside; */
}
</style>