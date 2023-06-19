<template>
<div class="w-[100%] h-[100%] bg-[#e4e6e9] flex justify-center" >
<div  class="w-[70%] h-[90vh] relative max-w-[1000px] ">
<div class="h-[10%] flex justify-center items-center text-2xl font-bold " ><span>注册账号</span></div>
<div  class="w-[100%] h-[90%]   text-sm">
<div class="h-[8%] w-[100%] px-[2%] border-solid bg-white  border-b border-[#e1e3e6]">
<el-row class=" h-[100%] flex items-center">
<el-col  :span="6" >
<div class=" flex items-center " >
<el-icon class=" cursor-pointer" color="#0b849d" ><ArrowLeft /></el-icon> 
<span @click="goorRegister" class="text-[#0b849d] cursor-pointer  text-xs"  >切换机构注册</span>   
</div></el-col><el-col :span="12">
<div class="flex justify-center items-center  font-bold text-lg" ><span>个人注册</span></div></el-col><el-col  :span="6" >
<div class=" flex flex-row-reverse  text-xs" >
<span @click="gologin" class="text-[#0b849d] cursor-pointer  ml-2">立即登录</span><span >已有账号?</span>
</div></el-col></el-row>
</div>
<div class="h-[78%] w-[100%]  bg-white" > 
    <el-scrollbar class="w-[100%]" >
        <el-form
        :rules="accountinfoformrules"
        label-position="right"
    :model="accountinfoform"
    class="h-fit"
       size="small"
  > 
    <el-form-item label="用户名："  class="w-[100%]" prop="username">
      <div class=" absolute -left-48 flex h-[20px] items-center"  >
        <div  class="h-[55%] w-[2.5px] bg-[#007f99] mr-1" ></div>
        <span class=" font-bold text-sm" >账户信息</span></div>
        <el-tooltip
        effect="light"
        placement="right-start"
        :visible="visible"
      >
      <template #content>
<div class="w-[15.5vw] h-fit  flex justify-start flex-col items-center" >
<div class="allgo w-[100%] flex justify-start flex-col  items-start text-[#09839d]" >
<div ><svgicon class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon><span>最少8个字符</span></div>
<div class="h-fit w-fit flex" ><div class="w-[12px] h-[52px] flex flex-col mr-2" ><svgicon class= " w-[12px] h-[12px]" iconName="icon-kongxinduigou" color="#09839d" ></svgicon></div><span class="h-fit" >可使用英文、数字、下划线组合、不
能只有数字或下划线,之须包含英文</span></div>
</div>
</div>
</template>
<el-input placeholder="请输入" v-model="accountinfoform.username" />
</el-tooltip>
     
    </el-form-item>
    <el-form-item label="密码：" prop="password" >

      <el-tooltip
        effect="light"
        placement="right-start"
        :visible="visible"
      >
      <template #content>
<div class="w-fit  h-fit  flex justify-start flex-col items-center" >
<div class="allgo w-[100%] flex justify-start flex-col  items-start text-[#09839d]" >
<div ><svgicon class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>最少8个字符</div>
<div><svgicon class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>不能全为数字、字母或特殊符号</div>
<div><svgicon class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>数字、字母、特殊字符任意组合</div>
</div>
</div>
</template>
<el-input placeholder="请输入" v-model="accountinfoform.password" />
</el-tooltip>
     
    </el-form-item>
    <el-form-item label="确认密码："   prop="affirmpassword" >
      <el-input v-model="accountinfoform.affirmpassword" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="邮箱："   prop="email">
      <el-tooltip
        effect="light"
        placement="right-start"
        :visible="visible"
      >
      <template #content>
<div class="w-[15.5vw] h-fit  flex justify-start flex-col items-center text-[#565b5c]" >
<span>
  审核信息管理员以邮件形式通知，请注意查收邮件！
</span>
</div>
</template>
      <el-input v-model="accountinfoform.email" placeholder="请输入" />
