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
    <span @click="goperRegister" class="text-[#0b849d] cursor-pointer  text-xs"  >切换个人注册</span>   
    </div></el-col><el-col :span="12">
    <div class="flex justify-center items-center  font-bold text-lg" ><span>个人注册</span></div></el-col><el-col  :span="6" >
    <div class=" flex flex-row-reverse  text-xs" >
    <span @click="gologin" class="text-[#0b849d] cursor-pointer  ml-2">立即登录</span><span >已有账号?</span>
    </div></el-col></el-row>
    </div>
    <div class="h-[78%] w-[100%]  bg-white" > 
        <el-scrollbar class="w-[100%]">
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
    <div ><svgicon style="width: 10px; height: 10px;" class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon><span>最少8个字符</span></div>
    <div class="h-fit w-fit flex" ><div class="w-[12px] h-[52px] flex flex-col mr-2" ><svgicon style="width: 10px; height: 10px;" class= " w-[12px] h-[12px]" iconName="icon-kongxinduigou" color="#09839d" ></svgicon></div><span class="h-fit" >可使用英文、数字、下划线组合、不
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
    <div ><svgicon style="width: 10px; height: 10px;" class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>最少8个字符</div>
    <div><svgicon style="width: 10px; height: 10px;" class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>不能全为数字、字母或特殊符号</div>
    <div><svgicon style="width: 10px; height: 10px;" class= "mr-2" iconName="icon-kongxinduigou" color="#09839d" ></svgicon>数字、字母、特殊字符任意组合</div>
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
        :model="organizationinfoform"
        size="small"
        class=" mt-[36px]"
        :rules="organizationinfoformrules"
      >
        <el-form-item label="机构中文全称：" prop="FullChinesename" >
          <div class=" absolute -left-48 flex h-[20px] items-center"  >
          <div  class="h-[55%] w-[2.5px] bg-[#007f99] mr-1" ></div>
            <span class=" font-bold text-sm" >机构信息</span></div>
          <el-input v-model="organizationinfoform.FullChinesename" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="机构中文简称："  prop="noFullChinesename" >
          <el-input placeholder="请输入" v-model="accountinfoform.noFullChinesename"  />
        </el-form-item>
        <el-form-item label="机构英文全称：" prop="FullEnglishname" >
          <el-input placeholder="请输入" v-model="accountinfoform.FullEnglishname"   />
        </el-form-item>
        <el-form-item label="机构英文简称："  prop="noFullEnglishname">
          <el-input v-model="organizationinfoform.noFullEnglishname" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="机构性质：" prop="property">
          <el-select v-model="organizationinfoform.property" class="w-[100%]" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
        </el-form-item>
        <el-form-item label="统一社会信用代码：" prop="UnifiedSocialCreditIdentifier">
          <el-input placeholder="请输入" v-model="accountinfoform.UnifiedSocialCreditIdentifier"   />
        </el-form-item>
        <el-form-item label="机构证件扫描：" class="upload" prop="legalname">
          <!-- <el-input placeholder="请输入" v-model="accountinfoform.UnifiedSocialCreditIdentifier"   /> -->
          <el-tooltip
        effect="light"
        placement="right-start"
        :visible="visible"
      >
      <template #content>
<div class="w-[15.5vw] h-fit  flex justify-start flex-col items-center" >
<span class=" text-[#565b5c]" >单位的机构法人代表证, 正反面扫描成一个文件,上传文件大小不超过5MB</span>
</div>
</template>
<el-upload
    ref="upload"
    class="upload-demo"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :before-upload="beforeAvatarUpload"
  >
    <template #trigger>
      <el-button type="primary" color="#007f99" plain>上传文件</el-button>
    </template>
    <template #tip>
      <div class="el-upload__tip text-red">
        只支持.jpg .png格式,文件大小限制在5MB之内
      </div>
    </template>
  </el-upload>
