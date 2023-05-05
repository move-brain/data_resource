<script setup>
  import breadcrumb from "../Layout/components/breadcrumb.vue"
  import minData from "./minData.vue"
  import classdata from "./classdata.vue"
  import dataStatistics from "./dataStatistics.vue"
  import {reactive, watch,ref} from "vue"
  import {useDirectoryinfoStore} from '../store/Directoryinfo'
  import {getfather} from "../api/request"

  
  let Directoryinfo=useDirectoryinfoStore()   //建立store实例，获取当前应该显示的目录的数据，在layout组件更新过的
  let data=Directoryinfo.getinfo().data   //调用getinfo函数获取数据
  let fa="[]"
  let currentCatalogueBasicInfor=data.currentCatalogueBasicInfor!=null ? data.currentCatalogueBasicInfor : null
  let childCatalogues=data.childCatalogues&&data.childCatalogues.lenght!=0 ? data.childCatalogues:null
  let fields=data.fields&&data.fields.lenght!=0 ? data.fields : null
  const parentId =ref(currentCatalogueBasicInfor.parentId)
  const description=ref(currentCatalogueBasicInfor.description)
  const title= ref(currentCatalogueBasicInfor.title+'（ID-'+currentCatalogueBasicInfor.id+'）')
  //判断是否有父表格  
  let faform=reactive([])
   if (parentId.value!=null) {
    //如果有相应的parentId则发起请求获取父目录数据
   getfather(parentId.value).then( async res=>{
     faform.push(res.data.data)
     fa=JSON.stringify(faform)  //利用fa判断是否需要显示父表格
  })
   }
  //判断是否有子目录数据
  let chform=reactive([]) // 子表格数据
if (childCatalogues!=null) {
  childCatalogues.forEach((ele)=>{
    ele.catalogueDto.childFieldCount=ele.childFieldCount
    chform.push(ele.catalogueDto)
  })
}
// 对于classdata组件  父表格  formtype 传参为 "f" 类别表格为 "n" 子表格为其他参数
</script>
<template>
<breadcrumb></breadcrumb>
  <div class="container">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
  </div>
    <classdata v-if="parentId!=null&&fa!='[]'" :form="faform" formtype="f"  />
    <classdata v-if="chform.length!=0" formtype="s" :form="chform"/>
    <minData  v-if="fields!=null" :tableData="fields" ></minData>
    <dataStatistics v-if="currentCatalogueBasicInfor.id=='1'" />
</template>
<style scoped>
   span{
    font-size: xx-small;
   }
    .container h4 {
        font-size: 35px;
        margin: 0;
    }
    .container {
        border: none;
        border-bottom: 1px solid #e1e3e6;
        margin-bottom: 40px;
    }
</style>