</el-tooltip>
    </el-form-item>
    <el-form-item label="邮箱验证码："  prop="emailcode" class="w-[100%] flex  items-center">
      <el-input placeholder="请输入" v-model="accountinfoform.emailcode" class="havebutton"  />
      <el-button class="b1" plain >获取验证码</el-button>
  </el-form-item>
  </el-form>
  <el-form
  label-position="right"
    :model="personinfoform"
    size="small"
    class=" mt-[36px]"
    :rules="personinfoformrules"
  >
    <el-form-item label="真实姓名：" prop="username" >
      <div class=" absolute -left-48 flex h-[20px] items-center"  >
      <div  class="h-[55%] w-[2.5px] bg-[#007f99] mr-1" ></div>
        <span class=" font-bold text-sm" >个人信息</span></div>
      <el-input v-model="personinfoform.username" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="性别：">
      <el-select v-model="personinfoform.sex" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
    </el-form-item>
    <el-form-item label="证件类型：" prop="certificatetype" >
      <el-select v-model="personinfoform.certificatetype" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
    </el-form-item>
    <el-form-item label="证件号码："  prop="certificatetypecode">
      <el-input v-model="personinfoform.certificatetypecode" placeholder="请输入" />
    </el-form-item>
    <el-form-item label="学历：" prop="education">
      <el-select v-model="personinfoform.education" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
    </el-form-item>
    <el-form-item label="职称：" prop="professional">
      <el-select v-model="personinfoform.professional" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />  </el-select>
    </el-form-item>
    <el-form-item label="手机号：" prop="phonenumber">
      <el-input v-model="personinfoform.phonenumber" placeholder="请输入" />
    </el-form-item>
  </el-form>
  <el-form
  label-position="right"
    :model="organizationinfoform"
    size="small"
    class=" mt-[36px]"
    :rules="organizationinfoformrules"
  >
    <el-form-item label="机构名称："  prop="name">
      <div class=" absolute -left-48 flex h-[20px] items-center"  >
      <div  class="h-[55%] w-[2.5px] bg-[#007f99] mr-1" ></div>
        <span class=" font-bold  text-sm" >机构信息</span></div>
        <el-select v-model="organizationinfoform.name" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />  </el-select>
    </el-form-item>
    <el-form-item label="机构邮箱：" prop="organizationemail">
      <el-input v-model="organizationinfoform.organizationemail" />
    </el-form-item>
    <el-form-item label="部门：" prop="department">
      <el-select v-model="organizationinfoform.department" class="w-[100%]" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />  </el-select>
    </el-form-item>
    <el-form-item label="职位：" prop="position">
      <el-input v-model="organizationinfoform.position" />
    </el-form-item>
  </el-form>
  </el-scrollbar>
</div>
<div class=" bg-white h-fit w-[100%] b border-solid  border-t border-[#e1e3e6] flex justify-between items-center flex-col"  >
<div class="w-[41.25%]  min-h-fit flex items-center" >
  <el-checkbox/>
  <div  class="  ml-4 text-xs" ><span>已阅读并同意</span><span class="text-[#007f99] cursor-pointer" >
    《国家疾病临床大数据平台用户注册须知》
  </span></div>
</div>
<el-button color="#007f99" type="primary" class="w-[41.25%] mt-2 mb-3" size="small" >注册</el-button>
</div>
</div>
</div>
</div>
</template>
<script setup >
import  et  from "@/bus";
import { reactive,ref } from "vue";
let value=ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
let accountinfoformrules=reactive({
  username: [
          { required: true,min:6,max:16, message: '用户名不符合设置要求', trigger: 'blur' },
          // { min:6,max:16, message: '用户名长度最少6位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        affirmpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        emailcode: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        
})
let personinfoformrules=reactive({
  username: [
          { required: true,min:6,max:16, message: '请填写您的真实姓名', trigger: 'blur' },
          // { min:6,max:16, message: '用户名长度最少6位', trigger: 'blur' }
        ],
        certificatetype: [
          { required: true, message: '请选择您的证件类型', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        certificatetypecode: [
          { required: true, message: '请输入您的证件号码', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ], 
})
let organizationinfoformrules=reactive({
  name: [
          { required: true, message: '请填写您的机构名称', trigger: 'blur' },
          // { min:6,max:16, message: '用户名长度最少6位', trigger: 'blur' }
        ],
        organizationemail: [
          { required: true, message: '请输入您的机构邮箱', trigger: 'blur' },
          // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],}

)
let accountinfoform=reactive({
    username:'',
    password:'',
    affirmpassword:'',
    email:'',
    emailcode:''
})
let personinfoform=reactive({
    username:'',
    sex:'',
    education:'',
    professional:'',
    certificatetype:'',
    certificatetypecode:'',
    phonenumber:'',
})
let organizationinfoform=reactive({
  name:'',
  department:'',
    organizationemail:'',
    position:'',
})


let goorRegister=()=>{
  et.emit("goorRegister")
}
let gologin=()=>{
  et.emit("gologin")
}
</script  >
<style scoped>
.allgo div{
display: flex;
align-items: center;
}
.el-checkbox ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner{
  background-color:#007f99 ;
  border-color:#007f99;
}
.b1{
  min-width: min-content;
  color: black;
}
.el-form-item  ::v-deep label{
min-width: fit-content;
width:25%;
color: black;
}
.el-scrollbar ::v-deep .el-scrollbar__wrap{
width: 100%;

}
.el-scrollbar ::v-deep .el-scrollbar__view{
  margin-top: 18px;
width: 55%;
position: relative;
right: -15.675%;
}
.b{
    box-shadow:0px -5px 6px #dfe1e4 ;
    position: relative;
}
.el-input ::v-deep input{
  color: black;
}
.el-checkbox ::v-deep span{
    font-size: 16px !important;
    }
.el-input ::v-deep span{
        font-size: small;
    }
     ::v-deep .el-input.havebutton{
      width: 65%;
  }
   ::v-deep .el-button.b1{
    width: 28%;
  }
  .el-form-item  ::v-deep .el-form-item__content{
    display: flex;
    justify-content: space-between;
  }
 </style>