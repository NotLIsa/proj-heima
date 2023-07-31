<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 15:18:43
 * @LastEditTime: 2023-07-31 11:33:00
 * @Description: 
-->
<script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore()
const loginoutHandle = () => {
  userStore.loginOut();
}
</script>
<template>
  <div class="flex bg-[#333] text-gray-200 text-14px p-15px px-40px">
    <div class="flex w-1200px m-auto  justify-end">
      <div class="cursor-pointer">
        <span class="">
          <RouterLink to="/login" v-if="!userStore.userInfo.nickname" class="hover">请先登录</RouterLink>
          <span v-else>
            <span>{{ userStore.userInfo.nickname }}</span>
            <el-divider direction="vertical" />
            <span @click="loginoutHandle" class="hover" >退出登录</span>
           </span>
         
          <!-- <div v-else>1111</div> -->
        </span>
        <el-divider direction="vertical" />
        <span class="hover">帮助中心</span>
        <el-divider direction="vertical" />
        <span class="hover">关于我们</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(a:-webkit-any-link ){
  text-decoration: none;
  color:white;
}
.hover:hover{
  color: $xxtColor;
}
</style>