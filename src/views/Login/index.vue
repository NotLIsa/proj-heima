<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 12:05:59
 * @LastEditTime: 2023-07-31 10:21:21
 * @Description: 
-->
<script setup>
import { ref } from 'vue';
// import { loginAPI } from '@/apis/user';
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus';
const userStore = useUserStore()
const formRef = ref(null);
const numberValidateForm = ref({
  account: 'heima289',
  password:'hm#qd@23!',
  agree: true,
});
const router = useRouter();
// const loginData = ref();
const submitForm =  () => {
  const { account, password } = numberValidateForm.value
  // 调用实例方法
  formRef.value.validate(async (valid) => {
    // valid: 所有表单都通过校验  才为true
    console.log(valid)
    // 以valid做为判断条件 如果通过校验才执行登录逻辑
    if (valid) {
      // TODO LOGIN
      await userStore.getUserInfo({ account, password })
      // 1. 提示用户
      ElMessage({ type: 'success', message: '登录成功' })
      // 2. 跳转首页
      router.replace({ path: '/' })
    }
  
  console.log(userStore.userInfo.nickname,'userinfo')
}
  )
}

const rules = {
  account: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码长度为6-14个字符', trigger: 'blur' },
  ],
  //自定义校验规则
  agree: [
    {
      validator: (rule, value, callback) => {
        console.log(value)
        // 自定义校验逻辑
        // 勾选就通过 不勾选就不通过
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}

const label = ['关于我们','帮助中心','售后服务','配送与验收','商务合作','搜索推荐','友情链接']
</script>
<template>
  <div>
    <div class="w-1200px m-auto flex justify-between items-center py-20px">
      <img src="../../assets/image/logo.png" class="w-160px"/>
      <RouterLink to="/" class="flex items-center text-[#333] text-15px"><div>进入网站首页</div><div class="i-ic:baseline-keyboard-double-arrow-right inline-block text-[#d4cdcd] text-20px"></div></RouterLink>
    </div>
    <div class="bg w-full h-640px">
    </div>
    <div class="absolute bg-white right-25% top-200px w-400px h-300px text-center">
      <div class="my-10px font-600 mb-40px">账户登录</div>
      <el-form ref="formRef" :model="numberValidateForm" label-width="80px" class="demo-ruleForm" :rules="rules">
        <el-form-item label="账户" prop="account" >
        <!-- 账户 -->
          <el-input style="width:90%;margin-bottom: 10px;"  v-model="numberValidateForm.account"/>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input style="width:90%" v-model="numberValidateForm.password"/>
        </el-form-item>
        <el-form-item prop="agree">
          <el-checkbox class="-ml-20px" v-model="numberValidateForm.agree">我已同意隐私条款和服务条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="-ml-40px" @click="submitForm(formRef)" style="width: 100%;">点击登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class=" text-14px text-[#666] text-center">
      <div class="flex justify-center my-50px">
        <div v-for="(item, index) in label" :key="index+'shsg'">
          {{ item }}
           <el-divider direction="vertical" border-style="solid" v-show="index<label.length-1"/>
        </div>
      </div>
      <div>CopyRight @小兔鲜儿</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg{
  background-image: url('@/assets/image/login-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>