</el-tooltip>
        </el-form-item>
        <el-form-item label="法人姓名：" prop="legalname">
          <el-input v-model="organizationinfoform.legalname" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="法人代表身份证号码：" prop="legalid">
          <el-input v-model="organizationinfoform.legalid" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="通讯地址：" prop="contactaddress">
          <el-input v-model="organizationinfoform.contactaddress" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="邮编：" prop="postcode">
          <el-input v-model="organizationinfoform.postcode" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="机构简介：" prop="introductory">
          <el-input v-model="organizationinfoform.introductory"
    maxlength="300"
    show-word-limit
    type="textarea" placeholder="请输入文字"
    :autosize="{ minRows: 3, maxRows: 6 }"
    />
        </el-form-item>
      </el-form>
      <el-form
      label-position="right"
        :model="organizationadminform"
        size="small"
        class=" mt-[36px]"
        :rules="organizationadminformrules"
      >
        <el-form-item label="真实姓名："  prop="name">
          <div class=" absolute -left-48 flex h-[20px] items-center"  >
          <div  class="h-[55%] w-[2.5px] bg-[#007f99] mr-1" ></div>
            <span class=" font-bold  text-sm" >机构管理员信息</span></div>
            <el-input v-model="organizationadminform.name" placeholder="请输入"  />
        </el-form-item>
        <el-form-item label="电话：" prop="phone">
          <el-input v-model="organizationadminform.phone" placeholder="请输入"  />
        </el-form-item>
        <el-form-item label="证件类型：" prop="certificatetype">
          <el-select v-model="organizationadminform.certificatetype" class="w-[100%]" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />  </el-select>
        </el-form-item>
        <el-form-item label="证件号码：" prop="certificatecode">
          <el-input v-model="organizationadminform.certificatecode" placeholder="请输入"  />
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
// import { genFileId,UploadInstance, UploadProps, UploadRawFile  } from 'element-plus'
    import { reactive,ref ,watch} from "vue";
    import { ElMessage } from 'element-plus'
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
    let organizationinfoformrules=reactive({
      FullChinesename: [
              { required: true,min:6,max:16, message: '必填项', trigger: 'blur' },
              // { min:6,max:16, message: '用户名长度最少6位', trigger: 'blur' }
            ],
            noFullChinesename: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ],
            // FullEnglishname: [
            //   { required: true, message: '必填项', trigger: 'blur' },
            //   // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            // ],
            // noFullEnglishname: [
            //   { required: true, message: '必填项', trigger: 'blur' },
            //   // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            // ], 
            property: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            UnifiedSocialCreditIdentifier: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            legalname: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            legalid: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            contactaddress: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            postcode: [
              { required: true, message: '必填项', trigger: 'blur' },
              // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            ], 
            // introductory: [
            //   { required: true, message: '必填项', trigger: 'blur' },
            //   // { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
            // ],  
    })
        let accountinfoform=reactive({
        username:'',
        password:'',
        affirmpassword:'',
        email:'',
        emailcode:''
    })
    let organizationinfoform=reactive({
      FullChinesename:'',
      noFullChinesename:'',
      FullEnglishname:'',
      noFullEnglishname:'',
      property:'',
      UnifiedSocialCreditIdentifier:'',
      legalname:'',
      legalid:'',
      contactaddress:'',
      postcode:'',
      introductory:'',
    })
    let organizationadminform=reactive({
      name:'',
      phone:'',
      certificatetype:'',
      certificatecode:'',
    })
        let organizationadminformrules=reactive({
      name: [
              { required: true, message: '必填项', trigger: 'blur' },
            ],
            phone: [
              { required: true, message: '必填项', trigger: 'blur' },
            ],
            certificatetype: [
              { required: true, message: '必填项', trigger: 'blur' },
            ],
            certificatecode: [
              { required: true, message: '必填项', trigger: 'blur' },
            ],
          
          }
    
    )
    const upload = ref()
    const beforeAvatarUpload= (rawFile) => {
  if (rawFile.type !== 'png/jpg') {
    ElMessage.error('仅支持png,png格式')
    return false
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('文件大小不能超过5MB!')
    return false
  }
  return true
}

let goperRegister=()=>{
  et.emit("goperRegister")
}
let gologin=()=>{
  et.emit("gologin")
}



    </script  >
    <style scoped>
    .el-tooltip__trigger{
      width: 100%;
    }
   .el-upload{
      width: 70%;
    }
    .upload ::v-deep .el-form-item__label{
      width: 30%;
      color:black ;
    }
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
    width:30%;
    color: black;
    }
    .el-scrollbar ::v-deep .el-scrollbar__wrap{
    width: 100%;
    
    }
    .el-scrollbar ::v-deep .el-scrollbar__view{
      margin-top: 18px;
    width: 55%;
    position: relative;
    right: -14.25%;
    }
  .b{
        box-shadow:0px -5px 6px #dfe1e4;
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